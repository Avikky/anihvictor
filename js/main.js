//Init on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init app
function init() {
    // ---- Typewriter (index page only) ---------------------
    const txtElement = document.querySelector('.txt-type');
    if (txtElement) {
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement, words, wait);
    }

    // ---- Progress bars (about page) -----------------------
    const barConfig = [
        { selector: '.dotnet',    value: 92 },
        { selector: '.laravel',   value: 90 },
        { selector: '.nodejs',    value: 78 },
        { selector: '.databases', value: 88 },
        { selector: '.docker',    value: 75 },
        { selector: '.aws',       value: 70 },
        { selector: '.api',       value: 95 },
        { selector: '.etl',       value: 85 },
    ];

    barConfig.forEach(({ selector, value }) => {
        const el = document.querySelector(selector);
        if (el) new ProgressBar(el, value);
    });

    // ---- Scroll reveal (IntersectionObserver) -------------
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
    });

    // ---- Animated counters --------------------------------
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll('.impact-metric[data-target]').forEach((el) => {
        counterObserver.observe(el);
    });

    // ---- Smooth scroll for anchor links -------------------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ---- Counter animation helper ----------------------------
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1600;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(step);
}
