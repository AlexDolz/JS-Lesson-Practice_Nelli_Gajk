// Создайте форму сбора данных работников с тремя полями : Имя , фамилия , Возраст . Поля
// ввода должны включать " текст - подсказку " . Форма должна собирать полученные данные , а
// затем формировать карточки работников с полученной информацией .

const formElem = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards-container');

formElem.addEventListener('submit', event => {
  event.preventDefault();

  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const surnameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const salaryElem = document.createElement('p');
  const photoElem = document.createElement('img');

  const { name, surname, age, rate, days, photo } = event.target;

  card.classList.add('card');

  surnameElem.classList.add('p-elem');
  ageElem.classList.add('p-elem');
  salaryElem.classList.add('p-elem');
  photoElem.classList.add('img-elem');

  nameElem.innerText = `Name: ${name.value}`;
  surnameElem.innerText = `Surname: ${surname.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  salaryElem.innerText = `Salary: ${rate.value * days.value}`;
  photoElem.setAttribute('src', photo.value);
  photoElem.setAttribute('alt', 'photo');

  card.append(nameElem, surnameElem, ageElem, salaryElem, photoElem);
  cardsContainer.append(card);

  name.value = '';
  surname.value = '';
  age.value = '';
  rate.value = '';
  days.value = '';
  photo.value = '';
});

// Добавьте к форме поля ввода для ставки ( rate ) ,
// количества дней ( days ) и добавьте в карточку работника
// его зарплату . Зарплата рассчитывается через умножение
// ставки на количество дней .

// Добавьте к форме поле ввода для ссылки на фото .
// Карточки должны включать отображение фотографии .
