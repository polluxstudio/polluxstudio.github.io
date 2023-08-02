// Mobile Menu
const mobileMenu = document.querySelector('button.app__mobile__menu__btn');
const menuContent = document.querySelector('#app__main__navigation');

mobileMenu.onclick = function() {
  menuContent.classList.toggle('app__show__mobile__menu');
}

// // Why Choose Us 
// $(document).ready(function () {
//   let owlWhyChooseUs = $('#app__why__choose__us__carousel');

//   owlWhyChooseUs.owlCarousel({
//     loop: true,
//     margin: 0,
//     items: 1,
//     dots: false,
//     nav: false,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     URLhashListener: true,
//     URLhashNav: true,
//   });

//   owlWhyChooseUs.on('changed.owl.carousel', function (event) {
//     // Get the current slide index
//     let currentSlideIndex = event.item.index;

//     console.log(event.item);

//     // Remove the 'active' class from all anchor tags
//     $('#app__why__choose__us__list ul li a').removeClass('active');

//     // Add the 'active' class to the corresponding anchor tag based on the slide index
//     $('#app__why__choose__us__list ul li a[href="#' + (currentSlideIndex + 1) + '"]').addClass('active');
//   });
// });

// Team Slider
$(document).ready(function () {
  let owlTeam = $('#app__team__carousel');

  owlTeam.owlCarousel({
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
});

// Testimonial Slider
$(document).ready(function () {
  let owlTestimonial = $('#app__testimonial__carousel');

  owlTestimonial.owlCarousel({
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
});

// Gallery Carousel
$(document).ready(function () {
  let owlGallery = $('#app__gallery__carousel');

  owlGallery.owlCarousel({
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










// jQuery(document).ready(function($) {
//   $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
//     if (!e.namespace)  {
//       return;
//     }
//     let carousel = e.relatedTarget;
//     $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
//     }).owlCarousel({
//       nav:false,
//       loop:true,
//       dots:false,
//       items:1,
//       dots:false,
//       URLhashListener:true,
//       startPosition: 'URLHash',
//       autoplay:true,
//       autoplayTimeout:9000,
//       autoplayHoverPause:true,
//     }
//   });

//     $('.owl-carousel').on('changed.owl.carousel', function(event) {
//       let current = event.item.index;
//       let hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
//       $('.'+hash).addClass('active');
//     });

//     $('.owl-carousel').on('change.owl.carousel', function(event) {
//       let current = event.item.index;
//       let hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
//       $('.'+hash).removeClass('active');
//     });

// });



// Why Choose Us 
$(document).ready(function () {
  let owlWhyChooseUs = $('#app__why__choose__us__carousel');

  owlWhyChooseUs.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    URLhashListener: true,
    URLhashNav: true,
  });

  owlWhyChooseUs.on('initialized.owl.carousel changed.owl.carousel', function (event) {
    // Get the current slide index
    let currentSlideIndex = event.item.index;

    console.log(event.item);

    // Remove the 'active' class from all anchor tags
    $('#app__why__choose__us__list ul li a').removeClass('active');

    // Add the 'active' class to the corresponding anchor tag based on the slide index
    $('#app__why__choose__us__list ul li a[href="#' + (currentSlideIndex + 1) + '"]').addClass('active');
  });
});