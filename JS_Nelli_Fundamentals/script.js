// let a = Math.pow(10, 3); // vozvodim v kvadrat, 10 v 3 stepeni

// console.log(a);

// let b = Math.abs(5); // abs vozvrosiajet polozitelnoje cislo
// let c = Math.abs(-5);

// console.log(b);
// console.log(c);

// let d = Math.ceil(4.33); // okrugliajet do potolka do 5
// let e = Math.floor(4.33); // okrugliajet vniz do pola do 4
// let f = Math.round(4.33); // po pravilam matematiki do 4

// console.log(d, e, f);

// let min = Math.min(5, 34, -100, 56, 777); // math.min vozvrasiajet minimalnoje cislo -100
// let max = Math.max(5, 34, -100, 56, 777); // math.max vozvrasiajet maximalnoje cislo 777

// console.log(min, max);

// let randomNum = Math.random(); // vozvrasiajet vsegda randomnoje cislo
// console.log(randomNum);

// let step1 = Math.random(); //  vivodit slucajnoje cislo ot 0 do 1
// let step2 = step1 * 10; // randomnoje cislo umnozajem na 10
// console.log(step1, step2);
// let step3 = Math.round(step2); // okrugliajet cislo iz step2
// console.log(step3);

// let randomNum2 = Math.round(Math.random() * 10); // budet vidavat cisla ot 0 do 10
// let randomNum3 = Math.round(Math.random() * 10 + 1); // budet vidavat cisla ot 1 do 11
// let randomNum4 = Math.round(Math.random() * 10 + 2); // budet vidavat cisla ot 2 do 12
// let randomNum5 = Math.round(Math.random() * 9 + 1); // budet vidavat cisla ot 1 do 10
// console.log(randomNum2, randomNum5);

// let randomNum6 = Math.round(Math.random() * 10 + 15); // 10 => 15 - 25 nuzno umnozat na stolko kakoj diapozon mezdu ciframi
// console.log(randomNum6);

// ***************************************************

// // SVOJSTVA
// let string = 'Aleksej Dolznikov';

// console.log(string[0]); // vidajot bukvu pervogo elementa A
// console.log(string.length); // scitajet dlinnu stroki

// let array = [1, 2, 3, 4, 5, 6, 'hello']; // 7 elementov
// console.log(array.length);

// let string2 = 'We will practice today for a long time';
// let index = string2.length - 1; // indeks poslednego elementa
// console.log(string2[index]); // mozno tak, mozno i kak nize, no tak pravelnej
// console.log(string2.length);
// console.log(string2[37]); // tak nado budet samomu perepisivat cislo v kvadratnih skobkah, a sverhu budet vsio dalt avtomaticesski

// // METODI

// let str = 'Hello, world';
// console.log(str.toLowerCase()); // privodit vse simvoli k nuznemu registru
// console.log(str.toUpperCase()); // privodit vse simvoli k verhnemu registru

// str.length; // SVOJSTVO
// str.toLowerCase(); //METOD, v konce vsegda skobki

// let str1 = '      Hello        ';
// console.log(str1.trim()); // trim obrezajert lisnije probeli po bokam, ostajotsia tolko text

// ****************************************************************

// const user = '    Ivan Ivanov    ';
// console.log(user.trim());

// const randomNum = +Math.random().toFixed(1); // toficed(1) ostavliajet posle tocki odno cislo, 2 2 cisla i tak dalee...
// console.log(randomNum);
// console.log(typeof randomNum); // s pliusikom pered virazenijem budet vivodit vsegda number, a bez vivodit vsegda string

// const text = 'I learn Javascript';
// const result = `First ${text[0]},\nlast ${text[text.length - 1]}`;
// console.log(result);

// *****************************ALERT PROMT************************************

// alert('Hello'); // pocti nikto ne polzujetsia

// let firstName = prompt('What is your first name?'); // pocti nikto ne polzujetsia, tak kak nelzia stilizovat
// const lastName = prompt('What is your last Name?');
// const age = prompt('What is your age');

// if (age < 18) {
//   console.log(`Hi, ${firstName} ${lastName}. Your age is ${age}`);
// } else if (age > 18) {
//   console.log(`Hello, ${firstName} ${lastName}`);
// } else {
//   console.log(`Dear, ${firstName} ${lastName}. Your age is ${age}`);
// }

// let randomNumber = +Math.random().toFixed(1);
// console.log(randomNumber);
// if (randomNumber > 0.5) {
//   console.log('Victory');
// } else if (randomNumber < 0.5) {
//   console.log('Defeat');
// } else {
//   console.log('Draw');
// }

// *****************FUNCTIONS********************************

//  Funkcija - eto vsegda kakoeto dejstvije

// Objavlenije Funkciji (Function declaration)

// function sum() {
//   // Telo funkciji
//   // let a = 4+4
//   // return a // return dolzen bit 1, posle return uze nicego ne rabotajet
//   return 3 + 4;
// }
// function sum2(num1, num2 = 3) {
//   // mozno postavit cislo num2 3 po umolcianiju
//   let a = num1 + num2;
//   return a;
// }

// // sum(); // vizivajem funckiju
// console.log(sum2(1, 2));
// console.log(sum2(3, 8));
// console.log(sum2(5, 25));

// function getGreeting(firstName) {
//   return `Hello, ${firstName}`;
// }

// console.log(getGreeting('Aleksej'));

// function getResult(num1, num2, num3 = 1) {
//   return num1 * num2 * num3;
// }
// console.log(getResult(2, 3));

// function getString(firstName = 'Elena', age = 18) {
//   return `Hello, ${firstName}. Your age is ${age}.`;
// }
// console.log(getString());
// console.log(getString('Aleksej', 34));

// function getResult(num1, num2) {
//   // return Math.max(num1, num2) / Math.min(num1, num2); mozno i tak resit, mozno kak nize
//   if (num1 > num2) {
//     return num1 / num2;
//   } else {
//     return num2 / num1;
//   }
// }
// console.log(getResult(1, 4));
// console.log(getResult(4, 2));

// Function declaration

// function greetingDeclaration(name, lastName) {
//   // declaration mozno vizvat funkciju i sverhu, ne obiazatelno snizu posle funkciji
//   return `Hello ${name} ${lastName}!`;
// }

// console.log(greetingDeclaration('Olga', 'Petrova'));

// // Funkcionalnije virazenije (function expression)

// let greetingExpression = function getHello(name, lastName) {
//   return `Hello ${name} ${lastName}!`;
// };

// console.log(greetingExpression('Olga', 'Petrova'));

// Strelocnije funkciji (arrow function)

// let greetingArrow = (name, lastName) => {
//   return `Hello ${name} ${lastName}!`;
// };
// let greetingArrow2 = (name, lastName) => `Hello ${name} ${lastName}!`;
// ESli kod tolko 1 stroka, togda mozno izbavitsia ot slova retun i ubrat figurnije skobki

