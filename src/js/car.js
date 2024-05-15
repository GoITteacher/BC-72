export class Car {
  #model;
  constructor(model) {
    this.#model = model;
  }

  get model() {
    return this.model;
  }

  set model(newValue) {
    this.#model = newValue;
  }
}

export const x = 220;
export const y = 20;
export const q = 20;

export default 'HELLO';
