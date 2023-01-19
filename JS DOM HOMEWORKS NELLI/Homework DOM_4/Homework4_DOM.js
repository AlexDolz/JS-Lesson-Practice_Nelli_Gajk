// Создайте форму сбора данных работников с пятью полями : Имя , Фамилия , Email , Ссылка
// на фото  Поля ввода должны включать " текст - подсказку " .
//
// Email должен быть кликабельным .
// Фото должно отображаться .
// Форма должна собирать полученные данные , а затем формировать карточки работников с
// полученной информацией .
// После отправки необходимо очистить инпуты

const formElem = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards-container');

formElem.addEventListener('submit', event => {
  event.preventDefault();

  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const surnameElem = document.createElement('p');
  const emailContainer = document.createElement('div');
  const emailTextElem = document.createElement('span');
  const emailElem = document.createElement('a');
  const photoElem = document.createElement('img');

  const { name, surname, email, photo } = event.target;

  nameElem.innerText = `Name: ${name.value}`;
  surnameElem.innerText = `Surname: ${surname.value}`;
  emailTextElem.innerText = 'Email: ';
  emailElem.innerText = email.value;
  emailElem.setAttribute('href', `mailto:${email.value}`);
  photoElem.setAttribute('src', photo.value);
  photoElem.setAttribute('alt', 'photo');

  card.classList.add('card');
  nameElem.classList.add('name-elem');
  surnameElem.classList.add('surname-elem');
  emailElem.classList.add('email-elem');
  emailTextElem.classList.add('email-elem');
  photoElem.classList.add('photo-elem');

  emailContainer.append(emailTextElem, emailElem);
  card.append(nameElem, surnameElem, emailContainer, photoElem);
  cardsContainer.append(card);

  name.value = '';
  surname.value = '';
  email.value = '';
  photo.value = '';
});
