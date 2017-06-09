'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */
console.log('Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>');

function solution1() {
  let empty = "";
  return function (str) {
    console.log(empty += " " + str);
  };
}

let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет
// вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */
console.log('Task 2 >>>>>>>>>>>>>>>>>>>>>>>>>>');

// у всех ли скобочек есть пара
// (индекс открывающейся должен быть больше индекса
// закрывающейся)
//-если индекс открывающейся - четный
// у закр-ся должен быть нечентый или наоборот

function validBraces(str) {
  var arr = [...str];
  var bracketsArr = ['{', '(', '['];

  for (var i = 0; i < bracketsArr.length; i++) {
    var elemOpen = bracketsArr[i];
    var elemClose;
    if (elemOpen == '(') {
      elemClose = ')';
    }
    else if (elemOpen == '[') {
      elemClose = ']';
    }
    else {
      elemClose = '}';
    }
    var indexOpen = arr.indexOf(elemOpen);
    var indexClose = arr.indexOf(elemClose);

    // 1 - у открывающейся скобочки есть пара
    if (arr.indexOf(elemOpen) !== -1 && arr.indexOf(elemClose) !== -1) {

      // 2 - индекс закрывающейся больше открывающейся
      if (indexClose > indexOpen) {

        // 3 - откр - четная и закрыв - нечетная
        if (indexOpen % 2 == 0 && indexClose % 2 == 1) {

          if (i == bracketsArr.length - 1) {
            console.log(str, '1 true');
            return true;
          }
          continue;
        }
        // 3 откр - нечетная и закрыв - четная
        if (indexOpen % 2 == 1 && indexClose % 2 == 0) {
          if (i == bracketsArr.length - 1) {
            console.log(str, '2 true');
            return true;
          }
          continue;

        }
        console.log(str, '1 false');
        return false;
      }
    }
    else {
      console.log(str, '1 false');
      return false;
    }
  }


}

validBraces('(){}[]'); //=> returns true
validBraces('(}'); //=> returns false
validBraces('[(])'); // => returns false
validBraces('([{}])'); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */
console.log('Task 3 >>>>>>>>>>>>>>>>>>>>>>>>>>');


function makeCallback(fn) {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}

// makeCallback(function() {
//   console.log('THE LAST LAST comment');
// });


// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */
console.log('Super Task  >>>>>>>>>>>>>>>>>>>>>>>>>>');

function sum(num) {}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша























