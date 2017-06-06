'use strict';

/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 *
 * */
console.log('Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>');

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}
console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */
console.log('Task 2 >>>>>>>>>>>>>>>>>>>>>>>>>');

function patternModule() {
  return {
    counterData: 1,
    add: function () {
      return console.log(this.counterData++);
    },
    clear: function () {
      return this.counterData = 1;
    }
  }
}

let test = patternModule(); // 0

test.add(); //1
test.add(); //2
test.add(); //3
test.clear();
test.add();//1


// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция )
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */
console.log('Super task >>>>>>>>>>>>>>>>>>>>>>>>>');

let jun = {};

function methodCounter(obj, method, num, fn) {
  var i = 0;

  obj[method] = function (params) {
    i++;
    if(i < num + 1){
      var arr = [];
      for(var k = 0; k < arguments.length; k++){
        arr.push(arguments[k]);
      }
      fn(arr);
    }
    else{
      console.log('ERROR ! add more methods');

    }
  }

}

methodCounter(jun, 'logger', 2, function (args) {
  let sum = args.reduce(function (a, b) {
    return a + b
  }, 0);
  console.log(sum);
});


jun.logger(2,3,4,5);//14
jun.logger(5,5);//10
jun.logger(3,3);//errar















