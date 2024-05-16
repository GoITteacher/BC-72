/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

//!===============================================================

// const date1 = new Date();
// const date2 = new Date('12.03.2001');
// const date3 = new Date('10/10/2001');
// const date4 = new Date('2001/12/12');
// const date5 = new Date('2020');
// const date6 = new Date('11.10.2014 14:12:51');

//!===============================================================

// const date1 = new Date('2020-10-10 15:00');
// const date2 = new Date('2020-10-10 23:00');

// const ms = date2 - date1;
// const sec = ms / 1000;
// const min = sec / 60;
// const hours = min / 60;

// console.log(hours);

//!===============================================================

// const date = new Date('2024-05-16 16:21:22');

// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth()); // РАХУЄ з 0
// console.log(date.getDate());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(date.getUTCHours());
// console.log(date.getHours());

// const date = new Date('1995-01-01 01:00:00');
// console.log(date.getFullYear());
// console.log(date.getUTCFullYear());

//!===============================================================

// const date = new Date('2024-05-16 16:21:22');

// date.setDate(25);
// date.setMonth(1);
// date.setFullYear(2020);
// date.setHours(15);
// date.setMinutes(12);
// date.setSeconds(45);

// date.setDate(1000);
// date.setHours(120);

// date.setDate(+date.getDate() + 39);
// console.log(date.getDay());

//!===============================================================

const startBtn = document.querySelector('.js-start-btn');
const stopBtn = document.querySelector('.js-stop-btn');
const pElem = document.querySelector('.js-time');
let intervalId = null;

startBtn.addEventListener('click', () => {
  const initTime = Date.now();

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - initTime;
    const timeObj = convertMS(diff);
    const str = `${timeObj.days}:${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
    pElem.textContent = str;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

function convertMS(ms) {
  let d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;

  return {
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
  };
}