// console.log(greetingArrow('Olga', 'Petrova'));

// Declaration function
// function GetLength(string) {
//   return string.length;
// }
// console.log(GetLength('Aleksej'));

// // Function expression
// let stringLength = function (string) {
//   return string.length;
// };
// console.log(stringLength('Aleksej'));

// // Arrow function
// let stringLengthArrow = string => string.length;
// console.log(stringLengthArrow('Aleksej'));

// function getExp(num1, num2 = 2) {
//   return num1 ** num2; // return Math.pow(num1, num2) vtoroj sposob
// }

// console.log(getExp(2, 3));
// console.log(getExp(2));

// let getExp1 = function (num1, num2 = 2) {
//   return num1 ** num2;
// };

// console.log(getExp1(2, 3));
// console.log(getExp1(2));

// let getExp2 = (num1, num2 = 2) => num1 ** num2;

// console.log(getExp2(2, 3));
// console.log(getExp2(2));

// function getMaxNum(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(getMaxNum(4, 5));

// function getMaxNum2(num1, num2) {
//   return Math.max(num1, num2);
// }
// console.log(getMaxNum2(4, 5));

// let maxNum = (num1, num2) => Math.max(num1, num2);

// console.log(maxNum(4, 5));

// function sortNums(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     if (num2 > num3) {
//       console.log(num1, num2, num3);
//     } else {
//       console.log(num1, num3, num2);
//     }
//   } else if (num2 > num1 && num2 > num3) {
//     if (num1 > num3) {
//       console.log(num2, num1, num3);
//     } else {
//       console.log(num2, num3, num1);
//     }
//   } else {
//     if (num1 > num2) {
//       console.log(num3, num1, num2);
//     } else {
//       console.log(num3, num2, num1);
//     }
//   }
// }

// sortNums(3, 8, 2); // 8,3,2
// sortNums(-3, 88, 12); // 88,12,-3

// let sortNums1 = (num1, num2, num3) => {
//   if (num1 > num2 && num1 > num3) {
//     if (num2 > num3) {
//       console.log(num1, num2, num3);
//     } else {
//       console.log(num1, num3, num2);
//     }
//   } else if (num2 > num1 && num2 > num3) {
//     if (num1 > num3) {
//       console.log(num2, num1, num3);
//     } else {
//       console.log(num2, num3, num1);
//     }
//   } else {
//     if (num1 > num2) {
//       console.log(num3, num1, num2);
//     } else {
//       console.log(num3, num2, num1);
//     }
//   }
// };

// sortNums(3, 8, 2); // 8,3,2
// sortNums(-3, 88, 12); // 88,12,-3

// let sortNums2 = (num1, num2, num3) => {
//   Math.max(num1, num2, num3);
// };

// console.log(sortNums2(3, 8, 2));

// ***********************HOMEWORK********************************

// DECLARATION FUNCTION
// function getMessage(name) {
//   return `Dear ${name}, welcome`;
// }
// console.log(getMessage('Aleksej'));

// // ARROW FUNCTION
// let getMessage2 = name => `Dear ${name}, welcome`;
// console.log(getMessage2('Aleksej'));

// // Напишите функцию , которая принимает в качестве аргументов два значения : имя и
// возраст . Если переданный возраст меньше 18 , то функция возвращает сообщение в
// формате : Dear ИМЯ , you are younger than 18. Если возраст больше или равен 18 , то
// функция возвращает сообщение в формате : Dear ИМЯ , you are adult .
// // Запишите функцию в двух форматах ( function declaration и arrow function ) .
// DECLARATION FUNCTION
// function getMessage3(name, age) {
//   if (age < 18) {
//     return `Dear ${name}, you are younger than 18`;
//   } else if (age >= 18) {
//     return `Dear ${name}, you are adult.`;
//   }
// }
// console.log(getMessage3('Aleksej', 17));
// console.log(getMessage3('Mark', 19));

// //  ARROW FUNCTION

// let getMessageArrow = (name, age) => {
//   if (age < 18) {
//     return `Dear ${name}, you are younger than 18`;
//   } else if (age >= 18) {
//     return `Dear ${name}, you are adult.`;
//   }
// };
// console.log(getMessageArrow('Aleksej', 17));
// console.log(getMessageArrow('Mark', 19));

// // ARROW FUNCTION Ternarnij operator

// let getMessageArrowTernar = (name, age) =>
//   age < 18
//     ? `Dear ${name}, you are younger than 18`
//     : `Dear ${name}, you are adult.`;

// console.log(getMessageArrowTernar('Aleksej', 17));
// console.log(getMessageArrowTernar('Mark', 19));

// // 3. Напишите функцию , которая принимает два числовых аргумента и возвращает
// результат их умножения . Значение второго аргумента должно быть указано по умолчанию
// 2. Запишите функцию в двух форматах ( function declaration и arrow function ) .

// // DECLARATION FUNCTION
// function getMulti(num1, num2 = 2) {
//   return num1 * num2;
// }
// console.log(getMulti(4));

// // ARROW FUNCTION
// let multiply = (num1, num2 = 2) => num1 * num2;
// console.log(multiply(4));

// // Напишите функцию , которая принимает два аргумента с числовым значением и
// возвращает меньшее значение . Выведите результат в консоль . Предложите два варианта
// решения . Запишите функцию в двух форматах ( function declaration и arrow function ) .

// // DECLARATION
// function getMinNum(num1, num2) {
//   return Math.min(num1, num2);
// }
// console.log(getMinNum(5, 6));

// // ARROW FUNCTION

// let minNum = (num1, num2) => Math.min(num1, num2);
// console.log(minNum(5, 6));

// ***********************CIKLI*************************

// Напишите цикл for , который выводить в консоль числа от 1 до 10
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for(virazenije 1; virazenije 2; virazenije 3)

// virazenije 1 = nacalnoje znacenije scotcika
// virazenije 2 = uslovije povtorenije cikla
// virazenije 3 = izmenenije sciotcika

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// i++ tolko kogda izmeniajem na 1 edinicu, esli na 2 to pisem i += 2

// Напишите цикл for , который выводить в консоль числа от 15 до 65 с шагом 5

// for (let i = 15; i <= 65; i += 5) {
//   console.log(i);
// }

// Напишите цикл for , который выводить в консоль числа от 65 до 15 с шагом 5

// for (let i = 65; i >= 15; i -= 5) {
//   console.log(i);
// }

// // В программе заданы две переменные п и т с числовым значением каждая . Число п
// больше числа м . Напишите цикл , который выводит в консоль все четные числа от м до п .

// function getNums(n, m) {
//   for (let i = m; i <= n; i++) {
//     if (i % 2 === 0) {
// esli ostatok ot delenije raven 0, to eto ciotnoje cislo poliubomu, 2%2 = 0 4%2 =0 i tak dalee....
//       console.log(i);
//     }
//     // console.log(i); // vivedit vse cisla
//   }
// }
// getNums(60, 40);

