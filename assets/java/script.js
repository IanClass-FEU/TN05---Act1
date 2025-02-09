// Shrink the logo and header on scroll
const header = document.getElementById('header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
            logo.style.height = '80px';
        } else {
            header.classList.remove('scrolled');
            logo.style.height = '400px';
        }
    });
});

// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');

if (menuToggle && menu && menuClose) {
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
}

// Modal functionality
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.modal-close');

if (modal && modalImage && closeModal) {
    document.querySelectorAll('.service-image').forEach(image => {
        image.addEventListener('click', (e) => {
            const modalImagePath = e.target.getAttribute('data-modal-image');
            if (modalImagePath) {
                modalImage.src = modalImagePath;
                modal.style.display = 'flex';
            } else {
                console.error('Image path not found');
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Like button functionality
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        const countSpan = button.querySelector('.like-count');
        
        if (icon && countSpan) {
            let count = parseInt(countSpan.textContent, 10) || 0;

            if (icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
                button.classList.add('liked');
                countSpan.textContent = count + 1;
            } else {
                icon.classList.replace('fas', 'far');
                button.classList.remove('liked');
                countSpan.textContent = count - 1;
            }
        } else {
            console.error('Like button elements not found');
        }
    });
});

// Feedback Modal
const feedbackModal = document.getElementById('feedback-modal');
const feedbackOpen = document.querySelector('.modal-open-feedback');
const feedbackClose = document.querySelector('.modal-close-feedback');

if (feedbackModal && feedbackOpen && feedbackClose) {
    feedbackOpen.addEventListener('click', () => {
        feedbackModal.style.display = 'flex';
    });

    feedbackClose.addEventListener('click', () => {
        feedbackModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = 'none';
        }
    });
}

// Handle Star Rating Selection
let rating = 0;
const stars = document.querySelectorAll('.star');

if (stars.length > 0) {
    stars.forEach(star => {
        star.addEventListener('click', () => {
            rating = star.getAttribute('data-value');

            stars.forEach(starElement => {
                starElement.style.color = (starElement.getAttribute('data-value') <= rating) ? 'gold' : '#ccc';
            });
        });
    });
}

// Submit feedback
const submitButton = document.querySelector('.submit-btn');

if (submitButton) {
    submitButton.addEventListener('click', () => {
        const feedbackText = document.querySelector('textarea').value;

        if (rating > 0) {
            alert(`Thank you for your feedback! You rated us ${rating} stars.\nYour feedback: ${feedbackText}`);

            feedbackModal.style.display = 'none';
            document.querySelector('textarea').value = '';

            stars.forEach(starElement => {
                starElement.style.color = '#ccc';
            });

            rating = 0;
        } else {
            alert('Please provide a rating before submitting.');
        }
    });
}

// FAQ Modal Functionality
const faqButton = document.getElementById('faq-button');
const faqModal = document.getElementById('faq-modal');
const faqClose = document.querySelector('.faq-close');
const faqTabs = document.querySelectorAll('.faq-tab');
const faqSections = document.querySelectorAll('.faq-section'); 
const faqItems = document.querySelectorAll('.faq-item');

// Open FAQ Modal
faqButton.addEventListener('click', () => {
    faqModal.style.display = 'flex';
});

// Close FAQ Modal
faqClose.addEventListener('click', () => {
    faqModal.style.display = 'none';
});

// Close FAQ Modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === faqModal) {
        faqModal.style.display = 'none';
    }
});

// FAQ Category Switching - Fix for Disappearing Questions
faqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');

        // Remove active class from all tabs
        faqTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Hide all FAQ sections first
        faqSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected FAQ section
        const activeSection = document.getElementById(category);
        if (activeSection) {
            activeSection.style.display = 'block';

            // Ensure all FAQ items inside the section are visible
            activeSection.querySelectorAll('.faq-item').forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});

// FAQ Accordion Effect with Smooth Animation
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.toggle-icon');

        if (faqItem.classList.contains('active')) {
            // Close the FAQ
            answer.style.maxHeight = answer.scrollHeight + "px"; // Set maxHeight before closing to prevent jump
            answer.classList.add('closing');
            icon.classList.replace("bi-caret-down-fill", "bi-caret-right-fill");

            setTimeout(() => {
                answer.classList.remove('closing');
                faqItem.classList.remove('active');
                answer.style.maxHeight = "0"; // Reset height after animation
            }, 200); // Matches transition duration
        } else {
            // Open the FAQ
            faqItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px"; // Dynamically set height
            icon.classList.replace("bi-caret-right-fill", "bi-caret-down-fill");

            setTimeout(() => {
                answer.style.maxHeight = "none"; // Prevent height restriction after animation
            }, 200);
        }
    });
});


