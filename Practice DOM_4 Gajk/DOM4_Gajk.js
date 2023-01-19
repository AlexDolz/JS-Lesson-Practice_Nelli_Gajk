// 1 ) создать параграф
// 2 ) записать в него текст
// 3 ) добавить его в root

const root = document.querySelector('#root');

const paragraph = document.createElement('p');

paragraph.innerText = 'Hello, this is first paragraph';

root.append(paragraph);

// создать массив из текстов ( минимум 3 элемента )
// для каждого элемента создать параграф и записать в него текст
// параграфы необходимо добавить в гoot элемент

const words = ['House', 'Car', 'Work', 'Relax', 'Food'];

words.forEach(word => {
  const pElem = document.createElement('p');
  pElem.innerText = word;
  pElem.classList.add('card');
  root.append(pElem);
  // повесить обработчик события клика на параграфы
  // при клике на параграф в консоль должно выводиться слово
  pElem.addEventListener('click', () => console.log(word));
  // по нажатию на параграф ему должен присваиваться :
  // класс active
  pElem.addEventListener('click', event => {
    // console.log(event.target);
    // pElem.classList.add('active') to ze samoje cto i event.target, tolko s event target pravelnej pisat
    event.target.classList.toggle('active'); // toggle togda class dobavliajetsia jesli jego net i udaliajetsia jesli on uze jest
    // преобразовать процесс таким образом , чтобы по нажатию на
    // p_elem active добавлялся , если его нет и удалялся , если он есть
  });
});
