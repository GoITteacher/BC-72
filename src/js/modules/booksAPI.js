import axios from 'axios';

export class BooksAPI {
  constructor() {
    this.BASE_URL = 'http://localhost:3000';
    this.END_POINT = '/books';
    this.API_KEY = '123123';
  }

  async getBooks() {
    const url = this.BASE_URL + this.END_POINT;
    const response = await axios.get(url);
    return response.data;
  }

  async createBook(book) {
    const url = this.BASE_URL + this.END_POINT;
    const response = await axios.post(url, book);
    return response;
  }

  async updateBook(id, book) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;
    const response = await axios.patch(url, book);
  }

  resetBook(id, book) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  deleteBook(id) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'DELETE',
    };

    return fetch(url, options).then(res => res.json());
  }
}
