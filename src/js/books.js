import {
  createBook,
  deleteBook,
  getBooks,
  resetBook,
  updateBook,
} from './modules/booksAPI';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};

window.addEventListener('DOMContentLoaded', () => {
  getBooks().then(books => {
    const markup = booksTemplate(books);
    refs.bookListElem.innerHTML = markup;
  });
});

//!===============================================================

refs.createFormElem.addEventListener('submit', onCreateBook);
refs.resetFormElem.addEventListener('submit', onResetBook);
refs.updateFormElem.addEventListener('submit', onUpdateBook);
refs.deleteFormElem.addEventListener('submit', onDeleteBook);

function onCreateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const book = {
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
  };

  createBook(book).then(createdBook => {
    const markup = bookTemplate(createdBook);
    refs.bookListElem.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
}

function onResetBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    // key = key.slice(4).toLowerCase();
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  resetBook(book).then(newBook => {
    const oldBook = document.querySelector(`[data-id="${book.id}"]`);
    const markup = bookTemplate(newBook);
    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  });
}
function onUpdateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();

    if (value.trim()) {
      book[key] = value;
    }
  });

  updateBook(book).then(newBook => {
    const oldBook = document.querySelector(`[data-id="${book.id}"]`);
    const markup = bookTemplate(newBook);
    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  });
}

function onDeleteBook(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  const oldBook = document.querySelector(`[data-id="${id}"]`);
  oldBook.remove();
  deleteBook(id);
}

//!===============================================================

function bookTemplate(book) {
  return `<li class="book-item card" data-id="${book.id}">
  <img
    class="book-img"
    src="${book.img}"
    alt=""
  />
  <h5 class="book-title">${book.title}</h5>
  <h6>Author: ${book.author}</h6>
  <p class="book-desc">${book.desc}</p>

  <div class="book-info">
    <span>Price: ${book.price}</span>
    <span>Rating: ${book.rating}</span>
  </div>
</li>`;
}

function booksTemplate(arr) {
  return arr.map(bookTemplate).join('');
}
