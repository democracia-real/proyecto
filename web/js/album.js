/**
 * Reproductor de álbum unificado con tabs.
 * Las pistas de cada álbum están en el HTML como <ul data-album-id="XX">.
 * Los tabs muestran/ocultan listas. Sin fetch obligatorio — todo funciona sin servidor.
 * El fetch de lyrics.json solo se usa para enriquecer con letras (modal).
 */
(function() {
    'use strict';

    var player = document.getElementById('albumPlayer');
    var nowEl = document.getElementById('albumNow');
    var tabsEl = document.getElementById('albumTabs');
    var docsLinkEl = document.getElementById('albumDocsLink');
    var btnPrev = document.getElementById('albumPrev');
    var btnNext = document.getElementById('albumNext');
    var albumSectionEl = document.getElementById('album');
    var playerWrapEl = document.querySelector('.home-album-player-wrap');
    var coverEl = document.getElementById('albumCover');
    var nowStateEl = document.getElementById('albumNowState');
    var progressFillEl = document.getElementById('albumProgressFill');
    var progressBufferEl = document.getElementById('albumProgressBuffer');
    var progressEl = document.getElementById('albumProgress');
    var timeCurrentEl = document.getElementById('albumTimeCurrent');
    var timeTotalEl = document.getElementById('albumTimeTotal');
    var albumActiveInfoEl = document.getElementById('albumActiveInfo');
    var playPauseBtn = document.getElementById('albumPlayPause');
    var muteBtn = document.getElementById('albumMute');
    var volumeInput = document.getElementById('albumVolume');
    var playerLyricBtn = document.getElementById('albumPlayerLyric');

    if (!player || !tabsEl) return;

    var allLists = document.querySelectorAll('.home-album-tracklist[data-album-id]');
    if (!allLists.length) return;

    var DOCS_URLS = { '00': '/#album', '01': '/docs/01-diagnostico/#album', '02': '/docs/02-problemas/#album', '03': '/docs/03-propuestas/', '04': '/docs/04-organizacion/', '05': '/docs/05-ia/', '06': '/docs/06-legal/', '07': '/docs/07-web/', '08': '/docs/08-investigacion/#album' };
    var LYRICS_URLS = { '00': '/audio/00-manifiesto_sonoro/lyrics.json', '01': '/audio/01-diagnostico/lyrics.json', '02': '/audio/02-problemas_estructurales/lyrics.json', '03': '/audio/03-propuestas_institucionales/lyrics.json', '04': '/audio/04-modelo_organizativo_partido/lyrics.json', '05': '/audio/05-uso_de_ia_y_automatizacion/lyrics.json', '06': '/audio/06-hoja_de_ruta_legal/lyrics.json', '07': '/audio/07-web_publica_y_transparencia/lyrics.json', '08': '/audio/08-investigacion_abierta/lyrics.json' };
    var ALBUM_SLUGS = { '00': '00-manifiesto_sonoro', '01': '01-diagnostico', '02': '02-problemas_estructurales', '03': '03-propuestas_institucionales', '04': '04-modelo_organizativo_partido', '05': '05-uso_de_ia_y_automatizacion', '06': '06-hoja_de_ruta_legal', '07': '07-web_publica_y_transparencia', '08': '08-investigacion_abierta' };
    // Activar solo cuando existan archivos en /imagenes/portadas/tracks/{album}-{n}.png
    var ENABLE_TRACK_COVERS = false;

    var currentAlbumId = '00';
    var currentTrackIdx = 0;
    var lyricsCache = {};
    var loadPromises = {};

    function getActiveList() {
        return document.querySelector('.home-album-tracklist[data-album-id="' + currentAlbumId + '"]');
    }

    function getTracks() {
        var list = getActiveList();
        return list ? Array.from(list.querySelectorAll('.home-album-track')) : [];
    }

    function getAlbumIdsInOrder() {
        return Array.from(tabsEl.querySelectorAll('.home-album-tab[data-album-id]'))
            .map(function(btn) { return btn.getAttribute('data-album-id'); })
            .filter(Boolean);
    }

    function getNextAlbumId(albumId) {
        var ordered = getAlbumIdsInOrder();
        var currentPos = ordered.indexOf(albumId);
        if (currentPos === -1 || currentPos >= ordered.length - 1) return null;
        return ordered[currentPos + 1];
    }

    function playFirstTrackFromNextAlbum(fromAlbumId) {
        var startAlbumId = fromAlbumId;
        var nextAlbumId = getNextAlbumId(startAlbumId);

        function tryNextAlbum(albumId) {
            if (!albumId) return;
            ensureAlbumData(albumId).finally(function() {
                // Si el usuario cambió de álbum durante la carga, no forzar salto automático.
                if (currentAlbumId !== startAlbumId) return;

                var list = document.querySelector('.home-album-tracklist[data-album-id="' + albumId + '"]');
                var tracksCount = list ? list.querySelectorAll('.home-album-track').length : 0;
                if (tracksCount > 0) {
                    switchAlbum(albumId, true);
                    return;
                }
                tryNextAlbum(getNextAlbumId(albumId));
            });
        }

        tryNextAlbum(nextAlbumId);
    }

    function trackWord(n) {
        return n === 1 ? 'canción' : 'canciones';
    }

    function updateAlbumActiveInfo(albumId) {
        if (!albumActiveInfoEl) return;
        var tab = tabsEl.querySelector('.home-album-tab[data-album-id="' + albumId + '"]');
        var albumLabel = tab ? tab.textContent.trim() : ('Álbum ' + albumId);
        var count = getTracks().length;
        albumActiveInfoEl.textContent = 'Álbum activo: ' + albumLabel + ' · ' + count + ' ' + trackWord(count);
    }

    function buildTrackItem(track, index, audioPath) {
        var li = document.createElement('li');
        li.className = 'home-album-track';
        if (audioPath && track.audioFile) {
            li.setAttribute('data-src', audioPath + encodeURIComponent(track.audioFile));
        }

        var meta = [];
        if (track.theme) meta.push(track.theme);
        if (track.style && track.style !== '—') meta.push(track.style);

        li.innerHTML =
            '<span class="home-album-track-num">' + (index + 1) + '</span>' +
            '<span class="home-album-track-title">' + (track.title || '') + '</span>' +
            '<span class="home-album-track-meta">' + meta.join(' · ') + '</span>' +
            '<button type="button" class="home-album-track-play" aria-label="Reproducir">▶</button>' +
            '<button type="button" class="home-album-track-lyric" aria-label="Ver letra">Ver letra</button>' +
            '<button type="button" class="home-album-track-share" aria-label="Compartir">Compartir</button>';

        return li;
    }

    function hydrateTracklistFromJson(albumId, data) {
        var list = document.querySelector('.home-album-tracklist[data-album-id="' + albumId + '"]');
        if (!list || list.getAttribute('data-sync-json') !== 'true') return;
        if (!data || !Array.isArray(data.tracks) || !data.tracks.length) return;

        list.innerHTML = '';
        data.tracks.forEach(function(track, index) {
            list.appendChild(buildTrackItem(track, index, data.audioPath || ''));
        });
        list.setAttribute('data-json-ready', 'true');
    }

    function ensureAlbumData(albumId) {
        if (lyricsCache[albumId]) return Promise.resolve(lyricsCache[albumId]);
        if (loadPromises[albumId]) return loadPromises[albumId];

        var jsonUrl = LYRICS_URLS[albumId];
        if (!jsonUrl) return Promise.resolve(null);

        loadPromises[albumId] = fetch(jsonUrl)
            .then(function(r) { return r.ok ? r.json() : null; })
            .then(function(data) {
                if (data && data.tracks) {
                    lyricsCache[albumId] = data;
                    hydrateTracklistFromJson(albumId, data);
                    return data;
                }
                return null;
            })
            .catch(function() { return null; });

        return loadPromises[albumId];
    }

    function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
        var mins = Math.floor(seconds / 60);
        var secs = Math.floor(seconds % 60);
        return mins + ':' + String(secs).padStart(2, '0');
    }

    function getAlbumCoverUrl(albumId) {
        var slug = ALBUM_SLUGS[albumId];
        return slug ? '/imagenes/portadas/albums/' + slug + '.png' : '';
    }

    function getTrackCoverUrl(albumId, trackIndex) {
        if (!ENABLE_TRACK_COVERS) return '';
        var slug = ALBUM_SLUGS[albumId];
        if (!slug) return '';
        return '/imagenes/portadas/tracks/' + slug + '-' + String(trackIndex + 1).padStart(2, '0') + '.png';
    }

    function updateAlbumTheme(albumId) {
        if (albumSectionEl) albumSectionEl.setAttribute('data-album-theme', albumId);
    }

    function setNowState(label, isPlaying) {
        if (nowStateEl) nowStateEl.textContent = label;
        if (playerWrapEl) playerWrapEl.classList.toggle('is-playing', isPlaying === true);
        if (albumSectionEl) albumSectionEl.classList.toggle('is-playing', isPlaying === true);
    }

    function extractBpm(text) {
        if (!text) return null;
        var m = String(text).match(/BPM\s*([0-9]{2,3})/i);
        if (!m) return null;
        var bpm = parseInt(m[1], 10);
        return Number.isFinite(bpm) ? bpm : null;
    }

    function applyBeatForTrack(index) {
        var bpm = null;
        var cached = lyricsCache[currentAlbumId];
        if (cached && cached.tracks && cached.tracks[index] && cached.tracks[index].style) {
            bpm = extractBpm(cached.tracks[index].style);
        }
        if (!bpm) {
            var metaEl = getTracks()[index] && getTracks()[index].querySelector('.home-album-track-meta');
            bpm = extractBpm(metaEl ? metaEl.textContent : '');
        }
        if (!bpm) bpm = 120;
        bpm = Math.max(60, Math.min(190, bpm));
        var beatMs = Math.round(60000 / bpm);
        if (albumSectionEl) albumSectionEl.style.setProperty('--album-beat-ms', beatMs + 'ms');
    }

    function addRippleEffect(el) {
        if (!el || el.dataset.rippleBound) return;
        el.dataset.rippleBound = '1';
        el.addEventListener('pointerdown', function(e) {
            if (e.button !== 0) return;
            var rect = el.getBoundingClientRect();
            var ripple = document.createElement('span');
            var size = Math.max(rect.width, rect.height) * 1.7;
            ripple.className = 'btn-ripple';
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            el.appendChild(ripple);
            setTimeout(function() { ripple.remove(); }, 650);
        });
    }

    function updateProgressUi() {
        var duration = Number.isFinite(player.duration) ? player.duration : 0;
        var current = Number.isFinite(player.currentTime) ? player.currentTime : 0;
        var progress = duration > 0 ? (current / duration) * 100 : 0;
        var buffer = 0;

        if (duration > 0 && player.buffered && player.buffered.length) {
            var bufferedEnd = player.buffered.end(player.buffered.length - 1);
            buffer = Math.min(100, (bufferedEnd / duration) * 100);
        }

        if (progressFillEl) progressFillEl.style.width = progress + '%';
        if (progressBufferEl) progressBufferEl.style.width = buffer + '%';
        if (progressEl) {
            progressEl.setAttribute('aria-valuemin', '0');
            progressEl.setAttribute('aria-valuemax', String(Math.max(1, Math.floor(duration))));
            progressEl.setAttribute('aria-valuenow', String(Math.floor(current)));
        }
        if (timeCurrentEl) timeCurrentEl.textContent = formatTime(current);
        if (timeTotalEl) timeTotalEl.textContent = formatTime(duration);
    }

    function setPlayPauseLabel() {
        if (!playPauseBtn) return;
        if (!player.src) {
            playPauseBtn.textContent = '▶';
            return;
        }
        playPauseBtn.textContent = player.paused ? '▶' : '⏸';
    }

    function setMuteLabel() {
        if (!muteBtn) return;
        if (player.muted || player.volume === 0) {
            muteBtn.textContent = '🔇';
        } else if (player.volume < 0.5) {
            muteBtn.textContent = '🔉';
        } else {
            muteBtn.textContent = '🔊';
        }
    }

    function seekToClientX(clientX) {
        if (!progressEl) return;
        var duration = Number.isFinite(player.duration) ? player.duration : 0;
        if (!duration) return;
        var rect = progressEl.getBoundingClientRect();
        var ratio = (clientX - rect.left) / rect.width;
        ratio = Math.min(1, Math.max(0, ratio));
        player.currentTime = ratio * duration;
        updateProgressUi();
    }

    function updateCover(trackIndex, trackTitle) {
        if (!coverEl) return;
        var albumCover = getAlbumCoverUrl(currentAlbumId);
        var trackCover = getTrackCoverUrl(currentAlbumId, trackIndex);
        if (!albumCover) return;

        coverEl.alt = 'Portada de ' + (trackTitle || ('álbum ' + currentAlbumId));
        coverEl.dataset.albumFallback = albumCover;
        coverEl.dataset.fallbackDone = '0';
        coverEl.src = trackCover || albumCover;
    }

    if (coverEl) {
        coverEl.addEventListener('error', function() {
            var fallback = coverEl.dataset.albumFallback;
            var alreadyDone = coverEl.dataset.fallbackDone === '1';
            if (!alreadyDone && fallback) {
                coverEl.dataset.fallbackDone = '1';
                coverEl.src = fallback;
            }
        });
    }

    // --- Switch album ---
    function switchAlbum(albumId, autoPlayFirstTrack) {
        if (playerWrapEl) playerWrapEl.classList.add('is-switching');
        currentAlbumId = albumId;
        currentTrackIdx = 0;
        player.pause();
        updateAlbumTheme(albumId);

        tabsEl.querySelectorAll('.home-album-tab').forEach(function(b) {
            b.classList.toggle('home-album-tab-active', b.getAttribute('data-album-id') === albumId);
        });

        allLists.forEach(function(ul) {
            var isActive = ul.getAttribute('data-album-id') === albumId;
            ul.style.display = isActive ? '' : 'none';
            ul.classList.toggle('home-album-tracklist-active', isActive);
        });

        if (docsLinkEl && DOCS_URLS[albumId]) {
            docsLinkEl.innerHTML = '<a href="' + DOCS_URLS[albumId] + '">Ver álbum completo y letras en Documentación →</a>';
        }

        if (nowEl) nowEl.textContent = 'Cargando pistas…';
        ensureAlbumData(albumId).finally(function() {
            if (currentAlbumId !== albumId) return;
            bindTrackEvents();
            updateAlbumActiveInfo(albumId);
            setTrack(0, autoPlayFirstTrack === true);
            if (!getTracks().length && nowEl) nowEl.textContent = 'No hay pistas disponibles';
            if (playerWrapEl) {
                setTimeout(function() { playerWrapEl.classList.remove('is-switching'); }, 200);
            }
        });
    }

    // --- Set track ---
    function setTrack(index, autoPlay) {
        var tracks = getTracks();
        if (index < 0 || index >= tracks.length) return;
        currentTrackIdx = index;
        var li = tracks[index];
        var src = li.getAttribute('data-src');
        if (src) player.src = src;
        var titleEl = li.querySelector('.home-album-track-title');
        var trackTitle = titleEl ? titleEl.textContent : '';
        nowEl.textContent = (index + 1) + '. ' + trackTitle;
        tracks.forEach(function(el, j) { el.classList.toggle('home-album-track-current', j === index); });
        updateCover(index, trackTitle);
        applyBeatForTrack(index);
        updateProgressUi();
        setPlayPauseLabel();
        if (autoPlay !== false && src) player.play().catch(function() {});
    }

    // --- Player controls ---
    player.addEventListener('playing', function() {
        setNowState('Reproduciendo', true);
        setPlayPauseLabel();
        updateProgressUi();
    });
    player.addEventListener('pause', function() {
        setNowState('Pausado', false);
        setPlayPauseLabel();
        updateProgressUi();
    });
    player.addEventListener('waiting', function() {
        setNowState('Cargando…', false);
    });
    player.addEventListener('timeupdate', updateProgressUi);
    player.addEventListener('durationchange', updateProgressUi);
    player.addEventListener('progress', updateProgressUi);
    player.addEventListener('loadedmetadata', updateProgressUi);
    player.addEventListener('volumechange', function() {
        if (volumeInput) volumeInput.value = String(player.muted ? 0 : player.volume);
        setMuteLabel();
    });

    player.addEventListener('ended', function() {
        setNowState('Finalizada', false);
        var tracks = getTracks();
        if (currentTrackIdx + 1 < tracks.length) {
            setTrack(currentTrackIdx + 1);
            return;
        }
        playFirstTrackFromNextAlbum(currentAlbumId);
    });
    player.addEventListener('error', function() {
        setNowState('Error de reproducción', false);
        if (nowEl) nowEl.textContent = 'No se pudo reproducir esta pista. Prueba con otra.';
    });
    if (btnPrev) btnPrev.addEventListener('click', function() {
        if (currentTrackIdx <= 0) { player.currentTime = 0; player.play().catch(function() {}); return; }
        setTrack(currentTrackIdx - 1);
    });
    if (btnNext) btnNext.addEventListener('click', function() {
        var tracks = getTracks();
        if (currentTrackIdx + 1 < tracks.length) {
            setTrack(currentTrackIdx + 1);
            return;
        }
        playFirstTrackFromNextAlbum(currentAlbumId);
    });
    if (playPauseBtn) playPauseBtn.addEventListener('click', function() {
        if (!player.src) return;
        if (player.paused) player.play().catch(function() {});
        else player.pause();
    });
    if (muteBtn) muteBtn.addEventListener('click', function() {
        player.muted = !player.muted;
        setMuteLabel();
    });
    if (volumeInput) volumeInput.addEventListener('input', function() {
        var nextVolume = parseFloat(volumeInput.value);
        if (!Number.isFinite(nextVolume)) return;
        player.volume = Math.min(1, Math.max(0, nextVolume));
        player.muted = player.volume === 0;
        setMuteLabel();
    });
    if (progressEl) {
        progressEl.addEventListener('click', function(e) {
            seekToClientX(e.clientX);
        });
        progressEl.addEventListener('keydown', function(e) {
            if (!Number.isFinite(player.duration) || player.duration <= 0) return;
            var step = e.shiftKey ? 10 : 5;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                player.currentTime = Math.max(0, player.currentTime - step);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                player.currentTime = Math.min(player.duration, player.currentTime + step);
            } else if (e.key === 'Home') {
                e.preventDefault();
                player.currentTime = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                player.currentTime = player.duration;
            }
            updateProgressUi();
        });
    }

    // --- Bind click events on tracks ---
    function bindTrackEvents() {
        var tracks = getTracks();
        tracks.forEach(function(li, i) {
            if (li.dataset.bound) return;
            li.dataset.bound = '1';
            li.addEventListener('click', function(e) { if (!e.target.closest('button')) setTrack(i); });
            var playBtn = li.querySelector('.home-album-track-play');
            if (playBtn) playBtn.addEventListener('click', function(e) { e.stopPropagation(); setTrack(i); });
            var lyricBtn = li.querySelector('.home-album-track-lyric');
            if (lyricBtn) lyricBtn.addEventListener('click', function(e) { e.stopPropagation(); showLyric(i); });
            var shareBtn = li.querySelector('.home-album-track-share');
            if (shareBtn) shareBtn.addEventListener('click', function(e) { e.stopPropagation(); openShare(i, shareBtn); });
            addRippleEffect(playBtn);
            addRippleEffect(lyricBtn);
            addRippleEffect(shareBtn);
        });
    }

    // --- Lyrics modal ---
    function showLyric(i) {
        var modal = document.getElementById('lyricModal');
        if (!modal) return;
        var titleEl = modal.querySelector('.lyric-modal-title');
        var bodyEl = modal.querySelector('.lyric-modal-body');

        var trackEl = getTracks()[i];
        var trackTitle = trackEl ? (trackEl.querySelector('.home-album-track-title') || {}).textContent : '';
        var title = (i + 1).toString().padStart(2, '0') + ' — ' + trackTitle;
        var lyrics = '(Letra pendiente)';

        var cached = lyricsCache[currentAlbumId];
        if (cached && cached.tracks && cached.tracks[i] && cached.tracks[i].lyrics) {
            lyrics = cached.tracks[i].lyrics;
        }

        if (titleEl) titleEl.textContent = title;
        if (bodyEl) bodyEl.textContent = lyrics;
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('lyric-modal-open');
        document.body.style.overflow = 'hidden';
        var closeBtn = modal.querySelector('.lyric-modal-close');
        if (closeBtn) closeBtn.focus();
    }

    // --- Modal close ---
    var modal = document.getElementById('lyricModal');
    if (modal) {
        function closeLyricModal() {
            modal.setAttribute('aria-hidden', 'true');
            modal.classList.remove('lyric-modal-open');
            document.body.style.overflow = '';
        }
        var closeBtn = modal.querySelector('.lyric-modal-close');
        var backdrop = modal.querySelector('.lyric-modal-backdrop');
        if (closeBtn) closeBtn.addEventListener('click', closeLyricModal);
        if (backdrop) backdrop.addEventListener('click', closeLyricModal);
        modal.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLyricModal(); });
    }

    // --- Share ---
    function openShare(index, anchorEl) {
        var trackEl = getTracks()[index];
        var trackTitle = trackEl ? (trackEl.querySelector('.home-album-track-title') || {}).textContent : '';
        var url = window.location.origin + window.location.pathname + '#album-' + currentAlbumId + '-' + (index + 1);
        var text = 'Escucha "' + trackTitle + '" — Democracia Real';
        var full = text + ' ' + url;
        if (navigator.share) { navigator.share({ title: text, text: text, url: url }).catch(function() {}); return; }
        var dd = document.getElementById('albumShareDropdown');
        var wa = document.getElementById('albumShareWa');
        var x = document.getElementById('albumShareX');
        var cp = document.getElementById('albumShareCopy');
        if (dd && wa && x && cp && anchorEl) {
            wa.href = 'https://wa.me/?text=' + encodeURIComponent(full);
            x.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
            cp.onclick = function() {
                navigator.clipboard.writeText(url).then(function() {
                    cp.textContent = '¡Copiado!';
                    setTimeout(function() { cp.textContent = 'Copiar enlace'; }, 1500);
                });
            };
            var rect = anchorEl.getBoundingClientRect();
            dd.style.position = 'fixed';
            dd.style.top = (rect.bottom + 6) + 'px';
            dd.style.left = Math.max(8, rect.left) + 'px';
            dd.setAttribute('aria-hidden', 'false');
            dd.classList.add('home-album-share-dropdown-open');
        }
    }

    var playerShareBtn = document.getElementById('albumPlayerShare');
    if (playerLyricBtn) {
        playerLyricBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showLyric(currentTrackIdx >= 0 ? currentTrackIdx : 0);
        });
    }
    if (playerShareBtn) {
        playerShareBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openShare(currentTrackIdx >= 0 ? currentTrackIdx : 0, playerShareBtn);
        });
    }
    document.addEventListener('click', function() {
        var dd = document.getElementById('albumShareDropdown');
        if (dd) { dd.setAttribute('aria-hidden', 'true'); dd.classList.remove('home-album-share-dropdown-open'); }
    });
    var shareDD = document.getElementById('albumShareDropdown');
    if (shareDD) shareDD.addEventListener('click', function(e) { e.stopPropagation(); });

    // --- Tab click handlers ---
    tabsEl.querySelectorAll('.home-album-tab').forEach(function(btn) {
        addRippleEffect(btn);
        btn.addEventListener('click', function() {
            var id = btn.getAttribute('data-album-id');
            if (id && id !== currentAlbumId) switchAlbum(id, true);
        });
    });

    // --- Init ---
    bindTrackEvents();
    switchAlbum('00', false);
    updateAlbumTheme(currentAlbumId);
    updateProgressUi();
    setNowState('Pausado', false);
    setPlayPauseLabel();
    setMuteLabel();
    document.querySelectorAll('.home-album-btn, .home-album-ctrl-btn').forEach(addRippleEffect);

    // --- Deep link: #album-02-1 ---
    function applyAlbumHash(hash) {
        var m = hash && hash.match(/^#album-(\d{2})-(\d+)$/);
        if (!m) return;

        var albumId = m[1];
        var n = parseInt(m[2], 10);
        var focusTarget = playerWrapEl || document.getElementById('album');
        if (focusTarget) focusTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });

        switchAlbum(albumId, false);
        if (n >= 1) {
            ensureAlbumData(albumId).finally(function() {
                if (currentAlbumId === albumId) setTrack(n - 1, true);
            });
        } else {
            ensureAlbumData(albumId).finally(function() {
                if (currentAlbumId === albumId) setTrack(0, true);
            });
        }
    }

    if (window.location.hash) applyAlbumHash(window.location.hash);
    window.addEventListener('hashchange', function() { applyAlbumHash(window.location.hash); });
})();
