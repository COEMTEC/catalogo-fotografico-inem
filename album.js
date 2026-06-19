/* ========================================
   ALBUM.JS — Cinematic Discursive Album
   Scroll-driven narrative with staggered
   text reveals and image transitions
   ======================================== */

(function () {
    'use strict';

    /* ── DOM References ── */
    const scrollContainer = document.getElementById('albumScroll');
    const progressBar     = document.getElementById('progressBar');
    const pageCountEl     = document.getElementById('pageCount');
    const navEl           = document.getElementById('albumNav');
    const scrollCue       = document.getElementById('scrollCue');
    const allPages        = document.querySelectorAll('.album-page');

    const TOTAL_PAGES = allPages.length;
    const TEXT_LINE_STAGGER = 0.32;   // seconds between each text line
    const TEXT_LINE_BASE    = 0.35;   // base delay before first line
    const PLACA_LINE_STAGGER = 0.18;  // faster stagger for the placa
    const PLACA_LINE_BASE    = 0.25;

    let currentPage = 0;
    let revealedPages = new Set();

    /* ── Initialize ── */
    function init() {
        setupObserver();
        setupScrollCue();
        setupKeyboardNav();
        setupProgressTracking();
        markCenteredPages();
        setupAudio();
    }

    /* ── Mark pages with centered text ── */
    function markCenteredPages() {
        allPages.forEach(page => {
            if (page.querySelector('.page-text--centered')) {
                page.classList.add('has-centered-text');
            }
        });
    }

    /* ── Intersection Observer ── */
    function setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
                    const page = entry.target;
                    const pageIdx = parseInt(page.dataset.page, 10);

                    currentPage = pageIdx;
                    updateProgress(pageIdx);
                    updatePageCount(pageIdx);
                    updateNavVisibility(pageIdx);

                    if (!revealedPages.has(pageIdx)) {
                        revealPage(page, pageIdx);
                        revealedPages.add(pageIdx);
                    }
                }
            });
        }, {
            root: scrollContainer,
            threshold: [0.45, 0.6, 0.8]
        });

        allPages.forEach(page => observer.observe(page));
    }

    /* ── Reveal a Page ── */
    function revealPage(page, pageIdx) {
        // Set staggered delays on text lines
        const isPlaca = page.classList.contains('album-placa');
        const lineSelector = isPlaca ? '.placa-line' : '.text-line';
        const stagger = isPlaca ? PLACA_LINE_STAGGER : TEXT_LINE_STAGGER;
        const base = isPlaca ? PLACA_LINE_BASE : TEXT_LINE_BASE;

        const lines = page.querySelectorAll(lineSelector);
        lines.forEach(line => {
            const delay = parseFloat(line.dataset.delay || 0) * stagger + base;
            line.style.transitionDelay = `${delay}s`;
        });

        // Placa footer gets delayed until after all lines
        if (isPlaca) {
            const footer = page.querySelector('.placa-footer');
            if (footer) {
                const maxDelay = lines.length * PLACA_LINE_STAGGER + PLACA_LINE_BASE + 0.5;
                footer.style.transitionDelay = `${maxDelay}s`;
            }
        }

        // Add the reveal class (triggers all CSS transitions)
        requestAnimationFrame(() => {
            page.classList.add('is-revealed');
        });
    }

    /* ── Progress Bar ── */
    function updateProgress(pageIdx) {
        const pct = (pageIdx / (TOTAL_PAGES - 1)) * 100;
        progressBar.style.width = `${pct}%`;
    }

    /* ── Page Counter ── */
    function updatePageCount(pageIdx) {
        if (pageIdx === 0) {
            pageCountEl.textContent = 'Portada';
        } else if (pageIdx === TOTAL_PAGES - 1) {
            pageCountEl.textContent = 'Fin';
        } else {
            pageCountEl.textContent = `${pageIdx} / ${TOTAL_PAGES - 2}`;
        }
    }

    /* ── Nav Visibility ── */
    function updateNavVisibility(pageIdx) {
        if (pageIdx === 0) {
            navEl.classList.add('is-hidden');
        } else {
            navEl.classList.remove('is-hidden');
        }
    }

    /* ── Scroll Cue (Cover → Page 1) ── */
    function setupScrollCue() {
        if (!scrollCue) return;
        scrollCue.addEventListener('click', () => {
            const firstPage = document.querySelector('[data-page="1"]');
            if (firstPage) {
                firstPage.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /* ── Keyboard Navigation ── */
    function setupKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
                e.preventDefault();
                navigateTo(currentPage + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                navigateTo(currentPage - 1);
            } else if (e.key === 'Home') {
                e.preventDefault();
                navigateTo(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                navigateTo(TOTAL_PAGES - 1);
            }
        });
    }

    function navigateTo(pageIdx) {
        if (pageIdx < 0 || pageIdx >= TOTAL_PAGES) return;
        const target = document.querySelector(`[data-page="${pageIdx}"]`);
        if (target) {
            smoothScrollTo(target, 1000); // 1000ms duration for a cinematic, smooth transition
        }
    }

    function smoothScrollTo(element, duration) {
        scrollContainer.style.scrollSnapType = 'none'; // Temporarily disable snap
        scrollContainer.style.scrollBehavior = 'auto'; // Disable CSS smooth scroll
        
        const targetPosition = element.offsetTop;
        const startPosition = scrollContainer.scrollTop;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Ease-in-out cubic easing for very smooth start and stop
            const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            scrollContainer.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Restore snap after a tiny delay to prevent jitter
                setTimeout(() => {
                    scrollContainer.style.scrollBehavior = '';
                    scrollContainer.style.scrollSnapType = '';
                }, 50);
            }
        }
        requestAnimationFrame(animation);
    }

    /* ── Scroll Progress Tracking (continuous) ── */
    function setupProgressTracking() {
        scrollContainer.addEventListener('scroll', () => {
            const scrollTop = scrollContainer.scrollTop;
            const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            if (scrollHeight > 0) {
                const pct = (scrollTop / scrollHeight) * 100;
                progressBar.style.width = `${Math.min(pct, 100)}%`;
            }
        }, { passive: true });
    }

    /* ── Audio Control ── */
    function setupAudio() {
        const bgAudio = document.getElementById('bgAudio');
        const soundToggle = document.getElementById('globalSoundToggle');
        if (!bgAudio || !soundToggle) return;

        const soundIconOn = soundToggle.querySelector('.sound-icon-on');
        const soundIconOff = soundToggle.querySelector('.sound-icon-off');
        
        let isPlaying = false;
        let hasAttemptedAutoplay = false;

        function toggleSound() {
            if (isPlaying) {
                bgAudio.pause();
                isPlaying = false;
                soundIconOn.style.display = 'none';
                soundIconOff.style.display = 'block';
            } else {
                bgAudio.play().then(() => {
                    isPlaying = true;
                    soundIconOn.style.display = 'block';
                    soundIconOff.style.display = 'none';
                }).catch(e => console.log('Audio play failed:', e));
            }
        }

        soundToggle.addEventListener('click', toggleSound);

        function attemptAutoplay() {
            if (!hasAttemptedAutoplay && !isPlaying) {
                hasAttemptedAutoplay = true;
                bgAudio.play().then(() => {
                    isPlaying = true;
                    soundIconOn.style.display = 'block';
                    soundIconOff.style.display = 'none';
                }).catch(() => {
                    console.log("Autoplay blocked until manual play.");
                });
            }
        }

        document.addEventListener('click', attemptAutoplay, { once: true });
        document.addEventListener('keydown', attemptAutoplay, { once: true });
        document.addEventListener('touchstart', attemptAutoplay, { once: true });
        scrollContainer.addEventListener('scroll', attemptAutoplay, { once: true });
    }

    /* ── Launch ── */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
