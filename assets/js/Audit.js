document.addEventListener('DOMContentLoaded', () => {
    const consultationButton = document.querySelector('.consultation-button');

    if (consultationButton) {
        consultationButton.addEventListener('click', () => {
            // Redirect to contact.html
            window.location.href = 'contact.html';
        });
    }
});

//  Hamburger menu
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

    // Toggle dropdown menus
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const dropdown = toggle.parentElement;
            dropdown.classList.toggle('active');
        });
    });
});