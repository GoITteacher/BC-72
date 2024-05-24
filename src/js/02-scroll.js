import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchArticles } from './modules/newsApi2';
import { articlesTemplate } from './templates/render-function2';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};

//!===============================================================

let currentPage = 1;
let query = '';
let maxPage = 1;
const perPage = 15;

//!===============================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  refs.articleListElem.innerHTML = '';
  currentPage = 1;
  query = e.target.elements.query.value.trim();

  const result = await fetchArticles(query, currentPage);
  renderArticles(result.articles);
  maxPage = result.total_pages;
  updateObserverStatus();

  e.target.reset();
});

async function loadMore() {
  currentPage += 1;
  const result = await fetchArticles(query, currentPage);
  renderArticles(result.articles);
  updateObserverStatus();
}

//!===============================================================
function renderArticles(arr) {
  const markup = articlesTemplate(arr);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}

//!===============================================================

function updateObserverStatus() {
  if (currentPage >= maxPage) {
    observer.unobserve(refs.targetElem);
  } else {
    observer.observe(refs.targetElem);
  }
}

//!===============================================================
const callback = function (entries, observer) {
  const entry = entries[0];

  if (entry.isIntersecting) {
    loadMore();
  }
};

const observer = new IntersectionObserver(callback, {
  rootMargin: '1200px',
  threshold: 0,
});
