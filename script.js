document.addEventListener('DOMContentLoaded', function () {
  // Navbar Hamburger Menu
  const hamburgerIcon = document.getElementById('icon-hamburger');
  const hamburgerMenu = document.getElementById('menu-hamburger');
  const navLinks = document.getElementById('links-nav');

  hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('show-hamburger-menu');
    navLinks.classList.toggle('show-hamburger-menu');
  });

  // Language Dropdown
  const languageButtons = document.querySelectorAll('.language-button');
  languageButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const dropdown = this.nextElementSibling;
      dropdown.style.display =
        dropdown.style.display === 'block' ? 'none' : 'block';
      e.stopPropagation();
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.language-dropdown')) {
      const dropdowns = document.querySelectorAll('.language-options');
      dropdowns.forEach((dropdown) => {
        dropdown.style.display = 'none';
      });
    }
  });

  // Testimonial Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[0].style.display = 'block';

  document
    .querySelector('.container-arrow .arrow-button img[src="/left-arrow.png"]')
    .parentNode.addEventListener('click', function () {
      slides[currentSlide].style.display = 'none';
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      slides[currentSlide].style.display = 'block';
      updateTestimonialIndex();
    });

  document
    .querySelector('.container-arrow .arrow-button img[src="/right-arrow.png"]')
    .parentNode.addEventListener('click', function () {
      slides[currentSlide].style.display = 'none';
      currentSlide++;
      if (currentSlide > slides.length - 1) currentSlide = 0;
      slides[currentSlide].style.display = 'block';
      updateTestimonialIndex();

      console.log(currentSlide);
    });

  function updateTestimonialIndex() {
    const testimonialIndices = document.querySelectorAll('.testimonialIndex');

    testimonialIndices.forEach(function (element) {
      element.innerText = `0${currentSlide + 1} / 04`;
    });
  }
});

// FQA
var faq = document.getElementsByClassName('faq-page');
var i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle('active');
    /* Toggle between hiding and showing the active panel */
    var body = this.nextElementSibling;
    if (body.style.display === 'block') {
      body.style.display = 'none';
    } else {
      body.style.display = 'block';
    }
  });
}

//Contact

function submitForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}
