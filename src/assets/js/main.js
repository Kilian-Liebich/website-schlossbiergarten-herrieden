'use strict';

// LOADING SPINNER //

setTimeout(() => {
  const loader = document.querySelector('.loader');
  const overfowHidder = document.body;
  loader.classList.add('loader-hidden');
  overfowHidder.classList.remove('overflow');
}, 3900);

// END LOADING SPINNER //
