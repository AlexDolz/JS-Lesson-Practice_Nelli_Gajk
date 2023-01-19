// const rootElem = document.querySelector('.root');

// const card = document.createElement('div');
// const firstNameElem = document.createElement('p');
// const lastNameElem = document.createElement('p');
// const imgElem = document.createElement('img');
// const emailElem = document.createElement('a');
// const idElem = document.createElement('p');
// const ageElem = document.createElement('p');
// const salaryElem = document.createElement('p');
// const emailTextElem = document.createElement('p');
// Mozno dobavit k emailTextELem ne p, a span, i togda eto budet strocnij element

// firstNameElem.innerText = 'First name: Olga';
// lastNameElem.innerText = 'Last name: Petrova';
// emailElem.innerText = 'example@gmail.com';
// idElem.innerText = 'ID: 1';
// ageElem.innerText = 'Age: 18';
// salaryElem.innerText = 'Salary: 1500';
// emailTextElem.innerText = 'Email: ';

// card.classList.add('card');
// emailTextElem.classList.add('email');

// imgElem.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg');
// imgElem.setAttribute('alt', 'photo');
// emailElem.setAttribute('href', 'mailto:example@gmail.com');

// mozno i tak sozdat, to ze samoje kak sverhu
// imgElem.src = 'https://reqres.in/img/faces/12-image.jpg';
// imgElem.alt = 'photo';
// emailElem.href = 'mailto:example@gmail.com';

// card.append(
//   idElem,
//   firstNameElem,
//   lastNameElem,
//   ageElem,
//   salaryElem,
//   emailTextElem,
//   emailElem,
//   imgElem
// );
// rootElem.append(card);

// *********************************2 chapter******************************

const data = [
  {
    id: 1,
    title: 'Велосипед',
    price: 100,
  },
  {
    id: 2,
    title: 'Самокат',
    price: 500,
  },
  {
    id: 3,
    title: 'Скейт',
    price: 200,
  },
  {
    id: 4,
    title: 'Лыжи',
    price: 300,
  },
];

const rootElem = document.querySelector('.root');

// data.forEach(product => {
//   // delajem metod foreach k data, i stolko skolko tam budet n=dannih, vsio sdublirujetsia pod eto vsio cto mi napisali
//   const cardElem = document.createElement('div');
//   const idElem = document.createElement('p');
//   const titleElem = document.createElement('p');
//   const priceElem = document.createElement('p');

//   idElem.innerText = `ID: ${product.id}`; // dobavliajutsia vse raznije ID i massiva
//   titleElem.innerText = `Title: ${product.title}`; // dobavliajutsia vse raznije title i massiva
//   priceElem.innerText = `Price: ${product.price}`; // dobavliajutsia vse raznije price i massiva

//   cardElem.classList.add('card');

//   cardElem.append(idElem, titleElem, priceElem);
//   rootElem.append(cardElem);
// });

// 2 Sposob kak sverhu, Korotkij
data.forEach(({ id, title, price }) => {
  // delajem metod foreach k data, i stolko skolko tam budet n=dannih, vsio sdublirujetsia pod eto vsio cto mi napisali
  const cardElem = document.createElement('div');
  const idElem = document.createElement('p');
  const titleElem = document.createElement('p');
  const priceElem = document.createElement('p');

  // const {id, title, price} = product  liogkij sposob ctob  ne pisat mnogo kak snizu, kak v 1 variante sverhu (destrukturizacija nazivajetsia)
  // const id = product.id
  // const title = product.title
  // const price = product.price

  idElem.innerText = `ID: ${id}`; // dobavliajutsia vse raznije ID i massiva
  titleElem.innerText = `Title: ${title}`; // dobavliajutsia vse raznije title i massiva
  priceElem.innerText = `Price: ${price}`; // dobavliajutsia vse raznije price i massiva

  cardElem.classList.add('card');

  cardElem.append(idElem, titleElem, priceElem);
  rootElem.append(cardElem);
});
