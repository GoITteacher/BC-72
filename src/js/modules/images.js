const formElem = document.querySelector('.js-images-form');
const imagesContainer = document.querySelector('.js-images-container');

imagesContainer.style.flexWrap = 'wrap';

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  searchImages(query).then(data => {
    const markup = imagesTemplate(data.hits);
    imagesContainer.innerHTML = markup;
  });
});

//!===============================================================
function searchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43979459-cb9029671f39809d08984a919',
    q: query,
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;
  return fetch(url).then(res => res.json());
}

function imageTemplate(image) {
  return `<div>
        <img src="${image.previewURL}" alt="img"/>
    </div>`;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}
