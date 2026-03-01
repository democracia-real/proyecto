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

    if (!player || !tabsEl) return;

    var allLists = document.querySelectorAll('.home-album-tracklist[data-album-id]');
    if (!allLists.length) return;

    var DOCS_URLS = { '01': '/docs/01-diagnostico/#album', '02': '/docs/02-problemas/#album' };
    var LYRICS_URLS = { '01': '/audio/01-diagnostico/lyrics.json', '02': '/audio/02-problemas_estructurales/lyrics.json' };

    var currentAlbumId = '01';
    var currentTrackIdx = 0;
    var lyricsCache = {};

    function getActiveList() {
        return document.querySelector('.home-album-tracklist[data-album-id="' + currentAlbumId + '"]');
    }

    function getTracks() {
        var list = getActiveList();
        return list ? Array.from(list.querySelectorAll('.home-album-track')) : [];
    }

    // --- Switch album ---
    function switchAlbum(albumId) {
        currentAlbumId = albumId;
        currentTrackIdx = 0;

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

        bindTrackEvents();
        setTrack(0, false);
        loadLyrics(albumId);
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
        nowEl.textContent = (index + 1) + '. ' + (titleEl ? titleEl.textContent : '');
        tracks.forEach(function(el, j) { el.classList.toggle('home-album-track-current', j === index); });
        if (autoPlay !== false && src) player.play().catch(function() {});
    }

    // --- Player controls ---
    player.addEventListener('ended', function() {
        var tracks = getTracks();
        if (currentTrackIdx + 1 < tracks.length) setTrack(currentTrackIdx + 1);
    });
    player.addEventListener('error', function() {
        if (nowEl) nowEl.textContent = 'Próximamente — selecciona otra pista';
    });
    if (btnPrev) btnPrev.addEventListener('click', function() {
        if (currentTrackIdx <= 0) { player.currentTime = 0; player.play().catch(function() {}); return; }
        setTrack(currentTrackIdx - 1);
    });
    if (btnNext) btnNext.addEventListener('click', function() {
        var tracks = getTracks();
        if (currentTrackIdx + 1 < tracks.length) setTrack(currentTrackIdx + 1);
    });

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
        });
    }

    // --- Load lyrics from JSON (optional enrichment) ---
    function loadLyrics(albumId) {
        if (lyricsCache[albumId] || !LYRICS_URLS[albumId]) return;
        fetch(LYRICS_URLS[albumId])
            .then(function(r) { return r.ok ? r.json() : null; })
            .then(function(data) { if (data && data.tracks) lyricsCache[albumId] = data; })
            .catch(function() {});
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
                navigator.clipboard.writeText(full).then(function() {
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
        btn.addEventListener('click', function() {
            var id = btn.getAttribute('data-album-id');
            if (id && id !== currentAlbumId) switchAlbum(id);
        });
    });

    // --- Init: bind events on album 01, load its lyrics ---
    bindTrackEvents();
    loadLyrics('01');

    // --- Deep link: #album-02-1 ---
    var hash = window.location.hash;
    var m = hash && hash.match(/^#album-(\d{2})-(\d+)$/);
    if (m) {
        switchAlbum(m[1]);
        var n = parseInt(m[2], 10);
        if (n >= 1) setTrack(n - 1, false);
    }
})();
