import { v4 as generateId } from 'uuid';

export class User {
  #name;
  constructor(name) {
    this.id = generateId();
    this.#name = name;
  }

  get name() {
    return this.name;
  }

  set name(newValue) {
    this.#name = newValue;
  }
}
