'use strict';

/*
 *
 *
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
function Http() {
  this.ctx = {
    req: {
      PORT: 8080,
      url: "youtube.com",
      res: {
        status: 200,
        message: "hello",
        header: {
          "content-type": "application/json"
        }
      }
    }
  };
  this.next = function () {
    console.log("next");
  };
}
Http.prototype.createServer = function (fn) {
  var ctx = this.ctx;
  var next = this.next;
  this.func = function () {
    return fn(ctx, next);
  };
  return this;
};
Http.prototype.listen = function (PORT, host) {
  console.log(`Server running on https://${host}:${PORT}`);
  this.func();
};

const server = new Http()
    .createServer(function (ctx, next) {
      console.log(ctx);
    })
    .listen(3000, "localhost");

// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human(name, age, gender, height) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
}


Worker.prototype = Object.create(Human.prototype);

function Worker(organization, salary) {
  Human.apply(this, arguments);
  this.organization = organization;
  this.salary = salary;
}

Worker.prototype.work = function () {
  console.log(`${this.name} working`);
}

function Student(placeOfStudy, grant) {
  Human.apply(this, arguments);
  this.placeOfStydy = placeOfStudy;
  this.grant = grant;
}
Student.prototype = Object.create(Human.prototype);

Student.prototype.watchSerials = function () {
  console.log(`${this.name} watch serials`);
}

var jack = new Worker('Jack', 31, 'male', 180, 'BMW', 2500);
var smith = new Student('Smith', 20, 'male', 190, 'HNU', 1500);

console.log(jack);
console.log(smith);

jack.work();
smith.watchSerials();

// @SUPER

/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 */



function sayHello(name, type) {
  return `Hello ${type} ${name}`;
}

function wrapDecorator(func) {
  return function () {
    return func.apply(this, arguments);
  }
}


var func = wrapDecorator(sayHello);

console.log(func('Max', 'human'));




















