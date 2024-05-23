import Axios from 'axios';
const axios = Axios.create({
  baseURL: 'http://localhost:3000/users',
  headers: {
    'api-key': '12343512312',
  },
});

export async function getUsers() {
  const response = await axios.get('');
  return response.data;
}

export async function createUser(user) {
  const response = await axios.post('', user);
  return response.data;
}

export async function resetUser({ id, ...user }) {
  const response = await axios.put(`/${id}`, user);
  return response.data;
}

export async function updateUser({ id, ...user }) {
  const response = await axios.patch(`/${id}`, user);
  return response.data;
}

export async function deleteUser(id) {
  const response = await axios.delete(`/${id}`);
  return response.data;
}
