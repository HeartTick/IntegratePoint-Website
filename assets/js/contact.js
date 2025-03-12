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
// form Validation
//   form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const agree = document.getElementById('agree').checked;
  
    if (!name || !email || !phone || !service || !agree) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // Simulate form submission
    console.log('Form submitted successfully!');
    alert('Thank you for contacting us! We will get back to you soon.');
  
    // Reset form
    document.getElementById('contactForm').reset();
  });