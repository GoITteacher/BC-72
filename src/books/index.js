const refs = {
  form: document.querySelector('.js-form'),
  filter: document.querySelector('.js-filter'),
  bookListEl: document.querySelector('.js-books'),
};

const books = [];

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const title = formData.get('title');
  const author = formData.get('author');
  const desc = formData.get('desc');

  const book = {
    title: title,
    author: author,
    desc: desc,
  };

  books.push(book);

  const markup = bookTemplate(book);
  refs.bookListEl.insertAdjacentHTML('beforeend', markup);

  e.target.reset();
});

//!===============================================================

refs.filter.addEventListener('input', e => {
  const filterValue = e.target.value;
  const filteredBooks = books.filter(el => el.title.includes(filterValue));
  renderBooks(filteredBooks);
});

//!===============================================================

function bookTemplate({ title, author, desc }) {
  return `<li class="box book">
    <p>Title: ${title}</p>
    <p>Author: ${author}</p>
    <p>Description: ${desc}</p>
  </li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}

function renderBooks(books) {
  const markup = booksTemplate(books);
  refs.bookListEl.innerHTML = markup;
}
