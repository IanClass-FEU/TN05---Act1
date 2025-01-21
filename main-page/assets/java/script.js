// JavaScript for shrinking the logo on scroll
const header = document.getElementById('header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        logo.style.height = '80px'; // Shrink logo when scrolled
    } else {
        header.classList.remove('scrolled');
        logo.style.height = '200px'; // Reset to large size when at the top
    }
});

// Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggle the "open" class to slide menu in and out
});