// const getNumsArrow = (n, m) => {
//   for (let i = m; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// };
// getNumsArrow(40, 30);

// в программе заданы две переменные n и m с числовым значением каждая . Напишите
// цикл , который выводит в консоль числа от большего числа до меньшего .

// const getNums = (n, m) => {
//   if (n > m) {
//     for (let i = n; i >= m; i--) {
//       // cikl dvizetsia do teh por poka i >= m
//       console.log(i);
//     }
//   } else if (m > n) {
//     for (let i = m; i >= n; i--) {
//       console.log(i);
//     }
//   } else {
//     console.log('The numbers are equal');
//   }
// };

// getNums(7, 19);
// getNums(70, 55);
// getNums(70, 70);

// 2 variant resenija

// const getNums = (n, m) => {
//   if (n === m) {
//     console.log('The numbers are equal');
//     return;
//   }
//   for (let i = Math.max(n, m); i >= Math.min(n, m); i--) {
//     console.log(i);
//   }
// };

// getNums(7, 19);
// getNums(70, 55);
// getNums(70, 70);

// Напишите программу , которая с помощью цикла считает сумму чисел от 1 до 10 и
// выводит в консоль .

// const getSum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i; // 1, 3, ....
//   }
//   return sum;
// };

// console.log(getSum());

// const getMult = () => {
//   let result = 1;
//   for (let i = 1; i <= 10; i++) {
//     result *= i; // tut vsio takze tolko s umnozenijem
//   }
//   return result;
// };
// console.log(getMult());

// Напишите программу , которая с помощью цикла считает сумму четных чисел от 1 до 10
// и выводит в консоль .

// const sumEven = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sumEven());

// ***************************HOMEWORKS*************************

// Напишите цикл fог , который выводит числа в консоль от 100 до 130 .

// for (let i = 100; i <= 130; i++) {
//   console.log(i);
// }

// Напишите цикл fог , который выводит числа в консоль от 196 до 110 с шагом 3 .

// for (let i = 196; i >= 110; i -= 3) {
//   console.log(i);
// }

// Напишите цикл for , который выводит в консоль нечетные числа от 45 до 35 .

// for (let i = 45; i >= 35; i--) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// в программе заданы две переменные n и м с числовым значением каждая . Напишите цикл ,
// который считает сумму четных чисел и нечетных чисел от n до м . Суммы выведите в
// консоль ( в начале сумму четных чисел , а затем сумму нечетных ) .

// const sumNum = (num1, num2) => {
//   let sumEven = 0;
//   let sumOdd = 0;
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 === 0) {
//       sumEven += i;
//     } else {
//       sumOdd += i;
//     }
//   }
//   console.log(sumEven);
//   console.log(sumOdd);
// };

// sumNum(6, 10);

// const sumNumOdd = (num1, num2) => {
//   let sum = 0;
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sumNumOdd(2, 6));

// в программе задана переменная п . Напишите программу , которая с помощью цикла
// считает сумму чисел от 1 до п и выводит в консоль .

// const sumNum = num1 => {
//   let sum = 0;
//   for (let i = 1; i <= num1; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sumNum(5));

// ************************************************************

// Создайте функцию , которая принимает в качестве аргумента строку и выводит каждый
// символ этой строки в консоль .

// const getSymbol = string => {
//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
//   }
// };

// getSymbol('Hello');

// i < str.length === to ze samoje i <= str.length - 1

// *************************MASSIV ARRAY*********************

// Найти длину последнего элемента массива . Заранее неизвестна длина массива
// let str = 'Hello, world';
// let array = [
//   'hello',
//   5,
//   true,
//   false,
//   23,
//   'bye',
//   76,
//   true,
//   undefined,
//   null,
//   str,
// ];
// // console.log(array[0][1]);

// let lastElem = array[array.length - 1];
// console.log(array[array.length - 1]); // to ze samoje array[10], no mi tipo ne znajem  kakaja dlinna massiva
// console.log(array[array.length - 1].length); // dlinna str
// console.log(array[array.length - 1][array.length]); // poslednij element poslednego elementa v massive
// console.log(lastElem[lastElem.length - 1]); // to ze samoje tolko sdelali peremennuju

// let text = 'good morning';
// console.log(text[0]); // g

// let arr = [1, 2, 3, 4, 5, 'hello'];
// console.log(arr[0]); // 1
// console.log(arr.length - 1); // poslednij element massiva
// console.log(arr[arr.length - 1]); // hello

// **********************ZADACKI****************************

// kak najti samij bolsoj element v massive, resenije snizu
// const getLongetString = array => {
//   let result = '';
//   if (array.length === 0) {
//     return null;
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > result.length) {
//       result = array[i];
//     }
//   }

//   return result;
// };
// console.log(getLongetString([]));
// console.log(getLongetString(['one', 'two', '12345', 'three'])); // nahodit samij bolsoj element v massive

// const getLongetString2 = array => { // to ze samoje cto sverhu, tolko naznacili array[0] i nacinajem uze ne s 0 a s 1 for
//   let result = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i].length > result.length) {
//       result = array[i];
//     }
//   }

//   return result;
// };

// ************************METHODS***********************

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.unshift(0); // dobavliajet element v nacalo massiva
// arr.push('Hello'); // dobavliajet element v konec massiva

// arr.pop(); // izvlekajet element s konca massiva
// arr.shift(); // izvlekajet element iz nacala massiva
// console.log(arr);

// // napisat cikl for, kotorij sozdajot massiv iz cisel ot 1 do 100

// let array = [];
// for (let i = 1; i <= 100; i++) {
//   array.push(i);
// }
// console.log(array);

// ***************************ZADACKI*************************

// Напишите функцию , которая принимает два числовых аргумента а и b ( a > b ) , и выводит
// в консоль числа от а до ь кратные 3 .
// Пример 10 , 3 = > 9 , 6 , 3

// const getNums = (a, b) => {
//   for (let i = a; i >= b; i--) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
// };

// getNums(10, 1);

// Напишите функцию , которая суммирует числа от 0 до 100 кратные 3 или 5. Выведите
// сумму в консоль .
// const getSum = () => {
//   let sum = 0;
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };

// console.log(getSum()); // 2418

// Напишите функцию , формирующую массив из чисел от 0 до 50 кратных 5 .
// = > [ 5 , 10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50 ]

// const getArray = () => {
//   let result = [];
//   for (let i = 0; i <= 50; i++) {
//     if (i % 5 === 0 && i !== 0) {
//       result.push(i);
//     }
//   }

//   return result;
// };

// console.log(getArray());

// Вариант 2
// let isDivided = (a, b) => {
//   let arr = [];
//   let index = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 5 == 0 && i !== 0) {
//       arr[index] = i;
//       index++;
//     }
//   }
//   return arr;
// };
// console.log(isDivided(0, 50));

