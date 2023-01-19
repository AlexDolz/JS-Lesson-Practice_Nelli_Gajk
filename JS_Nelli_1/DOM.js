// DOM - Document Object Model

const header = document.querySelector('.header'); // isiu element v html dokumente
const paragraph = document.querySelector('#par');
// const paragraph = document.getElementById('#par'); kogda obrasiajemsia tolko k #ID
const container = document.querySelector('.container');

console.log(header);
console.log(paragraph);

header.style.color = 'red'; // meniaju color
paragraph.style.backgroundColor = 'green'; // meniaju backcolor

header.classList.add('class-added'); // dobavliaju class
header.classList.remove('class-deleted'); // udaliaju class

const text = document.createElement('p'); //  sozdaju novij element, v kovickah nazvanije tega
container.append(text); // dobavliaju 'p' vnutr container
// append pohoze na push. dobavliajet cto to cto v skobkah

text.innerText = 'Some text'; // dobavliajem tekst v 'p'

const divElemBig = document.createElement('div');
divElemBig.innerText = 'Text inside new div';

const divElemSmall = document.createElement('div');
divElemBig.append(divElemSmall);

container.append(text, divElemBig); // dobavliaju 'p' vnutr container, imeet znacenije v kakom poriadke append, budet otobrozatsia kak napisano po oceredi
