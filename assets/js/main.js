 
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");
  
    readMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const card = this.closest(".service-card");
        card.classList.toggle("flipped"); // Toggle the flipped class
      });
    });
  
    const serviceCards = document.querySelectorAll(".service-card");
  
    serviceCards.forEach((card) => {
      card.addEventListener("mouseleave", function () {
        if (card.classList.contains("flipped")) {
          card.classList.remove("flipped"); // Return to normal position
        }
      });
    });
  });

  // Join US button
document.addEventListener('DOMContentLoaded', () => {
  // Select all "Book a Meeting" buttons
  const bookMeetingButtons = document.querySelectorAll('.join-us-button');

  // Add click event listener to each button
  bookMeetingButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Redirect to contact.html
          window.location.href = 'contact.html';
      });
  });
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