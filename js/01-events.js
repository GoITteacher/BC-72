/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */
//!===============================================================

const liElem1 = document.querySelector('li:nth-child(1)');
const liElem2 = document.querySelector('li:nth-child(2)');
const liElem3 = document.querySelector('li:nth-child(3)');

/* 
- onTargetEvent - (onButtonClick) (onUlElemClick) (onLiElem1Click)
- handleTargetEvent (handleBtnClick) (handleInputChange) (handleInputFocus)
- targetEventHandler (btnClickHandler)
*/

// onBtnClickForAddUser
// onBtnClickForUpdateUser

/* 
function onLiElemClick() {
  console.log('Hello');
}
liElem1.addEventListener('click', onLiElemClick);
liElem2.addEventListener('click', onLiElemClick);
liElem3.addEventListener('click', onLiElemClick); 
*/

// liElem1.addEventListener('click', () => {
//   console.log('Hello 1');
// });

// liElem1.addEventListener('click', () => {
//   console.log('Hello 2');
// });

// liElem1.addEventListener('click', () => {
//   console.log('Hello 3');
// });

//!===============================================================
const clickMe = document.querySelector('.js-click');
// const box = document.querySelector('.js-box');

// let point = {
//   x: 0,
//   y: 0,
// };

// let stepX = 10;
// let stepY = 30;

// clickMe.addEventListener('click', () => {
//   if (point.y > 500) {
//     stepY = -30;
//   } else if (point.y < 0) {
//     stepY = 30;
//   }

//   point.x += stepX;
//   point.y += stepY;

//   box.style.left = `${point.x}px`;
//   box.style.top = `${point.y}px`;
// });

// console.log(window.screen.width);
// console.log(window.screen.height);

//!===============================================================

// function handleBtnClick() {
//   console.log('Hello');
// }

// liElem1.addEventListener('click', handleBtnClick);

// clickMe.addEventListener('click', () => {
//   liElem1.removeEventListener('click', handleBtnClick);
// });

//!===============================================================
