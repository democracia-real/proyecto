/**
 * Democracia Real - JavaScript Principal
 * Funcionalidad mínima y accesible
 */

(function() {
    'use strict';

    // ==========================================================================
    // Navegación móvil
    // ==========================================================================
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
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
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================================================
    // Navbar transparente al scroll
    // ==========================================================================
    
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    function updateNav() {
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
