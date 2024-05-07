/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 * - style
 */

// const ulElem = document.querySelector('.js-list');
// const firstLiElem = ulElem.children[0];

// for (let i = 0; i < ulElem.children.length; i++) {
//   if (i % 2 === 0) {
//     ulElem.children[i].classList.add('even-elem');
//   } else {
//     ulElem.children[i].classList.add('odd-elem');
//   }
// }

// for (const liElem of ulElem.children) {
//   if (liElem.textContent > 10) {
//     liElem.classList.add('active-elem');
//   }
// }

// firstLiElem.classList.remove('active-elem');

// setInterval(() => {
//   firstLiElem.classList.toggle('active-elem');
// }, 1000);

// firstLiElem.classList.replace('active-elem', 'even-elem');
// firstLiElem.classList.replace('active', 'even-elem');

// const isActive = firstLiElem.classList.contains('active-elem');
// if (isActive) {
//   console.log('Hello');
// } else {
//   console.log('Goodbye');
// }

//!===============================================================

// const ulElem = document.querySelector('.js-list2');

// for (let i = 0; i < ulElem.children.length; i++) {
//   const liElem = ulElem.children[i];
//   liElem.classList.add('liElem');
//   liElem.style.width = `${i * 10}px`;
// }
