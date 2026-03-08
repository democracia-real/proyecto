/**
 * Reproductor de podcast para portada.
 * Carga episodios desde /audio/podcast/index.json.
 */
(function() {
    'use strict';
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var PODCAST_INDEX_URL = '/audio/podcast/index.json';
    var COVER_BY_MODULE = {
        '00': '/imagenes/portadas/albums/00-manifiesto_sonoro.png',
        '01': '/imagenes/portadas/albums/01-diagnostico.png',
        '02': '/imagenes/portadas/albums/02-problemas_estructurales.png',
        '03': '/imagenes/portadas/albums/03-propuestas_institucionales.png',
        '04': '/imagenes/portadas/albums/04-modelo_organizativo_partido.png',
        '05': '/imagenes/portadas/albums/05-uso_de_ia_y_automatizacion.png',
        '06': '/imagenes/portadas/albums/06-hoja_de_ruta_legal.png',
        '07': '/imagenes/portadas/albums/07-web_publica_y_transparencia.png',
        '08': '/imagenes/portadas/albums/08-investigacion_abierta.png'
    };
    var DEFAULT_COVER = COVER_BY_MODULE['00'];

    var section = document.getElementById('podcast');
    var listEl = document.getElementById('podcastList');
    var player = document.getElementById('podcastPlayer');
    var nowEl = document.getElementById('podcastNow');
    var coverEl = document.getElementById('podcastCover');
    var playPauseBtn = document.getElementById('podcastPlayPause');
    var prevBtn = document.getElementById('podcastPrev');
    var nextBtn = document.getElementById('podcastNext');
    var shareBtn = document.getElementById('podcastShare');
    var speedBtn = document.getElementById('podcastSpeed');
    var progressEl = document.getElementById('podcastProgress');
    var progressFillEl = document.getElementById('podcastProgressFill');
    var timeEl = document.getElementById('podcastTime');
    var shareDropdown = document.getElementById('podcastShareDropdown');
    var shareWaEl = document.getElementById('podcastShareWa');
    var shareXEl = document.getElementById('podcastShareX');
    var shareCopyEl = document.getElementById('podcastShareCopy');

    if (!section || !listEl || !player) return;

    var episodes = [];
    var currentIdx = -1;
    var audioPath = '';
    var SPEEDS = [1, 1.5, 2];
    var speedIdx = 0;

    function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
        var mins = Math.floor(seconds / 60);
        var secs = Math.floor(seconds % 60);
        return mins + ':' + String(secs).padStart(2, '0');
    }

    function getEpisodeSrc(episode) {
        if (!episode) return '';
        if (episode.audioUrl) return episode.audioUrl;
        if (!episode.audioFile) return '';
        return (audioPath || '') + encodeURIComponent(episode.audioFile);
    }

    function getEpisodeCover(episode) {
        if (!episode) return DEFAULT_COVER;
        if (episode.cover) return episode.cover;
        return COVER_BY_MODULE[episode.module] || DEFAULT_COVER;
    }

    function getEpisodeId(episode, index) {
        if (!episode) return String(index + 1).padStart(2, '0');
        return String(episode.id || String(index + 1).padStart(2, '0')).padStart(2, '0');
    }

    function buildEpisodeUrl(index) {
        if (!episodes[index]) return window.location.href;
        return window.location.origin + window.location.pathname + '#podcast-' + getEpisodeId(episodes[index], index);
    }

    function openShare(index, anchorEl) {
        if (index < 0 || index >= episodes.length) return;
        var episode = episodes[index];
        var title = episode.title || ('Episodio ' + (index + 1));
        var url = buildEpisodeUrl(index);
        var text = 'Escucha "' + title + '" — Podcast Democracia Real';
        var full = text + ' ' + url;

        if (navigator.share) {
            navigator.share({ title: text, text: text, url: url }).catch(function() {});
            return;
        }

        if (shareDropdown && shareWaEl && shareXEl && shareCopyEl && anchorEl) {
            shareWaEl.href = 'https://wa.me/?text=' + encodeURIComponent(full);
            shareXEl.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
            shareCopyEl.onclick = function() {
                navigator.clipboard.writeText(url).then(function() {
                    shareCopyEl.textContent = '¡Copiado!';
                    setTimeout(function() { shareCopyEl.textContent = 'Copiar enlace'; }, 1500);
                });
            };
            var rect = anchorEl.getBoundingClientRect();
            shareDropdown.style.position = 'fixed';
            shareDropdown.style.top = (rect.bottom + 6) + 'px';
            shareDropdown.style.left = Math.max(8, rect.left) + 'px';
            shareDropdown.setAttribute('aria-hidden', 'false');
            shareDropdown.classList.add('home-album-share-dropdown-open');
        }
    }

    function updatePlayerUi() {
        var current = Number.isFinite(player.currentTime) ? player.currentTime : 0;
        var duration = Number.isFinite(player.duration) ? player.duration : 0;
        var pct = duration > 0 ? (current / duration) * 100 : 0;
        if (progressFillEl) progressFillEl.style.width = pct + '%';
        if (progressEl) {
            progressEl.setAttribute('aria-valuemin', '0');
            progressEl.setAttribute('aria-valuemax', String(Math.max(1, Math.floor(duration))));
            progressEl.setAttribute('aria-valuenow', String(Math.floor(current)));
            progressEl.setAttribute('aria-valuetext', formatTime(current) + ' de ' + formatTime(duration));
        }
        if (timeEl) timeEl.textContent = formatTime(current) + ' / ' + formatTime(duration);
        if (playPauseBtn) playPauseBtn.textContent = player.paused ? '▶' : '⏸';
    }

    function setCurrent(index, autoPlay) {
        if (!episodes.length || index < 0 || index >= episodes.length) return;
        currentIdx = index;
        var ep = episodes[index];
        var src = getEpisodeSrc(ep);
        if (src) player.src = src;
        if (nowEl) nowEl.textContent = ep.title || 'Episodio';
        if (coverEl) {
            coverEl.src = getEpisodeCover(ep);
            coverEl.alt = 'Portada de ' + (ep.title || 'podcast');
        }

        var nodes = listEl.querySelectorAll('.home-podcast-item');
        Array.prototype.forEach.call(nodes, function(node, nodeIdx) {
            node.classList.toggle('home-podcast-item-active', nodeIdx === index);
        });

        player.playbackRate = SPEEDS[speedIdx];
        updatePlayerUi();
        if (autoPlay === true && src) {
            player.play().catch(function() {});
        }
    }

    function renderEpisodes() {
        listEl.innerHTML = '';
        if (!episodes.length) {
            listEl.innerHTML = '<li class="home-podcast-empty">No hay episodios disponibles.</li>';
            return;
        }
        episodes.forEach(function(ep, index) {
            var li = document.createElement('li');
            li.className = 'home-podcast-item';
            li.tabIndex = 0;
            li.setAttribute('aria-label', 'Seleccionar episodio ' + (ep.title || String(index + 1)));
            li.innerHTML =
                '<button type="button" class="home-podcast-item-play" aria-label="Reproducir episodio">▶</button>' +
                '<span class="home-podcast-item-title">' + (ep.title || ('Episodio ' + (index + 1))) + '</span>' +
                '<span class="home-podcast-item-module">Módulo ' + (ep.module || '--') + '</span>' +
                '<button type="button" class="home-podcast-item-share" aria-label="Compartir episodio">Compartir</button>';

            li.addEventListener('click', function(e) {
                if (!e.target.closest('button')) setCurrent(index, true);
            });
            li.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setCurrent(index, true);
                }
            });
            var btn = li.querySelector('.home-podcast-item-play');
            if (btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    setCurrent(index, true);
                });
            }
            var shareItemBtn = li.querySelector('.home-podcast-item-share');
            if (shareItemBtn) {
                shareItemBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    openShare(index, shareItemBtn);
                });
            }
            listEl.appendChild(li);
        });
        setCurrent(0, false);
    }

    function applyPodcastHash(hash) {
        var match = hash && hash.match(/^#podcast-(\d{2})$/);
        if (!match || !episodes.length) return;
        var episodeId = match[1];
        var targetIdx = episodes.findIndex(function(ep, idx) {
            return getEpisodeId(ep, idx) === episodeId;
        });
        if (targetIdx < 0) return;
        section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        setCurrent(targetIdx, false);
    }

    function seek(clientX) {
        if (!progressEl || !Number.isFinite(player.duration) || player.duration <= 0) return;
        var rect = progressEl.getBoundingClientRect();
        var ratio = (clientX - rect.left) / rect.width;
        ratio = Math.max(0, Math.min(1, ratio));
        player.currentTime = player.duration * ratio;
        updatePlayerUi();
    }

    fetch(PODCAST_INDEX_URL)
        .then(function(r) { return r.ok ? r.json() : null; })
        .then(function(data) {
            if (!data || !Array.isArray(data.episodes)) {
                if (nowEl) nowEl.textContent = 'No se pudo cargar el catálogo de podcast.';
                return;
            }
            audioPath = data.audioPath || '';
            episodes = data.episodes;
            renderEpisodes();
            if (window.location.hash) applyPodcastHash(window.location.hash);
        })
        .catch(function() {
            if (nowEl) nowEl.textContent = 'Error al cargar el podcast.';
        });

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            if (!player.src && episodes.length) {
                setCurrent(currentIdx >= 0 ? currentIdx : 0, false);
            }
            if (!player.src) return;
            if (player.paused) player.play().catch(function() {});
            else player.pause();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (!episodes.length) return;
            if (currentIdx > 0) setCurrent(currentIdx - 1, true);
            else {
                player.currentTime = 0;
                player.play().catch(function() {});
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (!episodes.length) return;
            if (currentIdx + 1 < episodes.length) setCurrent(currentIdx + 1, true);
        });
    }
    if (speedBtn) {
        speedBtn.addEventListener('click', function() {
            speedIdx = (speedIdx + 1) % SPEEDS.length;
            var rate = SPEEDS[speedIdx];
            player.playbackRate = rate;
            speedBtn.textContent = rate + '×';
            speedBtn.setAttribute('title', 'Velocidad: ' + rate + 'x');
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (!episodes.length) return;
            openShare(currentIdx >= 0 ? currentIdx : 0, shareBtn);
        });
    }

    function getSeekClientX(e) {
        if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0].clientX;
        if (e.touches && e.touches.length) return e.touches[0].clientX;
        return e.clientX;
    }

    if (progressEl) {
        progressEl.addEventListener('click', function(e) {
            seek(getSeekClientX(e));
        });
        progressEl.addEventListener('touchend', function(e) {
            if (e.changedTouches && e.changedTouches.length) seek(e.changedTouches[0].clientX);
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
            updatePlayerUi();
        });
    }

    player.addEventListener('timeupdate', updatePlayerUi);
    player.addEventListener('loadedmetadata', updatePlayerUi);
    player.addEventListener('durationchange', updatePlayerUi);
    player.addEventListener('play', updatePlayerUi);
    player.addEventListener('pause', updatePlayerUi);
    player.addEventListener('ended', function() {
        if (currentIdx + 1 < episodes.length) setCurrent(currentIdx + 1, true);
        else updatePlayerUi();
    });

    document.addEventListener('click', function() {
        if (shareDropdown) {
            shareDropdown.setAttribute('aria-hidden', 'true');
            shareDropdown.classList.remove('home-album-share-dropdown-open');
        }
    });
    if (shareDropdown) {
        shareDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    window.addEventListener('hashchange', function() {
        applyPodcastHash(window.location.hash);
    });
})();
