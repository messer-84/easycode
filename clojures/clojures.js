/*
 замыкания, это функция объявленная внутри функции, благодаря которой локальные переменные внутри старшей функции не сбрасываются после завершения работы этой функции, а остаются при повторном вызове.
 Замыканиями они называются потому, что младшая функция их замыкает внутри старшей.
 */

// let outerValue = 'ninja';
//
// let later;
//
// function outerFn() {
//   let innerValue = 'JS';
//
//   function innerFunction(param) {
//     console.log(outerValue);
//     console.log(innerValue);
//   }
//
//   later = innerFunction;
// }
//
// outerFn();
// later(); // ninja JS

/*----------------------------------------*/

// function createCounter() {
//   var numberOfCalls = 0;
//   return function () {
//     return ++numberOfCalls;
//   }
// }
//
// var fn = createCounter();
//
// fn(); //1
// fn(); //2
// fn(); //3

/*----------------------------------------*/
// var func = function () {
//   var i = 10;
//   return function () {
//     return i;
//   }
// };

// var myFunc = func();
//
// var anotherFunc = function () {
//   var i = 20;
//   console.log(myFunc());
//
// };
//
// anotherFunc(); //10
/*---------------------------------*/

// var counter = function (num) {
//   counter.count = num !== undefined ? num : counter.count;
//   return counter.count++;
// }
// counter.count = 0;
//
// console.log(counter());
// console.log(counter());
/*-----------------------------------*/

// let value = 10, text = 'Hello!';
//
// function getName(name) {
//   let startText = 'My name is';
//
//   function getFullName(surname) {
//     return name + ' ' + surname;
//   }
//
//   return startText + getFullName('Smith');
// }

/*-------------------------------------*/

// var x = 10;
//
// function foo() {
//   console.log('cons x - ', x);
//
// }
// здесь foo берет x снаружи потому, что foo объявлен снаружи
// если снаруж x не будет - тогда x - undefined
// (function () {
//   var x = 'other';
//   foo();
// })();

/*------------------------*/

// getBigName(userName);
//
// function getBigName(name) {
//   name = name + '';
//   return name.toUpperCase();
// }
//
// var userName = 'Ivan';

/*------------------------*/

// function test() {
//   var name = 'Vasiliy';
//   return getBigName(userName);
// }
//
// function getBigName(name) {
//   name = name + '';
//   return name.toUpperCase();
// }
//
// var userName = 'Ivan';
//
// test(); // IVAN
// если функцию перенести вверх - UNDEFINED
/*---------------------------------*/
// var food = 'cucumber';
//
// (function () {
//   var food ='bread';
//   getFood();
// })();
//
// function getFood() {
//   console.log(food);
// }
//cucumber
/*---------------------------------*/

// function outerFunction() {
//   let text = 'just a text'
//
//   function innerFunction(){
//     return text;
//   }
//
//   return innerFunction;
//
// }
// var newFunc = outerFunction(); //function innerFunction(){return text;}
//
// newFunc();// 'just a text'

/*-------------------------------*/
// function stringMaker() {
//   let text = '';
//   return function (string) {
//     text += string;
//     return text;
//   }
// }
// const getString = stringMaker();
// console.log(getString('Hello'));
// console.log(getString(','));
// console.log(getString(' mr. Anderson!'));

/*-------------------------------*/
// const getHello = function (text) {
//   text = text || 'Hello, ';
//
//   return function (name) {
//     var greeting = text + name;
//     return greeting;
//   }
//
// }
// const hello = getHello('Hello');
// console.log(hello(' easycode'));
// console.log(hello(' ladies and jentlemans'));

/*------------------------------------*/

const counter = (function () {
  let i = 0;
  return function () {
    return ++i;
  }
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/*-----------------------------------*/
const module = (function () {
  var index = 0;

  function setIndex(value) {
    index = value;
  }

  function plusIndex() {
    index++;
  }

  function getIndex() {
    return index;
  }

  return {
    setIndex: setIndex,
    plusIndex: plusIndex,
    getIndex: getIndex
  }


})();
console.log(module.setIndex(15));
console.log(module.getIndex());
console.log(module.plusIndex());
console.log(module.getIndex());

/*------------------------------------*/
const price = (function () {
  let discount = 0, price = 0;

  function setDiscount(value) {
    discount = parseInt(value);
  }

  function getPriceWithDiscount() {
    const discountFromPrice = price * discount / 100;
    return price - discountFromPrice;
  }

  function setPrice(value) {
    price = value;
  }

  function getPrice() {
    return price;
  }

  return {
    getPriceWithDiscount: getPriceWithDiscount,
    setDiscount: setDiscount,
    setPrice: setPrice,
    getPrice: getPrice
  }
})();

console.log(price.setPrice(100));
console.log(price.getPrice());//100
console.log(price.setDiscount(5));
console.log(price.getPriceWithDiscount());//195

console.log(price.setPrice(200));
console.log(price.getPriceWithDiscount());//190
console.log(price.getPriceWithDiscount());//190

/*-------------------------------------------*/
var dollar, getDollar;
(function () {

  var dollar = 0;

  getDollar = function () {
    return dollar;
  }

})();

dollar = 30;
console.log(getDollar());
/*---------------------------------------*/
var greet = 'Hello';
(function () {
  var text = "Word";
  console.log(greet + text);

})();

console.log(greet + text);

















































































