import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchArticles, userParams } from './modules/newsAPI';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};
//!===============================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  refs.articleListElem.innerHTML = '';
  userParams.query = e.target.elements.query.value.trim();
  userParams.currentPage = 1;
  hideLoadMoreBtn();
  loader.show();

  try {
    const result = await fetchArticles();
    userParams.maxPage = Math.ceil(result.totalResults / userParams.perPage);
    renderArticles(result.articles);

    if (result.totalResults === 0) {
      showError('Нічого не знайдено!!!');
    }
  } catch {
    showError('Error Server!');
  }

  updateBtnStatus();
  loader.hide();
  e.target.reset();
});

refs.btnLoadMore.addEventListener('click', async () => {
  hideLoadMoreBtn();
  loader.show();
  userParams.currentPage += 1;

  try {
    const result = await fetchArticles();
    renderArticles(result.articles);
  } catch {
    showError('Error Server!');
  }

  updateBtnStatus();
  scrollPage();
  loader.hide();
});

//!===============================================================

function articleTemplate(article) {
  const { title, urlToImage, description, author, publishedAt } = article;

  return `<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${urlToImage}"
    alt="${title}"
  />
  <h3 class="card-title">
    ${title}
  </h3>
  <p class="card-desc">
  ${description}
  </p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${publishedAt}</span>
  </div>
</li>`;
}

function articlesTemplate(arr) {
  return arr.map(articleTemplate).join('');
}

function renderArticles(arr) {
  const markup = articlesTemplate(arr);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}

//!===============================================================\

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}
function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('hidden');
}
function updateBtnStatus() {
  if (userParams.currentPage >= userParams.maxPage) {
    hideLoadMoreBtn();
    showMessage('The End!!!');
  } else {
    showLoadMoreBtn();
  }
}

const loader = {
  show() {
    refs.loadElem.classList.remove('hidden');
  },
  hide() {
    refs.loadElem.classList.add('hidden');
  },
};
//!===============================================================

function showMessage(message) {
  iziToast.show({
    title: '',
    message,
  });
}

function showError(message) {
  iziToast.error({
    title: '',
    message,
  });
}

//!===============================================================

function scrollPage() {
  const liElem = refs.articleListElem.firstElementChild;
  const height = liElem.getBoundingClientRect().height;

  window.scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
