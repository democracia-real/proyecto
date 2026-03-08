/**
 * Democracia Real - JavaScript Principal
 * Funcionalidad mínima y accesible
 */

(function() {
    'use strict';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ==========================================================================
    // Navegación móvil
    // ==========================================================================
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav');
    const mainContent = document.querySelector('main');

    if (mainContent && !mainContent.id) mainContent.id = 'main-content';
    if (mainContent && !document.querySelector('.skip-link')) {
        var skip = document.createElement('a');
        skip.className = 'skip-link';
        skip.href = '#' + (mainContent.id || 'main-content');
        skip.textContent = 'Saltar al contenido principal';
        document.body.insertBefore(skip, document.body.firstChild);
    }
    if (nav && !nav.getAttribute('role')) nav.setAttribute('role', 'navigation');
    if (nav && !nav.getAttribute('aria-label')) nav.setAttribute('aria-label', 'Navegación principal');

    function closeNavMenu() {
        if (!navToggle || !navMenu) return;
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    if (navToggle && navMenu) {
        if (!navMenu.id) navMenu.id = 'main-menu';
        navToggle.setAttribute('aria-controls', navMenu.id);
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                closeNavMenu();
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeNavMenu();
        });

        document.addEventListener('click', function(e) {
            if (!navMenu.classList.contains('active')) return;
            if (navMenu.contains(e.target) || navToggle.contains(e.target)) return;
            closeNavMenu();
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1100) closeNavMenu();
        });
    }

    // ==========================================================================
    // Scroll suave para enlaces internos
    // ==========================================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus({ preventScroll: true });
            }
        });
    });

    // ==========================================================================
    // Navbar transparente al scroll
    // ==========================================================================
    
    let lastScrollY = window.scrollY;

    function updateNav() {
        if (!nav) return;
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
        }
        
        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', updateNav, { passive: true });

    // ==========================================================================
    // Animación de entrada para elementos
    // ==========================================================================
    
    // Solo si el navegador soporta IntersectionObserver
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        var animatableElements = document.querySelectorAll('.problem-card, .pillar-card');
        animatableElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // Data dashboard: staggered reveal + count-up animation
        var dataGroups = document.querySelectorAll('.data-group');
        var dataObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animateCounters(entry.target);
                    dataObserver.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.2 });

        dataGroups.forEach(function(group, i) {
            group.style.transitionDelay = (i * 0.15) + 's';
            dataObserver.observe(group);
        });
    }

    function animateCounters(container) {
        var values = container.querySelectorAll('.data-value[data-count]');
        values.forEach(function(el) {
            var target = parseFloat(el.getAttribute('data-count'));
            var suffix = el.getAttribute('data-suffix') || '';
            var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
            var duration = 1200;
            var start = null;
            var originalText = el.textContent;

            if (target === 0) return;

            function step(timestamp) {
                if (!start) start = timestamp;
                var progress = Math.min((timestamp - start) / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                var current = eased * target;

                if (decimals > 0) {
                    el.textContent = current.toFixed(decimals).replace('.', ',') + suffix;
                } else if (target >= 1000) {
                    el.textContent = Math.floor(current).toLocaleString('es-ES') + suffix;
                } else {
                    el.textContent = Math.floor(current) + suffix;
                }

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = originalText;
                }
            }

            requestAnimationFrame(step);
        });
    }

})();
