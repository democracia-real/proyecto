/**
 * Reproductor compacto de álbum para páginas de documentación (docs/).
 * Mismo estilo que la portada: un reproductor + lista de pistas + letras en modal.
 * Se configura con data-album-json en el contenedor.
 *
 * HTML esperado:
 *   <div class="docs-album" data-album-json="/audio/XX/lyrics.json">
 *     <div class="home-album-player-wrap">
 *       <p class="home-album-now">Cargando…</p>
 *       <audio class="docs-album-player" controls preload="metadata"></audio>
 *       <div class="home-album-nav">
 *         <button class="home-album-btn docs-album-prev">← Anterior</button>
 *         <button class="home-album-btn docs-album-next">Siguiente →</button>
 *       </div>
 *     </div>
 *     <ul class="home-album-tracklist docs-album-tracklist"></ul>
 *   </div>
 */
(function() {
    'use strict';

    document.querySelectorAll('.docs-album').forEach(function(container) {
        var jsonUrl = container.getAttribute('data-album-json');
        if (!jsonUrl) return;

        var player = container.querySelector('.docs-album-player');
        var nowEl = container.querySelector('.home-album-now');
        var tracklistEl = container.querySelector('.docs-album-tracklist');
        var btnPrev = container.querySelector('.docs-album-prev');
        var btnNext = container.querySelector('.docs-album-next');
        if (!player || !tracklistEl) return;

        var currentIdx = -1;
        var lyricsData = null;
        if (nowEl) nowEl.setAttribute('aria-live', 'polite');

        fetch(jsonUrl)
            .then(function(r) { return r.ok ? r.json() : null; })
            .then(function(data) {
                if (!data || !data.tracks) {
                    if (nowEl) nowEl.textContent = 'No disponible';
                    return;
                }
                lyricsData = data;
                renderTracks(data);
            })
            .catch(function() {
                if (nowEl) nowEl.textContent = 'Error al cargar';
            });

        function renderTracks(data) {
            tracklistEl.innerHTML = '';
            data.tracks.forEach(function(track, i) {
                var li = document.createElement('li');
                li.className = 'home-album-track';
                li.tabIndex = 0;
                li.setAttribute('aria-label', 'Seleccionar pista ' + (track.title || String(i + 1)));
                var audioFile = track.audioFile || '';
                var src = audioFile ? (data.audioPath + encodeURIComponent(audioFile)) : '';
                li.setAttribute('data-src', src);

                var meta = [];
                if (track.theme) meta.push(track.theme);
                if (track.style && track.style !== '—') meta.push(track.style);

                li.innerHTML =
                    '<span class="home-album-track-num">' + (i + 1) + '</span>' +
                    '<span class="home-album-track-title">' + (track.title || '') + '</span>' +
                    '<span class="home-album-track-meta">' + meta.join(' · ') + '</span>' +
                    '<button type="button" class="home-album-track-play" aria-label="Reproducir">▶</button>' +
                    '<button type="button" class="home-album-track-lyric" aria-label="Ver letra">Ver letra</button>';

                tracklistEl.appendChild(li);

                li.addEventListener('click', function(e) { if (!e.target.closest('button')) setTrack(i); });
                li.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setTrack(i);
                    }
                });
                li.querySelector('.home-album-track-play').addEventListener('click', function(e) { e.stopPropagation(); setTrack(i); });
                li.querySelector('.home-album-track-lyric').addEventListener('click', function(e) {
                    e.stopPropagation();
                    showLyric(track, i);
                });
            });
            setTrack(0, false);
        }

        function setTrack(index, autoPlay) {
            var items = tracklistEl.querySelectorAll('.home-album-track');
            if (index < 0 || index >= items.length) return;
            currentIdx = index;
            var li = items[index];
            var src = li.getAttribute('data-src');
            if (src) player.src = src;
            if (nowEl) nowEl.textContent = (index + 1) + '. ' + (li.querySelector('.home-album-track-title') || {}).textContent;
            items.forEach(function(el, j) { el.classList.toggle('home-album-track-current', j === index); });
            if (autoPlay !== false && src) player.play().catch(function() {});
        }

        player.addEventListener('ended', function() {
            var items = tracklistEl.querySelectorAll('.home-album-track');
            if (currentIdx + 1 < items.length) setTrack(currentIdx + 1);
        });
        player.addEventListener('error', function() {
            if (nowEl) nowEl.textContent = 'No se pudo reproducir esta pista. Prueba con otra.';
        });
        if (btnPrev) btnPrev.addEventListener('click', function() {
            if (currentIdx <= 0) { player.currentTime = 0; player.play().catch(function() {}); return; }
            setTrack(currentIdx - 1);
        });
        if (btnNext) btnNext.addEventListener('click', function() {
            var items = tracklistEl.querySelectorAll('.home-album-track');
            if (currentIdx + 1 < items.length) setTrack(currentIdx + 1);
        });

        function showLyric(track, i) {
            var modal = document.getElementById('lyricModal');
            if (!modal) return;
            var titleEl = modal.querySelector('.lyric-modal-title');
            var bodyEl = modal.querySelector('.lyric-modal-body');
            if (titleEl) titleEl.textContent = (i + 1).toString().padStart(2, '0') + ' — ' + (track.title || '');
            if (bodyEl) bodyEl.textContent = (track.lyrics) ? track.lyrics : '(Letra pendiente)';
            modal.dataset.lastFocusId = document.activeElement && document.activeElement.id ? document.activeElement.id : '';
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.add('lyric-modal-open');
            document.body.style.overflow = 'hidden';
            var closeBtn = modal.querySelector('.lyric-modal-close');
            if (closeBtn) closeBtn.focus();
        }

        var modal = document.getElementById('lyricModal');
        if (modal && !modal.dataset.bound) {
            modal.dataset.bound = '1';
            function closeLyricModal() {
                modal.setAttribute('aria-hidden', 'true');
                modal.classList.remove('lyric-modal-open');
                document.body.style.overflow = '';
                var lastFocusId = modal.dataset.lastFocusId;
                if (lastFocusId) {
                    var last = document.getElementById(lastFocusId);
                    if (last) last.focus();
                }
            }
            var closeBtn = modal.querySelector('.lyric-modal-close');
            var backdrop = modal.querySelector('.lyric-modal-backdrop');
            if (closeBtn) closeBtn.addEventListener('click', closeLyricModal);
            if (backdrop) backdrop.addEventListener('click', closeLyricModal);
            modal.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLyricModal(); });
        }
    });
})();
