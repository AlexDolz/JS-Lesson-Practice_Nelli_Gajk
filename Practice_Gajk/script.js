// ***************PRACTICE FOR EACH********************
// const array = [12, 4, 32, 45, 43, 23];
// array.forEach(el => console.log(el));

// function forEach(array, callback) { // pod kapotom forEach
//   for (let i = 0; i < list.length; i++) {
//     callback(list[i], i, list);
//   }
// }

// forEach(list, el => console.log(el));

// написать forEach , который выводит только четные числа в консоль

// const array = [12, 4, 32, 45, 43, 23];

// array.forEach(element => {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

// написать forEach который выводит в консоль наибольше значения из массива

// const array = [12, 4, 32, 45, 43, 23];

// let result = 0;
// array.forEach(element => {
//   if (element > result) {
//     result = element;
//   }
// });
// console.log(result);

// Vsio toze samoje s otricatelnimi cislami

// const array = [-12, -4, -32, -45, -43, -23];

// let result = array[0]; // beriom kakojeto cislo s massiva, ctobi ne bil 0 kotorij bolse cem vse ostalnije cisla v otricatelnom massive

// array.forEach(element => {
//   if (element > result) {
//     result = element;
//   }
// });
// console.log(result);

// **************************METOD MAP**************************

// const result = array.map(el => el ** 2);
// console.log(result);

// function map(array, callback) {
//   // pod kapotom map
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const newElem = callback(array[i], i, array);
//     newArray.push(newElem);
//   }
//   return newArray;
// }
// console.log(map(array, el => el ** 2));

// написать метод мар , который возвращает массив , в котором все отрицательные значения
// преобразованы в положительные

// const array = [-12, 4, -32, 45, 43, -23];

// const positiveArray = array.map(el => {
//   if (el < 0) {
//     el *= -1;
//   }
//   return el;
// });
// console.log(positiveArray);

// 1 написать функцию , которая получает число и возвращает положительное число

// const positiveNum = num => {
//   if (num < 0) {
//     num *= -1;
//   }
//   return num;
// };
// // console.log(positiveNum(12));
// // console.log(positiveNum(-12));
// positiveNum(12);
// console.log(num);

// написать мар , который преобразовывает нечетные числа в четные
// ( прибавляет единицу )
// const array = [-12, 4, -32, 45, 43, -23];

// const OddEvenChanger = array.map(num => {
//   if (num % 2 !== 0) {
//     num += 1;
//   }
//   return num;
// });
// console.log(OddEvenChanger);

// const OddEvenChangerTernar = array.map(num => (num % 2 !== 0 ? num : num + 1)); // ternarnij operator

// console.log(OddEvenChanger);

// / переписать данный процесс с использованием тернарного оператора

// const positiveNum = num => (num < 0 ? num * -1 : num);

// console.log(positiveNum(-12));

// ********************METOD FILTER**************************

// const array = [-12, 4, -32, 45, 43, -23];
// console.log(array.filter(el => el > 0));

// сформировать массив , который состоит из слов , не длиннее 6 символов

// let word = ['велосипед', 'самокат', 'ролики', 'телефон', 'стол', 'люстра'];

// console.log(word.filter(el => el.length <= 6));

// *************************************************************

// Dobavit slovo v massiv s ... tri tocki, perecisliajet vse slova cto jest i dobavliajet slovo v posleniuju ocered, kotoroje polucili kak argument
// let words = ['велосипед', 'самокат', 'ролики', 'телефон', 'стол', 'люстра'];

// const add = word => (words = [...words, word]);

// const del = word => (words = words.filter(el => el !== word)); // udaliajem slovo samokat pri pomose filter

// const read = () => words.forEach(el => console.log('Слово: ' + el));

// const search = substr => words.filter(word => word.startsWith(substr)); // startsWith, proveriajet nacalo slovo jesli  sovpadajet bukva vidajot eto slovo

// add('стул'); // argument dobavili stul
// del('люстра');
// del('самокат'); // argumen udalili samokat
// console.log(words);
// read();
// console.log(search('с'));

