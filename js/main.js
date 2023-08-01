// Mobile Menu
const mobileMenu = document.querySelector('button.app__mobile__menu__btn');
const menuContent = document.querySelector('#app__main__navigation');

mobileMenu.onclick = function() {
  menuContent.classList.toggle('app__show__mobile__menu');
}

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
