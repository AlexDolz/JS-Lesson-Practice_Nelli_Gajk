const formElem = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards-container');

// Esli button vnutri formi togda ne nuzno dobavliat addeventlistener na click
formElem.addEventListener('submit', event => {
  //esli callback funkcija napisana kak strelocnaja to slovo this ne budet rabotat, esli budet napisano kak function, to this budet rabotat vmesto event.target
  // vsio eto cto nize nacinajet dealtsia tolko pri sobitije kogda ja otpravliu formu
  event.preventDefault(); // zapresiajet obnovliat stranicu posle otpravki, po umolcianiju budet obnovliatsia avtomaticesskij
  // console.log(event); // sobitije
  // console.log(event.target.name); // element v kotorom proishodi tsobitije
  // console.log(event.target.age); // konkretnij input po atributu age
  // console.log(event.target.city.value); // dannije iz inputa (value)
  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const cityElem = document.createElement('p');

  const { name, age, city } = event.target; // (this.) esli pisem tak, to uze nize mozno ne pisat event.target.name.value, a tolko pisem name.value

  // Sverhu strocka zamenijaet eti 3 strocki
  // const name = event.target.name
  // const age = event.target.age
  // const city = event.target.city

  nameElem.innerText = `Name: ${name.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  cityElem.innerText = `City: ${city.value}`;

  card.classList.add('card');

  card.append(nameElem, ageElem, cityElem);

  cardsContainer.append(card);
  //  Cto bi polia ocisialis posle togo kak nazmiom knopku submit. Nuzno stavit ih v samom konce. Tak kak pomeniali sverhu i sdelali distrukturizaciju to tut toze mozem obrasiatsia srazu name.value age.value city.value
  name.value = '';
  age.value = '';
  city.value = '';
});
