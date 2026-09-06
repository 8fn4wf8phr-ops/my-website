// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu after clicking a link (nice on mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Auto-update footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll-triggered reveal animations
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));
}

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
  const toggleBackToTop = () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 300);
  };

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
