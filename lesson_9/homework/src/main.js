'use strict';

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --
console.log('Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP'],
  goodDev: goodDev
};

let developer2 = {
  experience: [
    {technology: 'java'},
    {technology: 'c++'},
    {technology: 'aws'},
    {technology: 'docker'}

  ],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

function goodDev(dev) {
  var self = this;

  if (self.experience) {
    var arrTech = self.experience.map(function (elem, index) {
      return self.experience[index].technology;
    });
  }

  self.requires.filter(function (elem) {
    var propArr = self.skills || arrTech;

    // есть ли в массиве propArr  requires[index]

    if (propArr.indexOf(elem) !== -1) {
      console.log(`required:  ${elem} ... success`);
    }
    else {
      console.log(`required: ${elem} ... fail`);
    }

  });


}

let developers = [developer1, developer2];

// developers.forEach((dev, index) => {
//   console.log(`developer ${index + 1}`);
//   dev.goodDev();
// });

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: java ... success
// required: json ... fail
// required: c++ ... success
// required: JavaScript ... fail

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению
 *
 * При вызове функции используйте this
 *
 * */
console.log('Task 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

let myObject = {
  database: [
    {age: 100, name: 'b'},
    {age: 15, name: 'c'},
    {age: 25, name: 'a'}
  ],
  myFilter: filteringDatabase
};


function filteringDatabase(key) {
  function filterKey(key) {
    return function (x, y) {
      //наглядность
      // console.log(x[key] + " <> " + y[key]);
      return x[key] > y[key];
    }
  }

  return this.database.sort(filterKey(key));
}


console.log(myObject.myFilter('age'));
// console.log(myObject.myFilter('name'));

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
// console.log(myObject.myFilter('name'));
// {age:25, name:a}, {age:100, name: b}, {age:15, name: c}


/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 *
 */
console.log('Task 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('subtask hw5-1  >>>>>>>>>');
/*1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 */
let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

let moveZeroToEnd = arr => {
  let notZeroArray = arr1.filter(elem => elem !== 0);
  let zeroArray = arr1.filter(elem => elem === 0);

  return notZeroArray.concat(zeroArray)
}
console.log(moveZeroToEnd(arr1));
console.log('subtask hw5-2  >>>>>>>>>');
//2. Верните сумму двух найменьших чисел в массиве

let numArray = [10, 20, 30, 2, 31, 11, 9];
let numArray2 = [-1, 0, 25];
let numArray3 = [-4, -10, 25, 10];
let numArray4 = [0, 200, 10, 25, 15];
var count = 0;
var newArray = [];

let findMin = arr => {
  var min = arr[0];

  // поиск минимального значения дважды
  if (count != 2) {

    arr.forEach(elem => {
      if (min > elem) {
        min = elem;
      }
    });

    // после первой итерации - удаляем из массива 1-е минимальное число
    if (count == 0) {
      arr.splice(arr.indexOf(min), 1);
    }
    // минимальные значения заносятся в новый массив(массив минимальных чисел)
    newArray.push(min);
    count++;
    findMin(arr);
  }

  return newArray[0] + newArray[1];
}

console.log('subtask hw5-2 ', findMin(numArray4));
console.log('subtask hw5-3  >>>>>>>>>');
/*3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

var nameShuffler = str => {
  let newStr = str.split(" ").reverse().join(' ');
  return newStr;
}

console.log('subtask hw5-3 ', nameShuffler("john McClane"));
console.log('subtask hw5-4  >>>>>>>>>');

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

var capMe = arr => {
  var newArray = arr.map((elem, index, arr) => elem[0].toUpperCase() + elem.slice(1).toLowerCase());

  return newArray;
}

console.log('subtask hw5-4', capMe(['KARLY', 'DANIEL', 'KELSEY']));


////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

let junior = {};

function addMethod(object, name, fn) {

  object[name] = function(params) {

    if (fn.length === arguments.length) {
      fn(params);
    }

  };

}

addMethod(junior, 'ok', function () {
  console.log('zero arguments');
});

addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function (one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function (one, two, three) {
  console.log('three arguments');
});

junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'






