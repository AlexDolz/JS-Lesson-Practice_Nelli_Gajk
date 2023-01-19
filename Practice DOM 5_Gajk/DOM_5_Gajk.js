const form = document.querySelector('#add-product-form');
const products = document.querySelector('#products');

// создать функцию getCard, которая В качестве вргументов получает title И price

//     И возвращает div с указанными внутри title И price
const getCard = (title, price) => {
  const container = document.createElement('div');
  const titleP = document.createElement('p');
  const priceP = document.createElement('p');
  titleP.innerText = title;
  priceP.innerText = price;
  container.append(titleP, priceP);
  return container;
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const { title, price } = event.target; // zapisali tak ctob nize uze ne propisivat vsio polnosiu event.target.title.value
  const card = getCard(title.value, price.value); // scital value cto mi zapisali
  products.append(card);
});
