import axios from 'axios';

const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value;

  getPrice(query)
    .then(data => {
      const markup = symbolTemplate(data);
      refs.infoEl.innerHTML = markup;
    })
    .catch(err => {
      alert('Щось не так!!!');
    });

  e.target.reset();
});

async function getPrice(userValue) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const params = {
    symbol: userValue,
  };

  const headers = {
    'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
  };

  const response = axios.get(url, { headers, params });
  return await response.data;
}

function symbolTemplate({ price, symbol }) {
  const imgTitle = symbol.slice(0, -4).toLowerCase();
  return `
  <img class="coin-logo" src="https://assets.coincap.io/assets/icons/${imgTitle}@2x.png">
  <p class="coin-title">${symbol}</p>
  <p class="coin-price">${(+price).toFixed(2)}</p>
`;
}
