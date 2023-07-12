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
