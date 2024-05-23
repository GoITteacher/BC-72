import {
  getUsers,
  createUser,
  updateUser,
  resetUser,
  deleteUser,
} from './modules/usersAPI';

// ===================================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};
//!===============================================================
refs.createUserForm.addEventListener('submit', onUserCreate);
refs.updateUserForm.addEventListener('submit', onUserUpdate);
refs.resetUserForm.addEventListener('submit', onUserReset);
refs.deleteUserForm.addEventListener('submit', onUserDelete);

async function onUserCreate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const user = {};

  formData.forEach((el, key) => {
    key = key.slice(4).toLowerCase();
    user[key] = el;
  });

  try {
    const result = await createUser(user);
    const markup = templateUser(result);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.log(err);
  }
}

function onUserUpdate(e) {
  e.preventDefault();
}
function onUserReset(e) {
  e.preventDefault();
}
function onUserDelete(e) {
  e.preventDefault();
}

//!===============================================================

window.addEventListener('DOMContentLoaded', async () => {
  const users = await getUsers();
  renderUsers(users.reverse());
});

//!===============================================================
function templateUser({ id, name, email, phone, img }) {
  return `
  <li class="card user-item" data-id="${id}">
  <img
    src="https://source.unsplash.com/720x1280/?random=${id}&girl,portret,celebrity"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${email}</p>
  <p>Email: ${phone}</p>
  <button class="btn button">DELETE</button>
</li>`;
}

function templateUsers(users) {
  return users.map(templateUser).join('');
}

function renderUsers(users) {
  const markup = templateUsers(users);
  refs.userListElem.innerHTML = markup;
}
