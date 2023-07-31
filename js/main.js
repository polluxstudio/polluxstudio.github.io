// Mobile Menu
const mobileMenu = document.querySelector('button.app__mobile__menu__btn');
const menuContent = document.querySelector('#app__main__navigation');

mobileMenu.onclick = function() {
  menuContent.classList.toggle('app__show__mobile__menu');
}

// Portfolio Slider
let sliderIndex = 0;
let sliderContainers = document.querySelectorAll('.app__portfolio__slider .app__single__portfolio__wrapper');
let sliderCount = sliderContainers.length;

function showSlides() {
  sliderContainers[sliderIndex].classList.remove('app__active__slide');
  sliderIndex++;
  if (sliderIndex >= sliderCount) {
    sliderIndex = 0;
  }
  sliderContainers[sliderIndex].classList.add('app__active__slide');
  setTimeout(showSlides, 5000);
}

showSlides();


// Team Slider
$('#app__team__carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

// Testimonial Slider
$('#app__testimonial__carousel').owlCarousel({
  loop:true,
  margin:80,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
});




// function setupSlider(sectionId) {
//   const section = document.getElementById(sectionId);
//   const wrapper = section.querySelector('.app__carousel__wrapper');
//   const carouselContainer = wrapper.querySelector('.app__carousel__container');
//   const firstCardWidth = carouselContainer.querySelector('.app__single__carousel').offsetWidth;
//   const arrowBtns = wrapper.querySelectorAll('.app__carousel__arrow');
//   const sliderItems = [...carouselContainer.children];

//   let isDragging = false;
//   let startX, startScrollLeft, timeoutId;

//   // Get the number of items that can fit in the carousel at once
//   const itemsPerView = Math.round(carouselContainer.offsetWidth / firstCardWidth);

//   // Insert copies of the last few items to the beginning of the carousel for infinite scrolling
//   sliderItems.slice(-itemsPerView).reverse().forEach(item => {
//     carouselContainer.insertAdjacentHTML('afterbegin', item.outerHTML);
//   });

//   // Insert copies of the first few items to the end of the carousel for infinite scrolling
//   sliderItems.slice(0, itemsPerView).forEach(item => {
//     carouselContainer.insertAdjacentHTML('beforeend', item.outerHTML);
//   });

//   // Scroll the carousel to an appropriate position to hide first few duplicate items on Firefox
//   carouselContainer.classList.add('no-transition');
//   carouselContainer.scrollLeft = carouselContainer.offsetWidth;
//   carouselContainer.classList.remove('no-transition');

//   // Add event listeners for the arrow buttons to scroll the carousel left and right
//   arrowBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       carouselContainer.scrollLeft += btn.classList.contains('slider-arrow-left') ? -firstCardWidth : firstCardWidth;
//     });
//   });

//   const dragStart = (e) => {
//     isDragging = true;
//     carouselContainer.classList.add('dragging');
//     // Records the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carouselContainer.scrollLeft;
//   };

//   const dragging = (e) => {
//     if (!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carouselContainer.scrollLeft = startScrollLeft - (e.pageX - startX);
//   };

//   const dragStop = () => {
//     isDragging = false;
//     carouselContainer.classList.remove('dragging');
//   };

//   const infiniteScroll = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if (carouselContainer.scrollLeft === 0) {
//       carouselContainer.classList.add('no-transition');
//       carouselContainer.scrollLeft = carouselContainer.scrollWidth - (2 * carouselContainer.offsetWidth);
//       carouselContainer.classList.remove('no-transition');
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if (Math.ceil(carouselContainer.scrollLeft) === carouselContainer.scrollWidth - carouselContainer.offsetWidth) {
//       carouselContainer.classList.add('no-transition');
//       carouselContainer.scrollLeft = carouselContainer.offsetWidth;
//       carouselContainer.classList.remove('no-transition');
//     }

//     // Clear existing timeout & start autoplay if the mouse is not hovering over the carousel
//     clearTimeout(timeoutId);
//     if (!wrapper.matches(':hover')) {
//       autoPlay();
//     }
//   };

//   const autoPlay = () => {
//     if (window.innerWidth < 800) return; // Return if window is smaller than 800
//     // Autoplay the carousel after every 2500 ms
//     timeoutId = setTimeout(() => carouselContainer.scrollLeft += firstCardWidth, 2500);
//   };
//   autoPlay();

//   carouselContainer.addEventListener('mousedown', dragStart);
//   carouselContainer.addEventListener('mousemove', dragging);
//   document.addEventListener('mouseup', dragStop);
//   carouselContainer.addEventListener('scroll', infiniteScroll);
//   wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
//   wrapper.addEventListener('mouseleave', autoPlay);
// }

// // Call the setupSlider function for each section with its unique ID
// setupSlider('app__team');
// setupSlider('app__gallery');
// setupSlider('app__testimonial');








// const teamWrapper = document.querySelector('.app__carousel__wrapper');
// const carouselContainer = document.querySelector('.app__carousel__container');
// const firstCardWidth = carouselContainer.querySelector('.app__single__carousel').offsetWidth;
// const arrowBtns = document.querySelectorAll('.app__carousel__arrow');
// const carouselItems = [...carouselContainer.children];

// let isDragging = false;
// let startX, startScrollLeft, timeoutId;

// // Get the number of cards that can fit in the carousel at once
// const cardsPerView = Math.round(carouselContainer.offsetWidth / firstCardWidth);

// // Insert copies of the last few cards to the beginning of carousel for infinite scrolling
// carouselItems.slice(-cardsPerView).reverse().forEach(card => {
//   carouselContainer.insertAdjacentHTML('afterbegin', card.outerHTML);
// });

// // Insert copies of the first few cards to the end of carousel for infinite scrolling
// carouselItems.slice(0, cardsPerView).forEach(card => {
//   carouselContainer.insertAdjacentHTML('beforeend', card.outerHTML);
// });

// // Scroll the carousel to an appropriate position to hide first few duplicate cards on Firefox
// carouselContainer.classList.add('no-transition');
// carouselContainer.scrollLeft = carouselContainer.offsetWidth;
// carouselContainer.classList.remove('no-transition');

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     carouselContainer.scrollLeft += btn.classList.contains('app__carousel__arrow__left') ? -firstCardWidth : firstCardWidth;
//   });
// });

// const dragStart = (e) => {
//   isDragging = true;
//   carouselContainer.classList.add('dragging');
//   // Records the initial cursor and scroll position of the carousel
//   startX = e.pageX;
//   startScrollLeft = carouselContainer.scrollLeft;
// }

// const dragging = (e) => {
//   if (!isDragging) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carouselContainer.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//   isDragging = false;
//   carouselContainer.classList.remove('dragging');
// }

// const infiniteScroll = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carouselContainer.scrollLeft === 0) {
//     carouselContainer.classList.add('no-transition');
//     carouselContainer.scrollLeft = carouselContainer.scrollWidth - (2 * carouselContainer.offsetWidth);
//     carouselContainer.classList.remove('no-transition');
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if (Math.ceil(carouselContainer.scrollLeft) === carouselContainer.scrollWidth - carouselContainer.offsetWidth) {
//     carouselContainer.classList.add('no-transition');
//     carouselContainer.scrollLeft = carouselContainer.offsetWidth;
//     carouselContainer.classList.remove('no-transition');
//   }

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId);
//   if (!teamWrapper.matches(':hover')) {
//     autoPlay();
//   }
// }

// const autoPlay = () => {
//   if (window.innerWidth < 800) return; // Return if window is smaller than 800
//   // Autoplay the carousel after every 2500 ms
//   timeoutId = setTimeout(() => carouselContainer.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

// carouselContainer.addEventListener('mousedown', dragStart);
// carouselContainer.addEventListener('mousemove', dragging);
// document.addEventListener('mouseup', dragStop);
// carouselContainer.addEventListener('scroll', infiniteScroll);
// teamWrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
// teamWrapper.addEventListener('mouseleave', autoPlay);

// Gallery Carousel
$('#app__gallery__carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  nav:false,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

// FAQ Toggle Options
const faqHeaders = document.querySelectorAll('#app__faq .app__single__faq .app__single__faq__header');

faqHeaders.forEach(faqHeader => {
  faqHeader.addEventListener('click', () => {
    faqHeader.classList.toggle('app__active');

    const arrowIcon = faqHeader.querySelector('.app__faq__toggle__icon ion-icon');
    arrowIcon.classList.toggle('app__icon__rotate');

    const faqAnswer = faqHeader.nextElementSibling;
    faqAnswer.classList.toggle('app__active');

    const isFaqAnswer = faqAnswer.classList.contains('app__active');

    if (isFaqAnswer) {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
      faqAnswer.style.opacity = 1;
      faqAnswer.style.paddingBottom = '1em';
      faqAnswer.style.marginBottom = '1em';
    } else {
      faqAnswer.style.maxHeight = 0;
      faqAnswer.style.opacity = 0;
      faqAnswer.style.paddingBottom = 0;
      faqAnswer.style.marginBottom = 0;
    }
  });
});

// Show current year at footer
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#app__main_footer .app__year').textContent = new Date().getFullYear();
});
