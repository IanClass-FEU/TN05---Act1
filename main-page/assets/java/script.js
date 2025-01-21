// JavaScript for shrinking the logo and header on scroll
const header = document.getElementById('header');
const logo = document.getElementById('logo');

// Shrink the header and logo when the page is scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        logo.style.height = '80px'; // Shrink logo when scrolled
    } else {
        header.classList.remove('scrolled');
        logo.style.height = '400px'; // Reset to large size when at the top
    }
});

// Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close'); // Get close button

// Toggle the menu visibility when the menu toggle button is clicked
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggle the "open" class to slide the menu in and out
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInside = menu.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside) {
        menu.classList.remove('open');
    }
});

// Close the menu when clicking the close button
menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
});
