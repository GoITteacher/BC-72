/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

// const formElem = document.querySelector('.js-form');

// formElem.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   /*
//   const email = formElem.elements.userEmail.value;
//   const password = formElem.elements.password.value;
//   const comment = formElem.elements.comment.value;
//   const userData = { email, password, comment };
//   */

//   const userData = {
//     email: formElem.elements.userEmail.value,
//     password: formElem.elements.password.value,
//     comment: formElem.elements.comment.value,
//   };

//   console.log(userData);
// }

//!===============================================================

// const formElem = document.querySelector('.js-form');
// const messageListEl = document.querySelector('ul');

// formElem.addEventListener('submit', e => {
//   e.preventDefault();

//   const message = {
//     name: formElem.elements.userName.value,
//     content: formElem.elements.message.value,
//   };

//   const markup = messageTemplate(message);
//   messageListEl.insertAdjacentHTML('beforeend', markup);

//   formElem.reset();
// });

// function messageTemplate(message) {
//   return `
//     <li class="message-item">
//         <p>${message.name}</p>
//         <p>${message.content}</p>
//       </li>`;
// }
