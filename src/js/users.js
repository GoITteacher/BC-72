import {
  createUser,
  getUsers,
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
// ============================================================

refs.createUserForm.addEventListener('submit', onCreateUser);
refs.updateUserForm.addEventListener('submit', onUpdateUser);
refs.resetUserForm.addEventListener('submit', onResetUser);
refs.deleteUserForm.addEventListener('submit', onDeleteUser);

function onCreateUser(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const user = {};

  formData.forEach((value, key) => {
    key = key.replace('user', '').toLowerCase();
    user[key] = value;
  });

  createUser(user).then(newUser => {
    const markup = userTemplate(newUser);
    refs.userListElem.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
}

function onUpdateUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = {};

  formData.forEach((value, key) => {
    key = key.replace('user', '').toLowerCase();
    if (value) {
      user[key] = value;
    }
  });

  updateUser(user).then(newUser => {
    const oldUser = document.querySelector(`[data-id="${user.id}"]`);
    const markup = userTemplate(newUser);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });

  e.target.reset();
}

function onResetUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = {};

  formData.forEach((value, key) => {
    key = key.replace('user', '').toLowerCase();
    user[key] = value;
  });

  resetUser(user).then(newUser => {
    const oldUser = document.querySelector(`[data-id="${user.id}"]`);
    const markup = userTemplate(newUser);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });

  e.target.reset();
}

function onDeleteUser(e) {
  e.preventDefault();
  const id = e.target.elements.userId.value;
  deleteUser(id).then(() => {
    const oldBook = document.querySelector(`[data-id="${id}"]`);
    oldBook.remove();
  });
  e.target.reset();
}

//!===============================================================
function userTemplate({ id, name, img, email, phone }) {
  return `<li class="card user-item" data-id="${id}">
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

function usersTemplate(arr) {
  return arr.map(userTemplate).join('\n\n\n\n');
}

//!===============================================================

getUsers().then(users => {
  const markup = usersTemplate(users);
  refs.userListElem.innerHTML = markup;
});
