/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', (e) => {
//   boxRef.classList.add('box--active');
//   alert('Hello');
// });

// boxRef.addEventListener('mouseleave', (e) => {
//   boxRef.classList.remove('box--active');
//   alert('Bye');
// });

//!===============================================================
const boxRef = document.querySelector('.js-box');
const childBox = boxRef.firstElementChild;

boxRef.addEventListener('mousemove', e => {
  console.log(e.x, e.y);
  childBox.style.left = `${e.clientX - 50}px`;
  childBox.style.top = `${e.clientY - 100}px`;
});