// Напишите функцию , формирующую массив из чисел от а до b ( b . > a ) кратных 2 .

// const getArray = (a, b) => {
//   let array = [];
//   for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// };
// console.log(getArray(5, 30));

// Write a function that reverses a string . The input string is given as an array of characters s .
// You must do this by modifying the input array in - place with o ( 1 ) extra memory .

//  1 variant
// const reverseArray = array => array.reverse();

// console.log(reverseArray(['H', 'E', 'L', 'L', 'O']));

// 2 variant

// const reverseStr = arr => {
//   let reverseArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// };

// console.log(reverseStr(['H', 'E', 'L', 'L', 'O']));

// let a = [1, 40, 53, 3, 6, 15];
// console.log(a.sort()); // sortirujet ne ot mensego k bolsemu, a po pervomu simvolu

// *********************CALLBACK*****************************

// CALL BACK - eto funkcija peredannaja v druguju funkciju v kacestve argumenta
// FUnkcija vissego poriadka - funkcija vnutr kotoroj peredanna drugaja funkcija (callback)

// const multThree = () => {
//   return 3 * 2;
// };

// const multFour = () => {
//   return 4 * 2;
// };

// const multFive = () => {
//   return 5 * 2;
// };

// const multNumber = num => {
//   return num * 2;
// };

// multNumber(6);
// multNumber(7);
// multNumber(8);

// let nums = [1, 2, 3, 4, 5];

// const divideNums = arr => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] / 2);
//   }
//   return newArray;
// };

// const multNums = arr => {
//   let newArray2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray2.push(arr[i] * 2);
//   }
//   return newArray2;
// };

// console.log(divideNums(nums)); // [0.5, 1, 1.5, 2, 2.5]
// console.log(multNums(nums)); // [2, 4, 6, 8, 10]

// const changeNums = (arr, callback) => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(callback(arr[i])); // peredajom instrukciju kotoraja snizu, i poluciajetsia funkcija v funkciji
//   }
//   return newArray;
// };

// const divide = num => num / 2;
// const mult = num => num * 2;
// const plus = num => num + 2;

// console.log(changeNums(nums, divide));
// console.log(changeNums(nums, mult));
// console.log(changeNums(nums, plus));

// **************************METOD FOREACH***************
// METOD FOR EACH NICEGO NE VOZVRASIAJET
// Vipolniajet peredannuju funkciju odin raz dlia kazdogo elementa massiva.

// let age = [40, 45, 53, 23, 12, 7];

// for (let i = 0; i < age.length; i++) {
//   if (age[i] >= 18) {
//     console.log(age[i]);
//   }
// }

// Takoj ze primer s metodom FOR EACH

// age.forEach(elem => {
//   if (elem >= 18) {
//     console.log(elem);
//   }
// }); // age.forEach(el => {})  foreach rabotajet tolko s massivom

// age.forEach(el => console.log(el * 2)); // primer

// let ageArr = [];
// age.forEach(el => ageArr.push(el / 2)); // zakinuli massiv v novij massiv s delenijem na 2

// console.log(age);
// console.log(ageArr);

// ***************************HOMEWORKS***********************

// Дан массив
// let array = [200, 45, 65, 670, 352, 32, 1, 7];
// Сформируйте новый массив с числами меньше 100. Предложите два способа решения ( цикл for и метод .
// forEach ) .

// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] <= 100) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

// let newArray2 = [];
// array.forEach(elem => {
//   if (elem <= 100) {
//     newArray2.push(elem);
//   }
// });
// console.log(newArray2);

// Сформируйте новый массив с числами , которые кратны 2. Предложите два способа решения ( цикл for и метод .
// forEach ) .

// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

// let newArray2 = [];
// array.forEach(elem => {
//   if (elem % 2 === 0) {
//     newArray2.push(elem);
//   }
// });

// console.log(newArray2);

// Сформируйте новый массив с числами , которые заканчиваются на 5. Предложите два способа решения ( цикл for
// и метод . forEach ) .

// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 10 === 5) {
//     newArray.push(array[i]);
//   }
// }
// console.log(newArray);

// let newArray2 = [];
// array.forEach(elem => {
//   if (elem % 10 === 5) {
//     newArray2.push(elem);
//   }
// });

// console.log(newArray2);

// Сформируйте массив , в котором числа больше 100 заменены на строку ' > 100 ' , а числа меньше ста - на
// ' < 100 ' . Предложите два способа решения ( цикл for и метод . forEach ) .

// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 100) {
//     newArray.push('>100');
//   } else if (array[i] < 100) {
//     newArray.push('<100');
//   }
// }
// console.log(newArray);

// let newArray2 = [];
// array.forEach(elem => {
//   if (elem > 100) {
//     newArray2.push('>100');
//   } else if (elem < 100) {
//     newArray2.push('<100');
//   }
// });

// console.log(newArray2);

// *********************METOD FILTER*******************

// .filter ( ) возращает новый массив со всеми элементами , прошедшими проверку, esli jest kakajae ta proverka, casto ispolzujem filter. dlinna novogo massiva mozet bit mense dlinne originalnogo masssiva

// Сформируйте новый массив с числами меньше 100. Предложите два способа решения ( цикл
// METOD Filter) .

// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// let newArray = array.filter(el => {
//   return el < 100;
// });
// let newArray2 = array.filter(el => el < 100); // mozno i tak, potomu cto odna strocka, ne nado return i figurnih skobok

// console.log(newArray);

// Сформируйте новый массив с именами длиннее 5 букв
// let users = ['Ivan', 'Victoria', 'Olga', 'Elena', 'Anton'];

// let newUsers = users.filter(el => el.length >= 5);

// console.log(newUsers);

// Сформируйте новый массив с числами , которые кратны 2. Предложите  (Metod filter)

// let array = [200, 45, 65, 670, 352, 32, 1, 7];

// let newArray = array.filter(elem => elem % 2 === 0);

// console.log(newArray);

// Дан массив из строк . Вывести только слова , длиннее 10 символов

// let array = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

// let newArray = array.filter(elem => elem.length >= 10);
// console.log(newArray);

// ****************************METOD MAP*************************

// .map ( ) возвращает новый массив с результатом вызова указанной функции для каждого
// элемента ( изменяет каждый элемент ( T ) dlinna massiva ostajotsia vsegda preznej, tolko vidoizmenionnoj naprimer * ili /

// Вернуть новый массив с каждым элементом , умноженным на 2
// let array = [200, 45, 65, 670, 352, 32, 1, 7];

// let newArray = array.map(elem => elem * 2);
// console.log(newArray);

// Сформировать новый массив с совершеннолетними

// let age = [23, 15, 18, 56, 43, 28];

// let ageAdult = age.filter(elem => elem >= 18);

// console.log(age);
// console.log(ageAdult);

// Сформировать новый массив , где возраст всех совершеннолетних заменен на 100

