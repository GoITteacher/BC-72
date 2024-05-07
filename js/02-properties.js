/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const heroTitleEl = document.querySelector('.hero__title');

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута) // true || false
 */

//!===============================================================

// const imageEl = document.querySelector('.hero__image');
// const randomImageUrl = 'https://source.unsplash.com/1280x720/?random=1&test';
// imageEl.setAttribute('src', randomImageUrl);
// const altContent = imageEl.getAttribute('alt');
// imageEl.setAttribute('alt', altContent.toUpperCase());

//!===============================================================

// const inputEl = document.querySelector('.js-input');
//
// console.log(inputEl);

// if (inputEl.hasAttribute('disabled')) {
//   console.log('Горечко, вмикаю');
//   inputEl.removeAttribute('disabled');
// } else {
//   console.log('Зараз вимкну');
//   inputEl.setAttribute('disabled', '');
// }

//!===============================================================

/*
 * Data-атрибути
 */

// const actions = document.querySelectorAll('.actions button');
// const firstBtn = actions[0];

// const result = firstBtn.getAttribute('data-action');
// const result = firstBtn.dataset.action;
// const id = firstBtn.dataset.id;
// const type = firstBtn.dataset.type;

// console.log(result, id, type);

// firstBtn.dataset.newDataParam = 'Hello World';
