import axios from 'axios';

export const userParams = {
  query: '',
  currentPage: 1,
  maxPage: 1,
  perPage: 10,
};

export async function fetchArticles() {
  const BASE_URL = 'https://newsapi.org/v2';
  const END_POINT = '/everything';
  const url = BASE_URL + END_POINT;

  const params = {
    q: userParams.query,
    pageSize: userParams.perPage,
    page: userParams.currentPage,
  };

  const headers = {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  };

  const response = await axios.get(url, { params, headers });
  return response.data;
}