// let ageChanged = age.map(el => {
//   if (el >= 18) {
//     return (el = 100);
//   } else {
//     return el; // togda verniot prosto element (15)
//   }
// });

// console.log(ageChanged); // 100, undefined, 100, 100, 100, 100

// let ageChanged2 = ageAdult.map(el => (el = 100));

// console.log(ageChanged2); // uze primeniajem map na otfiltrovanom massive ageAdult.

// mozno vsio eto sdelat v odnu strocku

// let ageAdult = age.filter(el => el >= 18).map(el => (el = 100));
// console.log(ageAdult);

// Сформировать массив , где несовершеннолетние заменены на ' child ' , а совершеннолетние
// на ' adult ' X
// let age = [23, 15, 18, 56, 43, 28];

// let changedMessage = age.map(el => {
//   if (el < 18) {
//     return (el = 'child');
//   } else {
//     return (el = 'adult');
//   }
// });

// let changedMessageTernar = age.map(el => (el < 18 ? 'child' : 'adult')); // ternarnij operator

// console.log(changedMessage);
// console.log(changedMessageTernar);

// Сформируйте массив , в котором числа больше 100 заменены на строку ' > 100 ' , а числа
// меньше ста - на ' < 100 ' . METOD MAP

// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// let newArray = array.map(el => {
//   if (el >= 100) {
//     return (el = '>100');
//   } else {
//     return (el = '<100');
//   }
// });

// console.log(newArray);

// Сформировать массив из последних цифр элементов = > [ 3 , 5 , 8 , 6 , 3 , 8 ]

// let age = [23, 15, 18, 56, 43, 28];

// let shortAge = age.map(el => el % 10);
// console.log(shortAge);

// let shortAgeForEach = [];
// age.forEach(el => shortAgeForEach.push(el % 10)); // metod for each, pohoze no po drugomu, nado samomu sozdat novij pustoj massiv, a v map ne nado

// console.log(shortAgeForEach);

// **********************HOMEWORKS**************************

// ЗАДАЧА 1
// Дан массив с числами .
// let arr = [ 1 , −6 , 4 , 0 , 9 , -5 , 16 ] ;

// let array = [1, -6, 4, 0, 9, -5, 16];
// Создайте новый массив , состоящий только из отрицательных чисел .
// let ArrayNegative = array.filter(el => el < 0);
// console.log(ArrayNegative);

// Создайте новый массив , состоящий только из четных чисел .
// let ArrayEven = array.filter(el => {
//   if (el % 2 === 0) {
//     return el;
//   }
// });
// console.log(ArrayEven);

// Напишите программу , высчитывающую количество отрицательных чисел в этом массиве.
// let NegativeCount = ArrayNegative.length;
// console.log(NegativeCount);

// ЗАДАЧА 2
// Дан массив с числами .
// let arr2 = [ 1 , −6 , 4 , 0 , 9 , −5 , 16 ] ;
// Оставьте в нем только положительные числа . Затем извлеките квадратный корень из
// этих чисел .

// let array = [1, -6, 4, 0, 9, -5, 16];

// let ArrayPositive = array.filter(el => el > 0).map(el => Math.sqrt(el));
// console.log(ArrayPositive);

// ВАДАЧА З
// Дан массив из разных типов данных .
// let arr = [ 8 , Nello ' , true , false , ' bye ' , 122 , undefined , 151 ;
// Необходимо сформировать массив из чисел ( если значение не число , то подставить -1 )

// let array = [8, 'hello', true, false, 'bye', 122, undefined, 15];

// let newArray = array.map(el => {
//   if (typeof el === 'number') {
//     return el;
//   } else if (typeof el !== 'number') {
//     return (el = -1);
//   }
// });
// console.log(array);
// console.log(newArray);

// ЗАДАЧА 4
// Дан массив из массивов . Вложенные массивы хранят в себе данные о пользователе ( имя ,
// фамилия и активность ) .
// Напишите filter , который оставляет только активных пользователей ( true ) .
// Добавьте map , который в отфильтрованном списке преобразует вложенные массивы в
// строки .
// Resultat dolzen bit ['Maksim Gribov', 'Anton Kulikov', 'Olga Petrova']
// let arr = 1

//
//
//   [ ' Максим ' , ' Грибов ' , true ) ,
//   [ ' Антон ' , ' Куликов ' , truel ,
//   [ ' Светлана ' , ' Иванова ' , false ) ,
//   [ ' Ольга ' , ' Петрова ' , true ) ,
//  [ ' Сидр Сидоров ' , falsel

// let array = [
//   ['Максим', 'Грибов', true],
//   ['Антон', 'Куликов', true],
//   ['Светлана', 'Иванова', false],
//   ['Ольга', 'Петрова', true],
//   ['Сидр', 'Сидоров', false],
// ];

// let newArray = array
//   .filter(el => el[2] === true)
//   .map(el => `${el[0]} ${el[1]}`);

// console.log(newArray);

// ***********************IMPERATIVNIJ i DEKLARATIVNIJ SPOSOB*************

// let array = [1, -6, 4, 0, 9, -5, 16];
// Создайте новый массив , состоящий только из отрицательных чисел

// ИМПЕРАТИВНЫЙ СПОСОБ, propisivajem kazdoje posagovoje resenije, rasskazivajem programme KAK nuzno dejstvovat
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 0) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

// ДЕКЛАРАТИВНОЕ СПОСОБ  govorim programme CTO nuzno sdelat, a kak ona eto delajet eto pod kapotom nam ne interesno

// let newArray2 = array.filter(el => el < 0);

// console.log(newArray2);

// *******************povtorenije*****************

// Создайте функцию , принимающую массив и возвращающую массив с отрицательными числами

// let arr = [1, 34, -10, 8, -5, -3];

// const negativeNums = arr => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// };
// negativeNums(arr);

// Создайте функцию , принимающую массив и возвращающую массив с положительными числами

// const positiveNums = arr => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       newArray.push(arr[i]);
//     }
//   }

//   return newArray;
// };

// ***********************METOD REDUCE******************************

// . reduce ( ) служит для того , что мы получили какое - то финальное значение , совершив
// итерацию по массиву . Возвращает финальное занчение , число .
// Reduce prinimajet obizataleno 2 argumenta

// найти сумму чисел в массиве

// let numbers = [1, 2, 3, 4, 5];

// Cikl FOR
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// Takaja ze zadacka metod .reduce

// let sumReduceShort = numbers.reduce((total, el) => total + el, 0); // return ne obiazatelno esli 1 strocka i figurnije skobki
// let sumReduce = numbers.reduce((total, el) => {
//   return total + el;
// }, 0); // 0 ne vsegda obiazatelno stavit, esli ne pisem to po umolcianeju budet pervij element massiva, v etom sluciaje 1, no rezultat budet takoj ze. mozno stavit cto ugodno, togda budet scitat ot etogo cisla
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// console.log(sumReduce);

// Дан массив
// let nums = [3, 6, 7, 1];
// Найти среднеарифмитическое всех элементов массиов

