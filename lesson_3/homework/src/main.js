//Homework-3

/*
 1. Напишите функцию которая принимает в
 качестве аргумента массив
 и элемент массива и добавляет элемент в конец массива
 */

let arr = ['Ivan', 'Egor', 'Petr'];
let newArr = ['Vasya', 'David'];

function addToArray(arrParam, newElem) {
  arrParam[arrParam.length] = newElem;
}

addToArray(arr, newArr[0]);
console.log('Task - 1 ', arr);

/*
 2. Напишите функцию которая получает 3 параметра
 и возвращает объект типа:
 {
 argument1: param1,
 argument2: param2,
 argument3: param3,
 }
 */

function simpleObjectGenerator(param1, param2, param3) {
  return {
    argument1: param1,
    argument2: param2,
    argument3: param3
  };
}

console.log('Task - 2 ', simpleObjectGenerator('protocol', {url: '22'}, 8000));
var userNames = [{name: 'Egor'}, {name: 'Katya'}, {name: 'Vera'}];

console.log('Task - 2 ', simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));

///////////////////////////////////////////////
/*
 3.  Напишите функцию которая принимает 3 аргумента,
 третий аргумент - это объект.

 Функция создает новый объект и добавляет ключ
 это первый аргумент, а значение - второй аргумент
 Проверяет если есть свойство name в переданном объекте,
 тогда добавляет данное свойство и возвращает новый объект

 var myName = { name: 'Oleg' };

 function addNameToUser(newKey, newValue, userName) {

 }
 */

// console.log(addNameToUser('family', '%Lustenko%', myName));
/* {name:'Oleg', family:'%Lustenko%'} */

// console.log(myName);
/* {name:'Oleg'} */

/////////////////////////////////


let myName = {name: 'Maksim'};

function addNameToUser(newKey, newValue, userName) {

  let obj = {};

  if (newKey && newValue) {
    if (userName.name) {
      obj.name = userName.name;
      obj[newKey] = newValue;
    }
    else {
      obj[newKey] = newValue;
    }
  }
  else if (userName.name) {
    obj.name = userName.name;
  }

  return obj;

}

console.log('Task - 3-1 ', addNameToUser('family', 'Vorobyov', myName));
console.log('Task - 3-2 ', addNameToUser('family', 'Vorobyov', {}));
console.log('Task - 3-3 ', addNameToUser('', '', myName));
console.log('Task - 3-4 ', addNameToUser('', '', {}));


/*
 -> @@ SUPER
 Напишите функцию, которая будет возвращать 'Fizz'
 если передаваемый параметр кратен 3,
 'Buzz', если передаваемый параметр кратен 5,
 'FizzBuzz' - если параметер кратен 3 и 5
 Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
 */

function fizzBuzz(num) {

  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');

  }
  else if (num % 3 === 0) {
    console.log('Fizz');
  }
  else if (num % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(num);
  }
}
console.log('SuperTask - 1:');

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'

/* -> @@ SUPER 2
 Напишите функцию, которая будет принимать 4 аргумента,
 последний всегда функция.
 Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

 */
console.log('SuperTask - 2:');

function showSplitArray(myArray) {
  console.log(myArray.join(';'));
}

function superFunc(arg1, arg2, arg3, myFunc) {
  return myFunc([arg1, arg2, arg3]);
}

superFunc(10, 20, 30, showSplitArray);

function super2(arg1, arg2, arg3, newFunc) {

}

super2(10,20,30, function () {

});

