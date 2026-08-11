// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll & Close Menu On Click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            navMenu.classList.remove('active');
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Header Shadow on Scroll
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 80 
        ? '0 4px 20px rgba(0,0,0,0.08)' 
        : '0 2px 8px rgba(0,0,0,0.06)';
});

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .property-card, .service-card, .why-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(25px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});