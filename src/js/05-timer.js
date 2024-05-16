/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

//!===============================================================
const startBtn = document.querySelector('[data-action-start]');
const stopBtn = document.querySelector('[data-action-stop]');
const clockface = document.querySelector('.clockface');

startBtn.addEventListener('click', () => {
  timer.start();
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  timer.stop();
  startBtn.disabled = false;
});

//!===============================================================

class Timer {
  constructor(onTick, date) {
    this.isActive = false;
    this.initTime = date;
    this.tick = onTick;
    this.intervalId = null;
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const ms = this.initTime - Date.now();
      const time = this.#getTimeComponents(ms);
      this.tick(time);
    }, 1000);

    setTimeout(() => {
      clearInterval(this.intervalId);
    }, this.initTime - Date.now());
  }

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  }

  #getTimeComponents(time) {
    const hours = this.#pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.#pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.#pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  #pad(number) {
    return `${number}`.padStart(2, '0');
  }
}

function tick({ hours, mins, secs }) {
  const str = `${hours}:${mins}:${secs}`;
  clockface.textContent = str;
}

const date = new Date('2024-05-16 12:39');
const timer = new Timer(tick, date);

//!===============================================================
