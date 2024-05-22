const BASE_URL = 'http://localhost:3000';
const END_POINT = '/users';

export function getUsers() {
  const url = `${BASE_URL}${END_POINT}`;
  return fetch(url).then(res => res.json());
}

export function createUser(user) {
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => res.json());
}

export function resetUser({ id, ...user }) {
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => res.json());
}
export function updateUser({ id, ...user }) {
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => res.json());
}
export function deleteUser(id) {
  const url = `${BASE_URL}${END_POINT}/${id}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(res => res.json());
}
