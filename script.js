console.log('Hello!');

let button = document.querySelector('.button');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
  let value = document.querySelector('.input').value;
  console.log(value.replace(/\n\r?/g, '<br>'));
  result.innerHTML = value.replace(/\n\r?/g, '<br>');
});
