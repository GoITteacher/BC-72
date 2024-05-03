/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */
//!===============================================================
// class User {
//   constructor(name, age, isStudent) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
//   }
// }

// const user1 = new User('Vlad', 50, false);
// const user2 = new User('Roman', 25, true);

// console.log(user1);
// console.log(user2);

//!===============================================================

/* class User {
  constructor(name = 'Anonym', age = 1) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    const info = `${this.name} ${this.age}`;
    console.log(info);
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  toString() {
    const str = `Name: ${this.name}; Age: ${this.age}`;
    return str;
  }
}

const user1 = new User('Vlad', 25); */

//!===============================================================

/* class Tesla {
  #model;
  #maxSpeed;

  constructor(color, price, model, maxSpeed) {
    this.color = color;
    this.price = price;
    this.#model = model;
    this.#maxSpeed = maxSpeed;
  }

  showInfo() {
    this.#showModel();
    this.#showColor();
    this.#showPrice();
    this.#showMaxSpeed();
  }

  #showColor() {
    console.log('Color:', this.color);
  }
  #showPrice() {
    console.log('Price:', this.price);
  }
  #showModel() {
    console.log('Model:', this.#model);
  }
  #showMaxSpeed() {
    console.log('Max Speed:', this.#maxSpeed);
  }
}

const tesla1 = new Tesla('black', 35000, 'model s', 300);

tesla1.showInfo(); */

//!===============================================================

/* class Tesla {
  #model;
  #maxSpeed;

  constructor(color, price, model, maxSpeed) {
    this.color = color;
    this.price = price;
    this.#model = model;
    this.#maxSpeed = maxSpeed;
  }

  get model() {
    return this.#model;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(newValue) {
    if (newValue > 300) {
      console.error('Error: Max speed must be <= 300');
      return;
    }

    this.#maxSpeed = newValue;
  }
}

const tesla1 = new Tesla('black', 35000, 'model s', 300);

console.log(tesla1.model); */

//!===============================================================

// class Tesla {
//   static count = 0;
//   static discount = 0.2;

//   constructor(model, price, color) {
//     Tesla.count += 1;
//     this.model = model;
//     this.price = price;
//     this.color = color;
//   }

//   showPriceWithDiscount() {
//     console.log('Total Price: ', this.price);
//     console.log('With Discount: ', this.price * (1 - Tesla.discount));
//   }
// }

// const tesla1 = new Tesla('model s', 35000, 'black');
// const tesla2 = new Tesla('model s', 33000, 'red');

// console.log(Tesla.count);

//!===============================================================

// function foo() {
//   this.name = 'Hello World';
//   this.age = '123';
//   this.isStudent = false;
//   return this;
// }

// const res1 = foo.call({});
// const res1 = new foo();

// console.log(res1);
