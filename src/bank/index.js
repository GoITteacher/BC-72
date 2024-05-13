const refs = {
  form: document.querySelector('.js-form'),
  transactionList: document.querySelector('.js-transaction'),
  balance: document.querySelector('.js-balance'),
};

let balance = 0;
const transactions = [];

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const amount = +e.target.elements.amount.value;
  const type = e.target.elements.type.value;
  const tObj = { amount, type };

  if (type === 'deposit') {
    balance += amount;
  } else {
    balance -= amount;
  }
  tObj.balance = balance;

  const markup = transactionTemplate(tObj);
  refs.transactionList.insertAdjacentHTML('beforeend', markup);
  refs.balance.innerHTML = balance;

  transactions.push(tObj);

  e.target.reset();
});

//!===============================================================

function transactionTemplate(obj) {
  return `<li class="box transaction ${obj.type}">
  <p>Type: ${obj.type};</p>
  <p>Amount: ${obj.amount};</p>
  <p>Current Balance: ${obj.balance};</p>
</li>`;
}

function transactionsTemplate(arr) {
  return arr.map(transactionTemplate).join('');
}
