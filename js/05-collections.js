/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

//!===============================================================

/* 
function colorTemplate(colorObj) {
  const liElem = document.createElement('li');
  liElem.classList.add('color-picker__option');

  const pElem = document.createElement('p');
  pElem.textContent = colorObj.label;

  liElem.append(pElem);

  return liElem;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate);
}

const result = colorsTemplate(options);

colorPickerContainerEl.append(...result); 
*/

//!===============================================================

// function colorTemplate(colorObj) {
//   return `
// <li class="color-picker__option">
//   <p class="test">${colorObj.label}</p>
// </li>`;
// }

// function colorsTemplate(arr) {
//   return arr.map(colorTemplate).join('\n');
// }

// const markup = colorsTemplate(options);

// colorPickerContainerEl.insertAdjacentHTML('beforeend', markup);
//!===============================================================
