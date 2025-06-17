// Loading screen fade-out
window.addEventListener('load', function () {
  const loading = document.getElementById('loading-screen');
  loading.classList.add('fade-out');
  setTimeout(() => {
    loading.style.display = 'none';
  }, 8000);
});

// Toggle hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Tutup menu jika link diklik
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Smooth scroll
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
