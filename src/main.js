import './styles.css';

const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const contactLinks = document.querySelectorAll('.contact-link');

contactLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const user = 'contact';
    const domain = 'blackglassinteractive.com';
    const subject = link.dataset.subject || 'Blackglass Interactive Enquiry';
    const email = `${user}@${domain}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  });
});