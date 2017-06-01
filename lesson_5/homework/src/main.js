'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

// перебираем массив в цикле
// если не ноль добавляем в notZeroArray
// если ноль добавляем в zeroArray
// объединяем массивы

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

function moveZeroToEnd(arr) {

  let notZeroArray = [], zeroArray = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    if (elem !== 0) {
      notZeroArray.push(elem);
    }
    else {
      zeroArray.push(elem);
    }

  }
  return notZeroArray.concat(zeroArray)

}
console.log('task - 1 ', moveZeroToEnd(arr1));

/*
 2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */
// function minimalNumbers2(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//
//   return arr[0] + arr[1];
// }

let numArray = [10, 20, 30, 2, 31, 11, 9];
let numArray2 = [-1, 0, 25];
let numArray3 = [-4, -10, 25, 10];
let numArray4 = [0, 200, 10, 25, 15];
var count = 0;
var newArray = [];

function findMin(arr) {
  var min = arr[0];

  // поиск минимального значения дважды
  if (count != 2) {
    for (var i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
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

console.log('task - 2 ', findMin(numArray4));


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
// делаем из строки массив
// разворачиваем его
// делаем из массива строку

function nameShuffler(str) {
  let newStr = str.split(" ").reverse().join(' ');

  return newStr;
}

console.log('task - 3 ', nameShuffler("john McClane"));

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {
  // создаем новый массив
  // делаем в цикле элементы массива строками
  // берем первый элемент строки приводим к верхнему рег-ру
  // берем оставщуюся часть строки приводим к нижнему
  // склеиваем части строки
  // добавляем строки в новый массив

  let newArrqy = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    elem = elem[0].toUpperCase() + elem.slice(1).toLowerCase();
    newArrqy.push(elem);

  }

  return newArrqy;
}

console.log('task - 4 ', capMe(['KARLY', 'DANIEL', 'KELSEY']));

//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
 */
var supArr1 = [1, 3, 5, 9];// => 7  //(9-1)/4
var supArr2 = [0, 8, 16, 32];// => 24
var supArr3 = [4, 6, 8, 10];// => 2 // число сначала
var supArr4 = [0, 16, 24, 32];// => 8

/**/
// условие - в массиве всегда есть недостающее число,
// недостающее число либо внутри массива либо вначале

// цикл от первого до предпоследнего индекса
// сравниваем разницу между (следующий - текущий) и (текущий - предыдущий)
// если есть
// ищем большую разность
// если разница (следующий - текущий) больше разницы (текущий - предыдущий)
// недостающее число - следующий минус разница(текущий минус предыдущий)

// если разница (текущий - предыдущий) больше
// недостающее число - сумма разница (следующий минус текущий) и следующий
// иначе недостающее число - следующий минус текущий

var newArr2 = [];

function findNum(arr) {

  for (var i = arr.length - 2; i >= 0; i--) {
    var elem = arr[i];
    var nextElem = arr[i + 1];
    var prevElem = arr[i - 1];

    if (i != 0 || i > 0) {
      if ((nextElem - elem) !== (elem - prevElem)) {

        if ((nextElem - elem) > (elem - prevElem)) {
          return nextElem - (elem - prevElem);
        }
        else {
          return (nextElem - elem) + prevElem;
        }
      }
    }
    else {
      return nextElem - elem;
    }
  }

}

console.log('task - super - 1 ', findNum(supArr2));


/*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов

 example:
 [ [1, 2] , [ 3, [ 4 ] ], 5, 10 ] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]

 */
// создаем новый массив
// проходимся циклом по массиву
// если индекс - число - пушим в новый массив
// если индекс - массив - запускаем рекурсию - передаем элемент-массив
// возвращаем новый массив

let superArr = [25, 12, [10, [15]], 6];
let newArr = [];


// если массив - вырезать


function joinArray(arr) {

  for (let i = 0; i < arr.length; i++) {

    let elem = arr[i];

    if (Array.isArray(elem)) {

      joinArray(elem);

    }
    else {
      // arr.shift();
      // arr.push(elem);

      console.log('elem',elem);


    }
    //
  }
  return arr;
  // return newArr;

}

console.log('task - super - 2', joinArray(superArr));

// если массив  10, 15