// ****************************ZADACKI**********************

// используя метод forEach выведите квадраты этих чисел в консоль
// const array = [12, 4, 32, 3, 45, 43];

// array.forEach(el => console.log(el ** 2));

// используя forEach выведите в консоль только четные числа

// array.forEach(el => {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// пользуясь методом мар реализуйте новый массив , в котором все отрицательные значения
// были преобразованы в положительные

// let array = [12, -4, 32, 3, -45, 43];

// let newArray = array.map(el => {
//   if (el < 0) {
//     return (el *= -1); // mozno napisat prosto -el (vmesto el =* -1)
//   } else {
//     return el;
//   }
// });
// console.log(newArray);

// 2 variant, koroce variant ternarnij operator
// let newArrayTernar = array.map(el => (el < 0 ? -el : el));
// console.log(newArrayTernar);

// с использование метода мар реализуйте процесс , который формирует новый массив
// состоящий из булевых значений
// если число в изначальном массиве четное , то в результирующий добавляется true , B
// ином случае false

// const array = [12, 4, 45, 32, 3, 43];

// let newArray = array.map(el => {
//   if (el % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(newArray);

// 2 variant resenija
// const newArray2 = array.map(el => el % 2 === 0);
// console.log(newArray2);

//  используя метод filter сформировать массив , который состоит только их чисел , меньше 10

// const array = [12, 4, 45, 32, 3, 43];

// console.log(array.filter(el => el < 10));

// ***************************REDUCE********************
// const array = [12, 4, 45, 32, 3, 43];

// const result = array.reduce((total, el) => total + el);
// console.log(result);

// (12, 4) => 16
// (16, 45) => 61
// (61, 32) => 93
// (93, 3) => 96
// (96, 43) => 139

// используя метод reduce найдите произведение всех чисел массива

// const array = [12, 4, 45, 32, 3, 43];

// const result = array.reduce((total, el) => total * el);
// console.log(result);

// Используя метод reduce найдите максимальное значение в массиве

// const array = [12, 4, 45, 32, 3, 43];

// const result = array.reduce((total, el) => {
//   if (total > el) {
//     return total;
//   } else {
//     return el;
//   }
// });

// const resultTernar = array.reduce((total, el) => (total > el ? total : el)); // to ze samoje s ternarnim operatorom

// console.log(result);

// доработать процесс reduce , чтобы он выводил сумму четных чисел

// const array = [12, 4, 45, 32, 3, 43];

// const result = array.reduce((total, el) => {
//   if (el % 2 === 0) {
//     // return el;
//     console.log(el);
//   }
//   return el;
// });
// console.log(result); // nedodelanno

// ***************************OBJECTS***************************

// let user = {
//   name: 'Anatolij',
//   lastName: 'Usanov',
//   age: 29,
//   salary: 130000,
// };
// console.log(user.lastName);

// создать объект product со свойствами id , title и price
// увеличить стоимость на 20 процентов
// Добавить свойство description с каким - то описанием
// Вывести объект

// const product = {
//   id: 1,
//   title: 'toy',
//   price: '100',
// };

// product.price *= 1.2; // uvelicili stoimost na 20 %
// product.description = 'useful';
// console.log(product);

// const products = [
//   {
//     id: 1,
//     title: 'велосипед',
//     price: 55000,
//   },
//   {
//     id: 2,
//     title: 'ролики',
//     price: 15000,
//   },
//   {
//     id: 3,
//     title: 'скейт',
//     price: 10000,
//   },
// ];

// console.log(products);

// Используя forEach вывести каждый обьект отдельно

// products.forEach(el => console.log(el));

// вывести при помощи forEach только названия продуктов

// products.forEach(el => console.log(el.title));

// сформировать новый массив , который состоит только из тех товаров , цена на
// которые больше 12000

// const newArray = products.filter(el => el.price > 12000);
// console.log(newArray); // tut napisano ves massiv

// const newArrayMap = products.filter(el => el.price > 12000).map(el => el.title); // dobavili map i polucili massiv gde napisano tolko title no kotorij > 12000
// console.log(newArrayMap);

