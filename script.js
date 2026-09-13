if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  });
}, { threshold: 0.2 });

document.querySelectorAll('.what-card, .tools-panel, .tool-item, .process-panel, .hero-copy, .hero-visual, .nav ul, .nav .btn-pill').forEach((el) => observer.observe(el));
