const STORAGE_KEY = 'feedback-msg';
const form = document.querySelector('.feedback-form');

//!===============================================================

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  const userData = {
    name: formData.get('name').trim(),
    message: formData.get('message').trim(),
  };

  console.log(userData);
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});

//!===============================================================

form.addEventListener('input', () => {
  const formData = new FormData(form);

  const userData = {
    name: formData.get('name').trim(),
    message: formData.get('message').trim(),
  };

  saveToLS(STORAGE_KEY, userData);
});

//!===============================================================
function init() {
  const data = loadFromLS(STORAGE_KEY) || {};
  form.elements.name.value = data.name || 'Anonymous';
  form.elements.message.value = data.message || '';
}
init();

//!===============================================================

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    return data;
  }
}

//?===============================================================

// const headerInput = document.querySelector('.js-header');
// headerInput.addEventListener('input', e => {
//   const value = e.target.value;
//   saveToLS('header', value);
// });
