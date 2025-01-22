// Shrink the logo and header on scroll
const header = document.getElementById('header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        logo.style.height = '80px';
    } else {
        header.classList.remove('scrolled');
        logo.style.height = '400px';
    }
});

// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('open');
    }
});

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.modal-close');

// Open modal when an image is clicked
document.querySelectorAll('.service-image').forEach(image => {
    image.addEventListener('click', (e) => {
        // Get the modal image path from the clicked image's data-modal-image attribute
        const modalImagePath = e.target.getAttribute('data-modal-image');
        
        // Set the modal image source
        modalImage.src = modalImagePath;
        
        // Show the modal
        modal.style.display = 'flex';
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        const countSpan = button.querySelector('.like-count');
        let count = parseInt(countSpan.textContent, 10);

        if (icon.classList.contains('far')) {
            // Change to "liked" state
            icon.classList.remove('far');
            icon.classList.add('fas');
            button.classList.add('liked');
            countSpan.textContent = count + 1; // Increment count
        } else {
            // Revert to "unliked" state
            icon.classList.remove('fas');
            icon.classList.add('far');
            button.classList.remove('liked');
            countSpan.textContent = count - 1; // Decrement count
        }
    });
});



