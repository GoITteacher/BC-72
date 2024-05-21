const refs = {
  wrapperInstagram: document.querySelector('.js-inst-wrap'),
  searchInstagramEl: document.querySelector('.js-inst-form'),
};

function getUserInfo(username) {
  const BASE_URL = 'https://instagram191.p.rapidapi.com';
  const END_POINT = '/v3/user/details-by-username';
  const params = new URLSearchParams({ username });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'instagram191.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}
