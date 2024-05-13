/* const ulElem = document.querySelector('.js-image-list');

let markup = [];

for (let i = 0; i < 100; i++) {
  markup.push(`<li>
  <img
    class="my-image blur-up lazyload"
    src="https://cdn.pixabay.com/photo/2014/06/03/19/38/test-361512_640.jpg"
    data-src="https://source.unsplash.com/500x500/?random=${i}&eat,bread,dish,meet,egg"
    alt="eat"
  />
</li>`);
}

ulElem.insertAdjacentHTML('beforeend', markup.join(''));
 */

//!===============================================================
// const ulElem = document.querySelector('.js-image-list');

/* const users = [];

for (let i = 0; i < 100; i++) {
  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.random.number(),
    email: faker.internet.email(),
  };

  users.push(user);
}

function userTemplate({ firstName, lastName, age, email }) {
  return `<li class="user-item">
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Age: ${age}</p>
</li>`;
}

function usersTemplate(users) {
  return users.map(userTemplate).join('');
}

const markup = usersTemplate(users);
ulElem.innerHTML = markup;
 */
//?===============================================================

// console.log(faker);

// function generateFakeOrder() {
//   const items = Array.from(
//     { length: faker.random.number({ min: 1, max: 5 }) },
//     () => ({
//       description: faker.commerce.productName(),
//       quantity: faker.random.number({ min: 1, max: 10 }),
//       cost: faker.commerce.price(),
//     }),
//   );

//   return {
//     id: faker.random.uuid(),
//     date: faker.date.past(),
//     name: faker.name.firstName(),
//     items,
//     total: items.reduce((acc, { cost }) => acc + parseFloat(cost), 0),
//   };
// }

// const order = generateFakeOrder();

// console.log(order);

//!===============================================================

/* const numbers = [1, 2, 4, 5, 1, 2, 3, 4, 5, 2, 2, 1];

_.fill(numbers, 'a', 4, 8);

console.log(numbers); */

//!===============================================================
// const numbers = [1, 2, 4, 5, 1, 2, 7, 9, 12, 3, 4, 5, 2, 2, 1, 6, 2];
// const result = _.difference(numbers, [2, 5, 4, 3]);
// console.log(result);
//!===============================================================

// const numbers = [1, 2, 4, 5, 1, 2, 7, 9, 12, 3, 4, 5, 2, 2, 1, 6, 2];

// const result = _.drop(numbers, 5);

// console.log(result);

//!===============================================================

// const random = _.random(-100, 100, true);
// console.log(random);

//!===============================================================

/* const galleryEl = document.querySelector('.gallery');

function imgTemplate(obj) {
  return ` <a href="${obj.imgUrl}">
    <img src="${obj.imgUrl}" alt="${obj.title}" testTitle="${obj.title}"/>
  </a>`;
}

function imagesTemplate(arr) {
  return arr.map(imgTemplate).join('');
}

const markup = imagesTemplate(images);
galleryEl.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  navText: ['{<', '>}'],
  captionsData: 'testTitle',
  captionPosition: 'top',
  captionDelay: 500,
});

galleryEl.addEventListener('click', () => {});

lightbox.on('show.simplelightbox', () => {
  console.log('Hello');
});

lightbox.on('close.simplelightbox', () => {
  console.log('Bye');
});

const btnElem = document.querySelector('.js-btn');
btnElem.addEventListener('click', () => {
  lightbox.close();
});

const markup2 = imagesTemplate(images2);
galleryEl.insertAdjacentHTML('beforeend', markup2);
lightbox.refresh();
 */
