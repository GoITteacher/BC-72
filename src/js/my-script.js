function sayHello() {
  console.log('Hello');
}

sayHello();

window.addEventListener('keypress', e => {
  console.log(e.code);
});
