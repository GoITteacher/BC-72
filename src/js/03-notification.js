/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');
let counter = 0;

/*
 * Функції
 */

// notification.addEventListener('click', () => {
//   hideNotification();
//   clearTimeout(timeoutId);
// });

// setTimeout(() => {
//   showNotification();
//   timeoutId = setTimeout(hideNotification, 10000);
// }, NOTIFICATION_DELAY);

//!===============================================================
// notification.addEventListener('click', () => {
//   hideNotification();
// });

// const intervalId = setInterval(() => {
//   counter++;
//   showNotification();
//   setTimeout(hideNotification, 1000);

//   if (counter >= 5) {
//     clearInterval(intervalId);
//   }
// }, 5000);

//!===============================================================

function showNotification() {
  console.log('SHOW');
  notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('HIDE');
  notification.classList.remove('is-visible');
}
