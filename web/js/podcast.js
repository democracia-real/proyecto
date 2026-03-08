/**
 * Reproductor de podcast para portada.
 * Carga episodios desde /audio/podcast/index.json.
 */
(function() {
    'use strict';

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
    var progressEl = document.getElementById('podcastProgress');
    var progressFillEl = document.getElementById('podcastProgressFill');
    var timeEl = document.getElementById('podcastTime');

    if (!section || !listEl || !player) return;

    var episodes = [];
    var currentIdx = -1;
    var audioPath = '';

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

    function updatePlayerUi() {
        var current = Number.isFinite(player.currentTime) ? player.currentTime : 0;
        var duration = Number.isFinite(player.duration) ? player.duration : 0;
        var pct = duration > 0 ? (current / duration) * 100 : 0;
        if (progressFillEl) progressFillEl.style.width = pct + '%';
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
            li.innerHTML =
                '<button type="button" class="home-podcast-item-play" aria-label="Reproducir episodio">▶</button>' +
                '<span class="home-podcast-item-title">' + (ep.title || ('Episodio ' + (index + 1))) + '</span>' +
                '<span class="home-podcast-item-module">Módulo ' + (ep.module || '--') + '</span>';

            li.addEventListener('click', function(e) {
                if (!e.target.closest('button')) setCurrent(index, true);
            });
            var btn = li.querySelector('.home-podcast-item-play');
            if (btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    setCurrent(index, true);
                });
            }
            listEl.appendChild(li);
        });
        setCurrent(0, false);
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

    if (progressEl) {
        progressEl.addEventListener('click', function(e) {
            seek(e.clientX);
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
})();
