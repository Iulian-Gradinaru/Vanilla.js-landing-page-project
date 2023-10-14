// Ensure the entire document has been loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Handle the Navbar Hamburger Menu functionality
  const hamburgerIcon = document.getElementById('icon-hamburger');
  const hamburgerMenu = document.getElementById('menu-hamburger');
  const navLinks = document.getElementById('links-nav');

  hamburgerIcon.addEventListener('click', function () {
    // Toggle the visibility of the hamburger menu and nav links on click
    hamburgerMenu.classList.toggle('show-hamburger-menu');
    navLinks.classList.toggle('show-hamburger-menu');
  });

  // Handle the Language Dropdown functionality
  const languageButtons = document.querySelectorAll('.language-button');
  languageButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      // Toggle the display of the dropdown on button click
      const dropdown = this.nextElementSibling;
      dropdown.style.display =
        dropdown.style.display === 'block' ? 'none' : 'block';
      e.stopPropagation();
    });
  });

  // Close the dropdown if clicked outside of it
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.language-dropdown')) {
      const dropdowns = document.querySelectorAll('.language-options');
      dropdowns.forEach((dropdown) => {
        dropdown.style.display = 'none';
      });
    }
  });

  // Handle the Testimonial Slider functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');

  // Initially hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the first slide
  slides[0].style.display = 'block';

  // Navigate to the previous slide
  document
    .querySelector('.container-arrow .arrow-button img[src="/left-arrow.png"]')
    .parentNode.addEventListener('click', function () {
      slides[currentSlide].style.display = 'none';
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      slides[currentSlide].style.display = 'block';
      updateTestimonialIndex();
    });

  // Navigate to the next slide
  document
    .querySelector('.container-arrow .arrow-button img[src="/right-arrow.png"]')
    .parentNode.addEventListener('click', function () {
      slides[currentSlide].style.display = 'none';
      currentSlide++;
      if (currentSlide > slides.length - 1) currentSlide = 0;
      slides[currentSlide].style.display = 'block';
      updateTestimonialIndex();
    });

  // Update the slide index display
  function updateTestimonialIndex() {
    const testimonialIndices = document.querySelectorAll('.testimonialIndex');

    testimonialIndices.forEach(function (element) {
      element.innerText = `0${currentSlide + 1} / 04`;
    });
  }
});

// Handle the FAQ accordion functionality
let faqs = document.getElementsByClassName('faq-page');

// Iterate through each FAQ item
for (let i = 0; i < faqs.length; i++) {
  // Attach a click event listener to each FAQ item
  faqs[i].addEventListener('click', function (event) {
    let clickedFAQ = event.currentTarget; // Get the current FAQ item that was clicked

    // Loop through all FAQ items
    for (let j = 0; j < faqs.length; j++) {
      // If the FAQ item is not the one that was clicked
      if (faqs[j] !== clickedFAQ) {
        faqs[j].classList.remove('active'); // Remove the "active" class
        faqs[j].nextElementSibling.style.display = 'none'; // Hide its content/body
      }
    }

    // Toggle "active" class for the clicked FAQ item
    clickedFAQ.classList.toggle('active');

    // Toggle the display of the clicked FAQ item's content/body
    let body = clickedFAQ.nextElementSibling;
    if (body.style.display === 'block') {
      body.style.display = 'none';
    } else {
      body.style.display = 'block';
    }
  });
}

// Handle the Contact form functionality
const submitForm = () => {
  // Retrieve form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Clear the form fields after submission
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
};
