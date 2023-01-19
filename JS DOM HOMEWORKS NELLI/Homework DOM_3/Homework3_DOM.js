// ЗАДАЧА 1
// B index.html в тэге body есть два объекта : кнопка ( button ) и контейнер ( div )
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета
// ( текст взять произвольный )

const button = document.querySelector('.btn');
const container = document.querySelector('.container');

// button.addEventListener('click', () => {
//   const text = document.createElement('p');
//   text.innerText = 'Yooobaa!';
//   text.style.color = 'green';
//   container.append(text);
// });

// ЗАДАЧА 2 X
// B index.html в тэге body есть два объекта : -кнопка ( button ) и контейнер ( div ) .
// При нажатии на кнопку в контейнере создаются желтые квадраты 300x300px . K
// контейнеру применить свойство grid .

button.addEventListener('click', () => {
  const square = document.createElement('div');
  square.classList.add('square');
  container.append(square);
});
