const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por contactarnos. Te responderemos pronto.');
});
