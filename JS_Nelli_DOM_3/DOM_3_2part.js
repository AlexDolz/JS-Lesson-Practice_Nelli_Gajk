const square = document.querySelector('.square');
const container = document.querySelector('.container');

square.addEventListener('click', () => {
  (container.innerText = 'Красный квадрат'),
    (container.style.color = 'yellow'),
    (document.body.style.backgroundColor = 'blue');
});

const btn = document.querySelector('.btn');
const container2 = document.querySelector('#container');

btn.addEventListener('click', () => {
  const text = document.createElement('p');
  text.innerText = 'hello!';
  text.classList.add('text');
  text.style.color = 'red';
  container.append(text);
});
