export class Product {
  #title;
  constructor(title) {
    this.#title = title;
  }

  get title() {
    return this.title;
  }

  set title(newValue) {
    this.#title = newValue;
  }
}
