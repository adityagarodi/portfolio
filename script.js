// Particle Background
function createParticles() {
  const container = document.getElementById('particles');
  const particleCount = 25;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = (Math.random() * 2 + 1) + 'px';
    particle.style.height = particle.style.width;
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    const speedX = (Math.random() - 0.5) * 0.1;
    const speedY = (Math.random() - 0.5) * 0.1;
    
    container.appendChild(particle);
    
    animateParticle(particle, speedX, speedY);
  }
}

function animateParticle(particle, speedX, speedY) {
  let x = parseFloat(particle.style.left);
  let y = parseFloat(particle.style.top);
  
  function animate() {
    x += speedX;
    y += speedY;
    
    if (x > 100) x = 0;
    if (x < 0) x = 100;
    if (y > 100) y = 0;
    if (y < 0) y = 100;
    
    particle.style.left = x + '%';
    particle.style.top = y + '%';
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

// Typing Animation
function typeText() {
  const titles = ['Computer Engineering Student', 'Data Analyst', 'AI Enthusiast'];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById('typingText');
  
  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
      setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }
  
  type();
}

// Scroll Animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

// Active Navigation
function handleActiveNav() {
  const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'languages', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + section) {
              link.classList.add('active');
            }
          });
          break;
        }
      }
    }
  });
}

// Mobile Menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Scroll to Section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Form Submit
function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you for your message! This is a demo form.');
  event.target.reset();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  typeText();
  handleScrollAnimations();
  handleActiveNav();
});
