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
  // Animate job cards when they come into view
const jobCards = document.querySelectorAll('.job-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  {
    threshold: 0.1, // Trigger animation when 10% of the card is visible
  }
);

jobCards.forEach((card) => {
  observer.observe(card);
});