console.log(document);

const mainP = document.querySelector('.main');
console.log(mainP); //

const pList = document.querySelectorAll('p');
console.log(pList); // vozvrasiajet nodelist - no eto ne massiv. nelzia vizvat metod map tut

const mainP2 = document.getElementsByClassName('main')[0];
console.log(mainP2); // starij sposob obratitsia k klassu. tak ne delajem

const productP = document
  .getElementsByClassName('products')[0]
  .getElementsByTagName('p')[0]; // tak ne delajetsia, vozvrasiajet massiv, poetomu pisem [0] esli ih bolse to pisem index drugoj[1].....

console.log(productP);

const productP2 = document.querySelector('.products p'); // to ze samoje, tak delajut vsegda
console.log(productP2);

productP.innerText = 'Products from js'; //dobavili tekst cerez js v productP

productP.addEventListener('click', () => {
  productP.innerText = 'Products from js ON Click';
}); // postavili proslusku pri clicke i zapisali srazu callback funkciju v kotoroj inner text dobavliajet tekst v product tolko pri clicke

const mainP3 = document.querySelector('.main p');
mainP3.innerText = 'Ne takoj uz i vaznij tekst';

const media = document.querySelector('.media .fb a');
media.innerText = 'Facebook';

const li1 = document.querySelector('.menu .point-1');
const li2 = document.querySelector('.menu .point-2');
const li3 = document.querySelector('.menu .point-3');

li1.addEventListener('click', () => {
  li1.innerText = 'point-1';
});
li2.addEventListener('click', () => {
  li2.innerText = 'point-2';
});
li3.addEventListener('click', () => {
  li3.innerText = 'point-3';
});

const mainElem = document.querySelector('.main');
// mainElem.style.color = 'red ';
const randomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

mainElem.addEventListener('click', () => {
  mainElem.style.color = randomColor();
  mainElem.style.backgroundColor = randomColor();
  mainElem.style.padding = '20px';
});

const randomNumber = () => {
  const n = Math.round(Math.random() * 255);
};

const mainElem2 = document.querySelector('.main2');
mainElem2.addEventListener('click', () => {
  const value = mainElem2.innerText; // scitali tekst s mainElem, i zapisali v konstantu
  // mainElem.innerText = 'Bye';
  mainElem2.innerText = +value + 1;
});
