// Задан массив объектов workers . Выведите на экран карточки со следующей информацией
// по всем работникам : ID , Имя , фамилия , Возраст , Зарплата , фото . Зарплата рассчитывается
// через умножение ставки на количество дней . Карточки должны включать отображение
// фотографии . Примените стили к карточкам : width , padding , border , background - color .

const workers = [
  {
    id: 1,
    firstName: 'Olga',
    lastName: 'Petrova',
    age: 18,
    rate: 100,
    days: 15,
    photo: 'https://reqres.in/img/faces/12-image.jpg',
    progress: 50,
  },
  {
    id: 2,
    firstName: 'Petr',
    lastName: 'Ivanov',
    age: 46,
    rate: 70,
    days: 22,
    photo: 'https://reqres.in/img/faces/4-image.jpg',
    progress: 10,
  },
  {
    id: 3,
    firstName: 'Oleg',
    lastName: 'Orlov',
    age: 32,
    rate: 34,
    days: 10,
    photo: 'https://reqres.in/img/faces/10-image.jpg',
    progress: 75,
  },
  {
    id: 4,
    firstName: 'Irina',
    lastName: 'Medvedeva',
    age: 22,
    rate: 85,
    days: 17,
    photo: 'https://reqres.in/img/faces/2-image.jpg',
    progress: 30,
  },
];

const rootElem = document.querySelector('#root');

workers.forEach(
  ({ id, firstName, lastName, age, rate, days, photo, progress }) => {
    const card = document.createElement('div');
    const idElem = document.createElement('p');
    const firstNameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const salaryElem = document.createElement('p');
    const photoElem = document.createElement('img');
    const progressContainer = document.createElement('div');
    const progressLine = document.createElement('div');
    const progressValue = document.createElement('p');

    idElem.innerText = `ID: ${id}`;
    firstNameElem.innerText = `First name: ${firstName}`;
    lastNameElem.innerText = `Last name: ${lastName}`;
    ageElem.innerText = `Age: ${age}`;
    salaryElem.innerText = `Salary: ${rate * days} `;
    progressValue.innerText = progress + '%';

    photoElem.setAttribute('src', photo);
    photoElem.setAttribute('alt', 'photo');

    card.classList.add('card');
    progressContainer.classList.add('progress-container');
    progressLine.classList.add('progress-line');
    progressValue.classList.add('progress-value');

    progressLine.style.width = progress + '%';

    progressContainer.append(progressLine, progressValue);

    card.append(
      idElem,
      firstNameElem,
      lastNameElem,
      ageElem,
      salaryElem,
      photoElem,
      progressContainer
    );
    rootElem.append(card);
  }
);
