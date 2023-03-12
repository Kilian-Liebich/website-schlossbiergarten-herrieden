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

const listItems = document.querySelectorAll('.list-wrapper');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', () => {
    const [, wrapper] = listItems[i].children;
    wrapper.classList.toggle('close');
    wrapper.classList.toggle('open');
  });
}

// END OPEN OR CLOSE LIST ITEMS //
