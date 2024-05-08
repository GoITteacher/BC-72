/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
//!===============================================================
/* const userName = document.querySelector('.js-user-name');
userName.addEventListener('input', onUserNameInput);
function onUserNameInput() {
  console.dir(userName.value);
} */

//!===============================================================

// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('change', onUserNameInput);

// function onUserNameInput() {
//   console.dir(userName.value);
// }

//!===============================================================

// const userColorEl = document.querySelector('.js-user-color');
// userColorEl.addEventListener('change', () => {
//   const color = userColorEl.value;
//   document.body.style.backgroundColor = color;
// });

//!===============================================================

// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('focus', () => {
//   console.log('Hello focus');
// });

// userName.addEventListener('blur', () => {
//   console.log('Hello blur');
// });

//!===============================================================

/* const userName = document.querySelector('.js-user-name');
userName.addEventListener('focus', () => {
  userName.style.border = '';
});

userName.addEventListener('blur', () => {
  const userValue = userName.value;
  if (userValue.length < userName.dataset.minLen) {
    userName.style.border = '5px solid red';
  }
}); */
//!===============================================================

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

const userName = document.querySelector('.js-user-name');

userName.addEventListener('blur', () => {
  const message = `Hello ${userName.value}`;
  alert(message);
});
