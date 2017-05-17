/*
 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25,1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = `${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}`;

console.log(`Task 1 - ${task1}`);

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
  Он не был больше ни телом, к которому рано или поздно ..."
 */

let array = [
  'Он',//0
  'был больше ни телом, к которому рано или поздно',//1
  'он обнаружил',//2
  'не',//3
  'Так, когда Будда достиг Просветления',//4
  '...',//5
  'что больше',//6
  'ощущает себя мишенью',//7
  'не'//8
];

// 4,-2,-6-3-7.-0-не-1-5
let homeSentence = `${array[4]}, ${array[2]}, ${array[6]} ${array[3]} ${array[7]}. ${array[0]} не ${array[1]} ${array[5]}`;

console.log(`Task 2 - ${homeSentence}`);

/*
 3. Добавьте свойста 4 новых свойства в объект используя
    квадратные скобки и точку.
 */

let myObj = {};

myObj['name'] = 'Maksim';
myObj['favorite number'] = 7;
myObj.age = 32;
myObj.course = 'Javascript';

console.log(myObj);

/*
 4. Используя метод .slice, добавьте недостающие символы в строку
 */


let sliceString = 'Ytube';

sliceString = `${sliceString.slice(0,1)}ou${sliceString.slice(1)}`;
// sliceString = sliceString.slice(0,1) + 'ou' + sliceString.slice(1);
// sliceString = sliceString.slice(0,1) + 'ou' + sliceString.slice(-4);

console.log(sliceString);

/*
 5. Преобразуйте строку x,
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
let x =
  'google \
released ' +
  'new version\
 ' +
  frameworks[1] +
  Math.floor(frameworks[0]) +
  '\
But real speed is ' +
  `${frameworks[frameworks.length - 1]}`;


//Math.floor(frameworks[0]) == ${~~frameworks[0]} == parseInt(frameworks[0],10)

x = `google released new version ${frameworks[1]} ${Math.floor(frameworks[0])}.
     But real speed is ${frameworks.slice(-1)}.`;

console.log(x);


