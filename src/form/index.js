// const formElem = document.querySelector('.js-form');

/* formElem.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formElem);
  

  const obj = {};

  formData.forEach((value, key) => {
    obj[key] = value;
  });

  obj.student = obj.student === 'on';

  console.log(obj);
}); */

/* formElem.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formElem);
  const title = formData.get('title');
  const author = formData.get('author');
  const logo = formData.get('logo');

  console.log(logo);
}); */

/* formElem.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formElem);
  const userData = {};

  formData.forEach((value, key) => {
    value = value.trim();
    if (value) {
      userData[key] = value;
    }
  });

  console.log(userData);
}); */
