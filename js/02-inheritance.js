/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

/* class Animal {
  age;
  color;
  breed;

  constructor(age, color, breed) {
    this.age = age;
    this.color = color;
    this.breed = breed;
  }

  eat() {
    console.log('Ням ням');
  }
  sleep() {
    console.log('Zzzz');
  }
}

class Dog extends Animal {
  constructor(name, age, color, breed) {
    super(age, color, breed);
    this.name = name;
  }

  sayWoof() {
    console.log('Woof Woof');
  }
}

class Cat extends Animal {
  constructor(name, age, color, breed) {
    super(age, color, breed);
    this.name = name;
  }
  sayMeow() {
    console.log('Meow');
  }
}

const dog1 = new Dog('Lord', 5, 'black', 'spaniel');
const cat1 = new Cat('Marsik', 5, 'black', 'test');

console.log(dog1);
console.log(cat1);

cat1.eat();
dog1.eat(); */

//!===============================================================

class BaseObj {
  constructor(name, x, y) {
    this.name = name;
    this.center = { x, y };
  }

  showInfo() {
    const str = `
Type: ${this.name}
Center: {${this.center.x}, ${this.center.y}}
Area: ${this.getArea()}`;

    console.log(str);
  }

  getArea() {
    return 1;
  }
}

class Circle extends BaseObj {
  constructor(r, x, y) {
    super('Circle', x, y);
    this.radius = r;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }
}

class Square extends BaseObj {
  constructor(a, x, y) {
    super('Square', x, y);
    this.a = a;
  }

  getArea() {
    return this.a ** 2;
  }

  getP() {
    return this.a * 4;
  }
}

const circle1 = new Circle(5, 0, 0);
const square1 = new Square(10, 10, 10);
const square2 = new Square(5, 10, 10);
const square3 = new Square(12, 10, 10);
const square4 = new Square(51, 10, 10);

square1.showInfo();
square2.showInfo();
square3.showInfo();
square4.showInfo();
