// 'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function(){
//   console.log('button clicked')
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for(let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

//   btnCloseModal.addEventListener('click', closeModal);
//   overlay.addEventListener('click', closeModal);
  
//   document.addEventListener('keydown', function(e){

//     //console.log('a key was pressed');
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')){
//         closeModal();
//     }
//   });


'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
let previouslyFocusedElement;

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // Store the currently focused element before opening the modal
  previouslyFocusedElement = document.activeElement;

  // Set initial focus inside the modal (e.g., the first focusable element)
  const firstFocusableElement = focusableElements[0];
  firstFocusableElement.focus();
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  // Restore focus to the element that was focused before opening the modal
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }

  if (e.key === 'Tab' && !modal.classList.contains('hidden')) {
    // Get the currently focused element
    const focusedElement = document.activeElement;

    // Check if the focused element is the last focusable element in the modal
    if (focusedElement === focusableElements[focusableElements.length - 1]) {
      // Move focus back to the first focusable element in the modal
      e.preventDefault();
      focusableElements[0].focus();
    } else if (focusedElement === focusableElements[0] && e.shiftKey) {
      // Move focus from the first focusable element to the last when Shift + Tab is pressed
      e.preventDefault();
      focusableElements[focusableElements.length - 1].focus();
    }
  }

  if (e.key === 'Enter' && document.activeElement) {
    // Trigger a click event on the active element when Enter is pressed
    document.activeElement.click();
  }
});
