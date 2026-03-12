import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-based Navbar Styling
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Parallax Effect for Hero section
  const heroBg = document.querySelector('.hero-bg');
  
  window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    // Move background at 40% scroll speed
    if(heroBg && scrollVal < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrollVal * 0.4}px)`;
    }
  });

  // 3. Intersection Observer for Scroll Animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add active class
        entry.target.classList.add('reveal-active');
        
        // Handle delayed animations via CSS variable if set
        const delay = entry.target.style.getPropertyValue('--delay');
        if (delay) {
          entry.target.style.transitionDelay = delay;
        }
        
        // Unobserve after revealing
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  revealElements.forEach(el => observer.observe(el));
});
