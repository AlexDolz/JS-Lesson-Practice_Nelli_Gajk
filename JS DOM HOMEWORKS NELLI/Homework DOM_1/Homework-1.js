// в файле html в тэге bоdу есть один элемент div с классом root . (KOD V HTML)

const rootElem = document.querySelector('.root');

// Используя JS ( DOM ) , создать карточку товара ( div ) , которая должна включать в себя
// следующие данные : Артикул , наименование товара , цена . Данные взять произвольные .
const card = document.createElement('div');
const article = document.createElement('p');
const title = document.createElement('p');
const price = document.createElement('p');

card.append(article, title, price);
rootElem.append(card);

article.innerText = 'Article: 1';
title.innerText = 'Title: iPhone 13 Pro';
price.innerText = 'Price: 1300$';

// Применить стили к карточке : width , background - color , border , border - radius ,
// padding , margin . ( KOD V CSS)

card.classList.add('card');
