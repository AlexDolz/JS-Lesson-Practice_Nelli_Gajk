const data = [
  {
    id: 1,
    name: 'Анатолий',
    email: 'anatoliy@mail.ru',
    avatar: './media/face.jpeg',
  },
  {
    id: 2,
    name: 'Максим',
    email: 'maxim@mail.ru',
    avatar: './media/face.jpeg',
  },
  {
    id: 3,
    name: 'Антон',
    email: 'anton@mail.ru',
    avatar: './media/face.jpeg',
  },
  {
    id: 4,
    name: 'Олег',
    email: 'oleg@mail.ru',
    avatar: './media/face.jpeg',
  },
];

const root = document.querySelector('#root');

// Vsio eto sdelali cerez funkciju, S Nelli delali cerez foreach vsio
function getCard(name, email, avatar) {
  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  //  добавить почту ( тег а ) в котором внутри будет указана почта
  // и в качестве атрибута href
  const emailElem = document.createElement('a');
  // Добавить картинку с аватаркой и вставить ее перед именем и email
  const avatarElem = document.createElement('img');

  // 1 ) добавить класс саrd для элемента card
  card.classList.add('card');

  avatarElem.setAttribute('src', avatar);
  avatarElem.setAttribute('alt', 'photo');
  emailElem.innerText = email;
  emailElem.setAttribute('href', 'mailto: email');
  nameElem.innerText = name;
  card.append(avatarElem, nameElem, emailElem);
  return card;
}

data.forEach(user => {
  const card = getCard(user.name, user.email, user.avatar);
  root.append(card);
});
