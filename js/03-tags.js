let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
  sendBtn: document.querySelector('.js-send-btn'),
};

//!===============================================================

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('.tag-item');

  liElem.classList.toggle('active');
});

//!===============================================================

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const previousElem = refs.secondTagsList.querySelector('.active');
  previousElem.classList.remove('active');

  const liElem = e.target.closest('.tag-item');
  liElem.classList.add('active');
});

//!===============================================================
refs.sendBtn.addEventListener('click', e => {
  const tagsElem = refs.firstTagsList.querySelectorAll('.active');
  const tags = [...tagsElem].map(el => el.textContent.trim());
  console.log(tags);

  const activeElem = refs.secondTagsList.querySelector('.active');
  console.log(activeElem.textContent.trim());
});
//!===============================================================