// let avgNum = nums.reduce((total, el) => total + el) / nums.length;
// console.log(avgNum);

// let avgNum2 =
//   nums.reduce((total, el) => {
//     return total + el;
//   }) / nums.length;

// console.log(avgNum2); // Vtoroj variant resenija

// *****************************ZADACKI*************************

// Задан - массив :
// arr = [ 137 , 5 , 84 , 299 , 777 , 500 , 1 , 8 , 17 ] ;
// Задачи :

// const array = [137, 5, 84, 299, 777, 500, 1, 8, 17];
// 1. Добавьте в начало - массива число 67 , используя метод..unshift ( ) .

// array.unshift(67);
// console.log(array);
// Затем добавьте в
// конец массива число 56. Далее решайте задачи с обновленным массивом .

// array.push(56);
// console.log(array);
// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат .
// let newArrayFilter = array.filter(el => el < 100);
// console.log(newArrayFilter); // metod filter

// let newArray = [];
// array.forEach(el => {
//   if (el < 100) {
//     newArray.push(el);
//   }
// });
// console.log(newArray); // metod forEach

// 3. Сформируйте массив , состоящий только из чисел , кончающихся на 7 .
// let newArrayFilter = newArray.filter(el => el % 10 === 7);
// console.log(newArrayFilter); // metod filter

// let newArray2 = [];
// newArray.forEach(el => {
//   if (el % 10 === 7) {
//     newArray2.push(el);
//   }
// });
// console.log(newArray2); // metod forEach

// 4. Найдите сумму чисел , кОТОРЫЕ Меньше 100 .
// let sumNum = newArray.reduce((total, el) => total + el);
// console.log(sumNum);

// 4 Найдите сумму чисел , которые заканчиваются на 7 .

// let sumNum2 = newArray2.reduce((total, el) => total + el);
// console.log(sumNum2);

// ******************************HOMEWORKS***********************

// const array = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];

// 1. Добавьте в начало массива число 53. Затем удалите из конца массива последние 2
// числа . Далее решайте задачи с обновленным массивом .

// array.unshift(53);
// console.log(array);

// array.pop();
// array.pop();
// Mozno i tak array.length = array.length - 2
// console.log(array);

// 2. Сформируйте массив из положительных чисел меньше 50. Найдите сумму всех // положительных чисел меньше 50 .

// const newArray = array.filter(el => el < 50 && el > 0);
// console.log(newArray);
// const arraySum = newArray.reduce((total, el) => total + el);
// console.log(arraySum);

// 3. Сформируйте массив , состоящий только из положительных чисел , кончающихся на 3 .

// const numThreeArray = array.filter(el => el % 10 === 3);

// console.log(numThreeArray);
// Найдите сумму всех положительных чисел , кончающихся на 3 .

// const sumThreeArray = numThreeArray.reduce((total, el) => total + el);
// console.log(sumThreeArray);

// 3. Сформируйте массив , в котором положительные числа на строку ' + ' , а отрицательные числа -
//  на '- '

// const changeArray = array.map(el => {
//   if (el > 0) {
//     return (el = '+');
//   } else {
//     return (el = '-');
//   }
// });
// console.log(changeArray);

// *************************OBJECTS***********************

// let a = 'hello'; // string
// let b = 7; // number
// let c = true; // boolean

// undefined, null

// let user = {
//   firstName: 'Aleksej',
//   lastName: 'Dolznikov',
//   age: 27,
//   active: true,
// };

// console.log(user.firstName); // cto bi najti firstName kliuc
// console.log(`Hello ${user.firstName}! You are ${user.age} years old`); // pervij sposob pokazat objekti

// console.log(`Hello ${user['firstName']}! You are ${user['age']} years old`); // vtoroj sposob pokazat objekti
// 1. если ключ состоит из двух и более слов
// 2 . если ключ это переменная // let a = 'firstName'
// const users = [
//   {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     age: 20,
//     salary: 500,
//   },
//   {
//     firstName: 'Olga',
//     lastName: 'Petrova',
//     age: 12,
//     salary: 250,
//   },
//   {
//     firstName: 'Irina',
//     lastName: 'Alexandrova',
//     age: 46,
//     salary: 1500,
//   },
//   {
//     firstName: 'Denis',
//     lastName: 'Sokolov',
//     age: 30,
//     salary: 760,
//   },
// ];

// console.log(users[1].salary);
// console.log(`Hello ${users[0].firstName}!`);
// console.log(users);

// 1 . Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консол

// users.forEach(el => console.log(el));

// 2 . Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения
// first_name из каждого объекта

// users.forEach(el => console.log(el.firstName));

// 3 . Добавить в конец массива объект со следующими значениями :
// first_name : ' Anton ' ,
// ... last_name : ' Gribov ' ,
// 11. age : 36 ,
//...salary : 1760
// . }

// users.push({
//   firstName: 'Anton',
//   lastName: 'Gribov',
//   age: 36,
//   salary: 1760,
// });
// console.log(users);

// 4. Сформируйте массив из совершеннолетних пользователей

// const usersAdult = users.filter(el => el.age >= 18);
// console.log(usersAdult);

// 5. Получите из всех объектов значения last name и сформируйте из этих фамилий
// Массив .
// = > [ ' Ivanov ' , ' Petrova ' , ' Alexandrova ' , ' Sokolov ' , ' Gribov '

// const newArray = users.map(el => el.lastName);
// console.log(newArray);

// / 6. Сформируйте массив , состоящий только из - имен и фамилий пользователей . Выведите
// результат в консоль .
// = > [ ' Ivan Ivanov ' , ' Olga Petrova ' , ' Irina Alexandrova ' , ' Denis Sokolov ' , ' Anton
// Gribov ' ]

// const newArray2 = users.map(el => `${el.firstName} ${el.lastName}`);
// console.log(newArray2);

// 7. Получите из этого массива обьект , где first_name ==  " Olga " , и сохраните это в
// какой - нибудь переменной = > .find ( )

// const userOlgaFind = users.find(el => el.firstName === 'Olga');
// console.log(userOlgaFind); // find vozvrasiajet pervij element, a ne massiv

// const userOlgaFilter = users.filter(el => el.firstName === 'Olga');
// console.log(userOlgaFilter); // filter verniot massiv

// 8. Сформировать массив со всеми пользователями , чьи first_name начинаются с буквы I /

// const firstLetterI = users.filter(
//   el => el.firstName[0] === 'I' || el.firstName[0] === 'i'
// );

// const firstLetterISecond = users.filter(
//   el => el.firstName[0].toLowerCase() === 'i' // vtoroj variant resenija
// );
// console.log(firstLetterI);

