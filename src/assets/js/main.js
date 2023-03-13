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
let curListItems = '';

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', () => {
    const [elements, wrapper] = listItems[i].children;

    if (curListItems === elements.children[0].innerHTML) {
      wrapper.classList.toggle('close');
      wrapper.classList.toggle('open');
    } else {
      for (const item of listItems) {
        item.children[1].classList.add('close');
        item.children[1].classList.remove('open');
      }
      wrapper.classList.toggle('close');
      wrapper.classList.toggle('open');
    }

    curListItems = elements.children[0].innerHTML;
  });
}

// END OPEN OR CLOSE LIST ITEMS //
