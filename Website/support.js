
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
});
