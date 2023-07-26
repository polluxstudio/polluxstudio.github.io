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

// // Show current year at footer
// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('#year').textContent = new Date().getFullYear();
// });













const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);