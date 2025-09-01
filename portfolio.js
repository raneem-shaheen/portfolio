
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.classList.toggle('open');

  if (menuToggle.classList.contains('open')) {
    menuToggle.innerHTML = '&times;';
  } else {
    menuToggle.innerHTML = '&#9776;';
  }
});

 const Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.project-card').forEach(card => {
    Observer.observe(card);
  });

function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-element');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;
    if (isVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible'); 
    }
  });
}


window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));