/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// parent.addEventListener('click', e => {
//   console.log('PARENT', e.currentTarget);
// });

// child.addEventListener('click', e => {
//   console.log('CHILD', e.currentTarget);
// });

// innerChild.addEventListener('click', e => {
//   console.log('INNER CHILD1', e.currentTarget);
// });

// innerChild.addEventListener('click', e => {
//   e.stopImmediatePropagation();
//   console.log('INNER CHILD2', e.currentTarget);
// });

// innerChild.addEventListener('click', e => {
//   console.log('INNER CHILD3', e.currentTarget);
// });
