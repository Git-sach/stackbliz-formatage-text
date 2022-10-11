console.log('Hello!');

let button = document.querySelector('.button');

button.addEventListener('click', () => {
  console.log(document.querySelector('.input').value);
});
