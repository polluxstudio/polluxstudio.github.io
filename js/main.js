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


// // Mobile Navigation ...
// let mobile_nav_btn = document.querySelector('.mobile-menu-btn');
// let mobile_nav_container = document.querySelector('.main-nav-wrapper');
// let mobile_nav_close_btn = document.querySelector('.mobile-nav-close-btn');

// mobile_nav_btn.onclick = function() {
// 	mobile_nav_container.classList.toggle('show-mobile-nav');
// }

// mobile_nav_close_btn.onclick = function() {
// 	mobile_nav_container.classList.toggle('show-mobile-nav');
// }
