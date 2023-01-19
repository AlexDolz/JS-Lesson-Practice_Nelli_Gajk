const root = document.querySelector('#root');
console.log(root);

const divElem = document.createElement('div');
// divElem.innerText = 'Привет';
// console.log(divElem);

const imgElem = document.createElement('img');
const textElem = document.createElement('p');
// imgElem.setAttribute('src', 'link...') // mozno tak, no esli eto casto ispolzujemij atribut to pisem kak snizu
imgElem.src =
  'https://upload.wikimedia.org/wikipedia/commons/e/ea/Alexandr_Ivanov_001.jpg';
textElem.innerText = 'Описание пейзажа';
divElem.append(imgElem, textElem);
divElem.classList.add('card');
root.append(divElem);

//  Добавить div и 4 параграфа внутри него с каким - либо текстом
// созданный div должен быть помещен в #root

const divElem2 = document.createElement('div');
const textElem2 = document.createElement('p');
const textElem3 = document.createElement('p');
const textElem4 = document.createElement('p');
const textElem5 = document.createElement('p');

textElem2.innerText = 'First p';
textElem3.innerText = 'Second p';
textElem4.innerText = 'Third p';
textElem5.innerText = 'Fourth p';

divElem2.append(textElem2, textElem3, textElem4, textElem5);
root.append(divElem2);

// VTOROJ VARIANT KAK ETO SDELAT

const container = document.createElement('div');
const texts = ['First p', 'Second p', 'Third p', 'Fourth p'];

texts.forEach(text => {
  const pElem = document.createElement('p');
  pElem.innerText = text;
  container.append(pElem);
});
root.append(container);

// TRETIJ VARIANT KAK ETO SDELAT, Pohoze s react
const pList = texts.map(text => {
  const pElem = document.createElement('p');
  pElem.innerText = text;
  return pElem;
});
container.append(...pList); // ... eto spread operator
root.append(container);
