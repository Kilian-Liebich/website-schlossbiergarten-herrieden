'use strict';

// LOADING SPINNER //

setTimeout(() => {
  const loader = document.querySelector('.loader');
  const overfowHidder = document.body;
  loader.classList.add('loader-hidden');
  overfowHidder.classList.remove('overflow');
}, 3900);

// END LOADING SPINNER //

// OPEN OR CLOSE LIST ITEMS //

const accordionContents = document.querySelectorAll('.accordion-content');

accordionContents.forEach((item, index) => {
  let header = item.querySelector('header');
  let description = item.querySelector('.accordion-description');
  let arrow = item.querySelector('.accordion-arrow');
  header.addEventListener('click', () => {
    item.classList.toggle('open');

    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight}px`;
      arrow.classList.add('accordion-arrow-fill-out');
      // arrow.classList.replace('open', 'close');
    } else {
      description.style.height = '0px';
      // arrow.classList.replace('close', 'open');
      arrow.classList.remove('accordion-arrow-fill-out');
    }

    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContents.forEach((item2, index2) => {
    if (index1 !== index2) {
      let description2 = item2.querySelector('.accordion-description');
      let arrow2 = item2.querySelector('.accordion-arrow');
      item2.classList.remove('open');
      description2.style.height = '0px';
      arrow2.classList.remove('accordion-arrow-fill-out');
    }
  });
}

// END OPEN OR CLOSE LIST ITEMS //