// 9. Сформируйте массив из совершеннолетних пользователей . И выведите в консоль
// результат в формате : << Имя > < Фамилия > ( < возраст > ) : < зарплата > .
// = > [ ' Ivan Ivanov ( 20 ) : 500 ' , ' Irina Alexandrova ( 46 ) : 1500 ' , ' Denis Sokolov ( 30 ) :
// 760 ' , ' Anton Grobov ( 36 ) ' ] ;

// const adultUsers = users
//   .filter(el => el.age >= 18)
//   .map(el => `${el.firstName} ${el.lastName} (${el.age}): ${el.salary}`);

// console.log(adultUsers);

// **************************HOMEWORKS******************************

// const people = [
//   {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     age: 20,
//     city: 'Moscow',
//     country: 'Russia',
//     active: true,
//   },
//   {
//     firstName: 'dmitry',
//     lastName: 'Petrov',
//     age: 7,
//     city: 'Berlin',
//     country: 'Germany',
//     active: true,
//   },
//   {
//     firstName: 'Irina',
//     lastName: 'Alexandrova',
//     age: 46,
//     city: 'Paris',
//     country: 'France',
//     active: false,
//   },
//   {
//     firstName: 'Denis',
//     lastName: 'Sokolov',
//     age: 10,
//     city: 'Rome',
//     country: 'Italy',
//     active: false,
//   },
// ];

// 1 . Сформируйте массив строк каждая строка включает в себя информацию по каждому человеку в следующем
// формате : " < Имя > < Фамилия > ( < Город > , << Страна > ) " . Пример = > [ ' Ivan Ivanov ( Moscow , Russia ) ' , { ... } .
// { ... } , ... ]

// const info = people.map(
//   person =>
//     `${person.firstName} ${person.lastName} (${person.city}, ${person.country})`
// );

// console.log(info);

// 2. Сформируйте массив из активных людей

// const activePeople = people.filter(person => person.active === true);
// const activePeople2 = people.filter(person => person.active); // mozno i tak, tak kak esli true ono i tak i tak verniotsia v novij massiv, a esli false ne verniotsia
// console.log(activePeople);
// console.log(activePeople2);

// 3 . Сформируйте массив из людей , чьи имена начинаются на ' D ' ( регистр буквы может быть и нижним )

// const firstLetterD = people.filter(
//   person => person.firstName[0] === 'D' || person.firstName[0] === 'd'
// );
// console.log(firstLetterD);

// 4 . Получите из массива объект , где страной проживания человека является ' Germany '

// const objectGermany = people.find(person => person.country === 'Germany'); // vernuli objekt
// console.log(objectGermany);

// 5. Сформируйте массив из совершеннолетних пользователей . И выведите в консоль результат в формате : [
// { < Имя > < фамилия > ( < возраст > ) , < Страна > ( < Город > ) } , { ... } , { ... } , ... ]

// const adultPeople = people
//   .filter(person => person.age >= 18)
//   .map(
//     person =>
//       `${person.firstName} ${person.lastName} (${person.age}), ${person.country} (${person.city})`
//   );
// console.log(adultPeople);

// 6. Измените у первого элемента значение first name нa " Petr " и аge на 99 ;

// people[0].firstName = 'Petr';
// people[0].age = 99;
// console.log(people);

// const user = {
//   firstName: 'Aleksej',
//   lastName: 'Dolznikov',
//   age: 27,
// };

// user = [1, 2, 3]; => osibka, nelzia pereopredelit constantu

// user.age = 50; => mozno pereopredelit kakojt to element daze v konstante

// user = {
//   city: 'Vilnius', => osibka, tak pereopredelit toze nelzia
// };
// console.log(user);

// V / Создайте функцию , которая принимает в качестве аргументов объект и ключ
// объекта , а возвращает значение обьекта , доступное по этому ключу .
// Пример : ( { key : ' property¹ } , ' key ' ) = > . - ' property '
// Пример : ( { first_name : ' Nelli ' , last_name : ' Efremyan " } , ' first_name ' = >
// ' Nelli '
// Пример : ( { first_name : ' Nelli ' , last_name : ' Efremyan ' , age : 27 } ,
// " last_name ' ) = > ' Efremyan '
// Пример : ( { first_name : ' Nelli ' , last_name : ' Efremyan ' , age : 27 } , ' age ' )
// = > 27

// const user = {
//   firstName: 'Nelli',
//   lastName: 'Efremyan',
// };

// const getValue = (obj, key) => {
//   return obj[key];
// };
// console.log(getValue(user, 'firstName'));

// 2. Проверьте , что masiv не пустой
// в нем есть хотя бы один обьект с
// ключом age .

// const people = [
//   {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     age: 20,
//     city: 'Moscow',
//     country: 'Russia',
//     active: true,
//   },
//   {
//     firstName: 'dmitry',
//     lastName: 'Petrov',
//     age: 7,
//     city: 'Berlin',
//     country: 'Germany',
//     active: true,
//   },
//   {
//     firstName: 'Irina',
//     lastName: 'Alexandrova',
//     age: 46,
//     city: 'Paris',
//     country: 'France',
//     active: false,
//   },
//   {
//     firstName: 'Denis',
//     lastName: 'Sokolov',
//     age: 10,
//     city: 'Rome',
//     country: 'Italy',
//     active: false,
//   },
// ];

// 3 sposoba resenija zadaci
// console.log(people[0].age); // 20 vivelo. A esli bi masiv bil pustoj to blo bi undefined
// console.log(people[0].hasOwnProperty('age')); // true / false
// console.log('age' in people[0]);

// ***********************CLASSES********************************

// class Car {
//   // class pisem s bolsoj bukvi
//   constructor(name, model, country, volume, color, year) {
//     this.name = name;
//     this.model = model;
//     this.country = country;
//     this.volume = volume;
//     this.color = color;
//     this.year = year;
//   }

//   getInfo() {
//     console.log(
//       `Car: ${this.name} (${this.model}) from country: ${this.country}`
//     );
//   }
//   getYear() {
//     console.log(`Year ${this.year}`);
//   }
// }
// Создаем экземпляры классов

// const car1 = new Car('Toyota', 'RAV4', 'Japan', 2.4, 'red', 2020);
// this.name === car1.name

// const car2 = new Car('BMW', 'X3', 'Germany', 2.0, 'back', 2018);
// this.name === car2.name

// Вызываем метод get info ( )
// car1.getInfo();
// car2.getInfo();
// car2.getYear();

// name, model, country, volume, color, year

// Литеральная нотация

// const car1_1 = {
//   name: 'Toyota',
//   model: 'RAV4',
//   country: 'Japan',
//   volume: 2.4,
//   color: 'red',
//   year: 2020,
// };

// console.log(car1); // eksempliar klassa
// console.log(car1_1); // objekt
// console.log(car1.country);
// console.log(car2.name);

// Экземпляр класса объект , созданный через класс
// this контекст , ссылка на обьект , с которым происходит действие

