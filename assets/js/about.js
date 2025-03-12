document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Toggle hamburger menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const consultationButton = document.querySelector('.join-us-button');
    
        if (consultationButton) {
            consultationButton.addEventListener('click', () => {
                // Redirect to contact.html
                window.location.href = 'contact.html';
            });
        }
    });
    
    
});