// найти общую сумму стоимостей товаров
// const result = products.reduce((total, el) => total.price + el.price);
// console.log(result); // tak ne polucitsa c 3 objektami

// const resultTrue = products.reduce((total, el) => total + el.price, 0); // tak pravilno, dobavit 0 i ne pisat v total .price
// console.log(resultTrue);
// ( 0 , obj_1 ) = > 0 + 55000
// ( 55000 , obj_2 ) = > 55000 + 15000
// ( 70000 , obj_3 ) = > 70000 + 10000
// - 80000

// const customers = [
//   {
//     id: 1,
//     name: 'Максим',
//     orders: [10000, 23000, 19000],
//   },
//   {
//     id: 2,
//     name: 'Олег',
//     orders: [12000, 43000, 9000],
//   },
//   {
//     id: 3,
//     name: 'Ольга',
//     orders: [22000, 44000, 6000],
//   },
//   {
//     id: 4,
//     name: 'Семён',
//     orders: [32000, 65000, 11000],
//   },
// ];

// реализомать новый массив , в котором будут поля
// id , name , order_total

// const newArray = customers.map(el => {
//   return {
//     id: el.id,
//     name: el.name,
//     orderTotal: el.orders.reduce((total, el) => total + el),
//   };
// });
// console.log(newArray);

// ****************************CLASSES****************************

// class Panda {
//   constructor(name, age, energy) {
//     this.name = name;
//     this.age = age;
//     this.energy = 100;
//   }

//   eat() {
//     if (this.energy === 100) {
//       console.log('Хватит, я наелся');
//     } else {
//       this.energy += 20;
//     }
//     console.log('nyam-nyam', `energy: ${this.energy}`);
//   }
//   fall() {
//     if (this.energy === 0) {
//       console.log('Пожалуйста, достаточно!');
//     } else {
//       this.energy -= 20;
//       console.log('puff!', `energy: ${this.energy}`);
//     }
//   }
// }

// const karl = new Panda('karl', 18);
// const tom = new Panda('tom', 15);
// const bobik = new Panda('bobik', 20);

// console.log(karl);
// console.log(tom);
// console.log(bobik);

// karl.eat();
// tom.eat();

// karl.fall();
// tom.fall();

// / доработайте метод еаt таким образом , чтобы при каждом вызове добавлялось 20
// процентов энергии . Если энергии уже 100 процентов выведите какое - нибудь сообщение и
// не прибавляйте энергию

// создать класс User cо свойствами пame и age
// и методом sayHi который выводит в консоль фразу " привет "

// class User {
//   static roles = ['root', 'admin', 'manager', 'user'];

//   constructor(name, age, role) {
//     this.name = name;
//     this.age = age;

//     if (User.roles.includes(role)) {
//       this.role = role;
//     } else {
//       this.role = undefined;
//     }
//   }
//   sayHi() {
//     console.log(`Привет ${this.name}`);
//   }
//   changeName(newName) {
//     this.name = newName;
//   }
//   birthDay() {
//     this.age += 1;
//     console.log(`Всегда оставайся молодым ${this.name}`);
//   }
//   changeRole(newRole) {
//     if (User.roles.includes(newRole)) {
//       this.role = newRole;
//     } else {
//       this.role = undefined;
//     }
//   }
// }

// const user1 = new User('Aleksej', 34, 'admin');
// const user2 = new User('Martin', 32, 'manager');

// user1.sayHi();
// user1.changeName('Vitalij');
// console.log(user1);

// user1.birthDay();
// console.log(user1);

// user2.changeRole('student');
// console.log(user2);
// User.roles.push('student');
// user2.changeRole('student');
// console.log(user2);
// console.log(User.roles);
// добавить метод b_day который увеличиввает возраст на единицу
// и выводит поздравления в консоль

// добавить метод изменения роли , который получает в качестве аргумента новую роль
// и изменяет свойство role в случае , если роль указана верно
// если роль неверна , то в свойство role указать undefined