// ЗАДАЧА
// Реализуйте класс Country ( Страна ) , который будет иметь следующие свойства :
// name ( имя ) , capital ( столица ) , population ( численность населения ) , climat
// ( климат )
// Создайте 3 экземпляра этого класса с разными свойствами
// Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
// Реализйуте метод get_capital , который выводит в консоль сообщение The
// capital of < COUNTRY > is < CAPITAL >

// class Country {
//   constructor(name, capital, population, climat) {
//     this.name = name;
//     this.capital = capital;
//     this.population = population;
//     this.climat = climat;
//   }
//   getCapital() {
//     console.log(`The capital of ${this.name} is ${this.capital}`);
//   }
// }

// const country1 = new Country('Lithuania', 'Vilnius', 2.7, 'cold');
// const country2 = new Country('Germany', 'Berlin', 60, 'warm');
// const country3 = new Country('Spain', 'Madrid', 10, 'warm');

// console.log(country1.name);
// console.log(country2.climat);
// console.log(country3.population);

// country1.getCapital();
// country2.getCapital();
// country3.getCapital();

// ***************************HOMEWORKS***************************

// ЗАДАЧА 1
// Реализуйте класс Language ( Язык ) , который будет иметь следующие свойства :
// name ( имя ) , alphabet , ( латинский , кирилица и т.д. ) , country ( страна , в которой
// говорят на этом языке )
// Создайте экземпляр этого класса
// Выведете в консоль все свойства созданного класса
// Реализуйте метод get_info ( выводит в консоль строку ' Язык : < name > , Алфавит :
{
  /* < alphabet > , Страна , в которой говорят на этом языке < country > ) */
}

// class Language {
//   constructor(name, alphabet, country) {
//     this.name = name;
//     this.alphabet = alphabet;
//     this.country = country;
//   }
//   getInfo() {
//     console.log(
//       `Язык: ${this.name}, Алфавит: ${this.alphabet}, страна, в которой говорят на этом языке ${this.country} `
//     );
//   }
// }

// const language1 = new Language('Lithuanian', 'latin', 'Lithuania');
// const language2 = new Language('Russina', 'cyrillic', 'Lithuania');

// console.log(language1.name, language1.alphabet, language1.country);

// language1.getInfo();
// language2.getInfo();

// ЗАДАЧА 2 ( посложнее )
// Реализуйте класс Worker ( работник ) , который будет иметь следующие свойства : паме
// ( имя ) , surname ( фамилия ) ,
// rate ( ставка за день работы ) , days ( количество отработанных дней ) .
// Также класс должен иметь метод getsalary ( ) , который будет выводить зарплату
// работника .
// Зарплата - это произведение ( умножение ) ставки rate на количество отработанных дней
// days .
// С помощью класса создайте двух рабочих и найдите сумму их зарплат .
// Реализуйте методы add_days ( увеличивает количество дней на amount ) и delete_days
// ( уменьшает количество дней на amount )

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
//   addDays(amount) {
//     this.days += amount;
//   }
//   deleteDays(amount) {
//     this.days -= amount;
//   }
// }

// const worker1 = new Worker('Aleksej', 'Dolznikov', 50, 30);
// const worker2 = new Worker('Vitalij', 'Dolznikov', 100, 30);

// const salary1 = worker1.getSalary();
// const salary2 = worker2.getSalary();
// const salarySum = salary1 + salary2;

// console.log(worker1);

// worker1.addDays(7);
// console.log(worker1);

// worker2.deleteDays(7);
// console.log(worker2);

// console.log(worker1.deleteDays());
// console.log(worker2.deleteDays());

// Реализуйте класс Group ( групп ) , который будет иметь следующие свойства :
// name ( название группы ) , major ( специализация ) , number ( количество студентов , по
// умолчанию 15 )
// Реализуйте методы add_student ( ) ( добавляет одного студента ) и delete_student ( )
// ( удаляет одного студента )
// Создайте экземпляр этого класса
// Проверьте как работают методы

// class Group {
//   constructor(name, major, number = 15) {
//     this.name = name;
//     this.major = major;
//     this.number = number;
//   }
//   addStudent() {
//     this.number += 1;
//   }
//   deleteStudent() {
//     this.number -= 1;
//   }
// }

// const group1 = new Group('Morning group', 'FrontEnd', 19);
// const group2 = new Group('Evening group', 'BackEnd');

// console.log(group1);
// group1.addStudent();
// console.log(group1);

// console.log(group2);
// group2.deleteStudent();
// console.log(group2);
// group1.deleteStudent();
// console.log(group1);

// group2.addStudent();
// console.log(group2);

// Создайте функцию , которая будет создавать экземпляры класса Group и собирать их в
// один массив

// let allGroups = [];
// const createGroup = (name, major, num) => {
//   const group = new Group(name, major, num);
//   allGroups.push(group);
// };

// createGroup('Morning group', 'FrontEnd', 19);
// createGroup('Evening group', 'BackEnd', 20);

// console.log(allGroups);

// *************************Zadacki s knigi****************************

// 1. Треугольник. Напишите цикл,  выводит такой треугольник:
// 1 #
// 2 ##
// 3 ###
// 4 ####
// 5 #####
// 6 ######
// 7 #######

// for (let i = '#'; i.length < 8; i += '#') {
//   console.log(i);
// }

// **********************************************************************

// 2. FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

// for (let i = 1; i <= 100; i++) {
//   let output = '';
//   if (i % 3 === 0) {
//     output += 'Fizz';
//   }
//   if (i % 5 === 0) {
//     output += 'Buzz';
//   }
//   console.log(output || i);
// }
// **********************************************************************

// 3. Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
// 1 # # # #
// 2  # # # #
// 3 # # # #
// 4  # # # #
// 5 # # # #
// 6  # # # #
// 7 # # # #
// 8  # # # #

// let size = 8;

// let board = '';

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += ' ';
//     } else {
//       board += '#';
//     }
//   }
//   board += '\n';
// }
// console.log(board);

// ***********************************************************************
// 4. Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// function min(num1, num2) {
//   return Math.min(num1, num2);
// }
// console.log(min(0, 10));
// console.log(min(0, -10));
// ***********************************************************************
// 5. Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?

// function isEven(num) {
//   if (num == 0) {
//     return true;
//   }
//   if (num == 1) {
//     return false;
//   }
//   if (num < 0) {
//     return isEven(-num);
//   } else {
//     return isEven(num - 2);
//   }
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// ************************************************************************

// 6. Считаем бобы. Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.
// function countChar(str, ch) {
//   let counted = 0;
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (element == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }

// function countBS(str) {
//   return countChar(str, 'B');
// }

// console.log(countBS('BBC'));
// console.log(countChar('kakkerlak', 'k'));
// ***********************************************************************
// 7. Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) {
//       array.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// function sum(array) {
//   let total = 0;
//   for (let value of array) {
//     total += value;
//   }
//   return total;
// }

// console.log(range(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(range(5, 2, -1)); // [5,4,3,2]
// console.log(sum(range(1, 10))); // 55

// ***********************************************************************
