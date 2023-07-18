// Get all FAQ headers
const faqHeaders = document.querySelectorAll('.app__faq__content__header');

// Add click event listener to each header
faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the active class to change the arrow icon and apply rotation
    header.classList.toggle('active');
    const arrowIcon = header.querySelector('.app__faq__icon');
    arrowIcon.classList.toggle('rotate');

    // Toggle the visibility of the FAQ body
    const faqBody = header.nextElementSibling;
    faqBody.classList.toggle('active');

    // Apply slide animations
    if (faqBody.classList.contains('active')) {
      faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
      faqBody.style.opacity = 1;
      faqBody.style.paddingBottom = '1em';
      faqBody.style.marginBottom = '1em';
    } else {
      faqBody.style.maxHeight = 0;
      faqBody.style.opacity = 0;
      faqBody.style.paddingBottom = 0;
      faqBody.style.marginBottom = 0;
    }
  });
});

// Mobile Menu
const mobileMenu = document.querySelector('button.app__mobile__menu');
const menuContent = document.querySelector('#app__main__container .app__main__header  .app__header_navigation ul');

mobileMenu.onclick = function() {
  menuContent.classList.toggle('app__show__menu__content');
}

// Portfolio Slider
let slider_index = 0;
let slider_containers = document.querySelectorAll('.app__portfolio__wrapper .app__single__portfolio');
let slider_count = slider_containers.length;

function showSlides() {
  slider_containers[slider_index].classList.remove('active');
  slider_index++;
  if (slider_index >= slider_count) {
    slider_index = 0;
  }
  slider_containers[slider_index].classList.add('active');
  setTimeout(showSlides, 5000);
}

showSlides();
