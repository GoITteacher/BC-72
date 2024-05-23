import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getNews } from './modules/news-api';
//!===============================================================
const refs = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-container'),
  loader: document.querySelector('.js-loader'),
};
//!===============================================================

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();
  if (!query) {
    showError('Заповніть усі поля');
    return;
  }

  getInfoNews(query);

  e.target.reset();
});

//!===============================================================

function articleTemplate({ title, urlToImage }) {
  return `<li class="article-item">
    <img
      src="${urlToImage}"
      alt=""
    />
    <h5>${title}</h5>
  </li>`;
}

function articlesTemplate(arr) {
  return arr.map(articleTemplate).join('');
}

function renderArticles(arr) {
  const markup = articlesTemplate(arr);
  refs.container.innerHTML = markup;
}

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
//!===============================================================

function showMessage(message) {
  iziToast.success({
    title: 'OK',
    message: message,
    position: 'topRight',
  });
}

function showError(errorMessage) {
  iziToast.error({
    title: 'Error',
    message: errorMessage,
    position: 'topRight',
  });
}

async function getInfoNews(query) {
  showLoader();
  try {
    const result = await getNews(query);

    if (result.totalResults === 0) {
      showError('Нічого не знайдено!!!');
      hideLoader();
      return;
    }

    renderArticles(result.articles);
    showMessage(`Total Results:${result.totalResults}`);
  } catch {
    showError('Error!!!');
  }
  hideLoader();
}

//!===============================================================

async function foo() {
  try {
    const data = await fetch();
    console.log('THEN');
    console.log('THEN');
    console.log('THEN');
    console.log('THEN');
  } catch {
    console.log('CATCH');
    console.log('CATCH');
    console.log('CATCH');
  } finally {
    console.log('FINALLY');
  }
}
