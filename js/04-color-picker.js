let colorPalette = [];
const LENGTH = 12;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();

//!===============================================================

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

//!===============================================================
refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

function colorTemplate(color) {
  return ` <li class="color-item">
  <button class="color-body" data-color="${color.hex}" style="background-color: ${color.hex}"></button>
  <div class="color-footer">
    <div>HEX: ${color.hex}</div>
    <div>RGB: ${color.rgb}</div>
    <div></div>
  </div>
</li>`;
}

function colorsTemplate(colors) {
  return colors.map(colorTemplate).join('');
}

//!===============================================================

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const prevActiveElem = refs.itemList.querySelector('.active');
  prevActiveElem?.classList.remove('active');

  const liElem = e.target.closest('li');
  liElem.classList.add('active');

  refs.modalElement.style.backgroundColor = e.target.dataset.color;
  showModal();
});

refs.backdropElem.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  hideModal();
});

//!===============================================================

createPaletteItems();
const markup = colorsTemplate(colorPalette);
refs.itemList.innerHTML = markup;

//!===============================================================

function showModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onModalClose);
}

function hideModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onModalClose);
}

function onModalClose(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    hideModal();
  }
}
