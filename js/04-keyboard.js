/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', e => {
//   console.log('Hello KEYDOWN', e.code);
//   if (e.ctrlKey && e.code === 'KeyF') {
//     console.log('Hello F');
//   }
// });

// document.addEventListener('keypress', e => {
//   console.log(e);
//   console.log('Hello KEYPRESS', e.code);

//   if (e.ctrlKey && e.code === 'KeyF') {
//     console.log('Hello F');
//   }
// });

// document.addEventListener('keyup', e => {
//   console.log(e);
//   console.log('Hello KEYUP', e.code);
// });
/**
 * Обробка комбінацій клавіш
 */

/* let flag = false;

document.addEventListener('keydown', () => {
  if (flag) return;
  flag = true;

  console.log('Hello');
});

document.addEventListener('keyup', () => {
  flag = false;
  console.log('bye');
});
 */
