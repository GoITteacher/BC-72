import axios from 'axios';
axios.defaults.baseURL = 'https://newsapi.org/v2';

export async function getNews(query) {
  const params = {
    q: query,
    language: 'en',
    sortBy: 'popularity',
    pageSize: '10',
  };

  const headers = {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  };

  const response = await axios.get('/everything', { headers, params });
  return response.data;
}
