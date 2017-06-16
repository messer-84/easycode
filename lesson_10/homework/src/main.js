/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 15;
let x = () => y;

let z = t => {
  let y = 5;
  t();

};

console.log(y);

z(x);

//вызов функции z(x)
//функция z принимает параметром функцию x
// запускает функцию x
// функция x возвращает значение y
// значение y берет из тела функции z
// потому что контекст у стрелочных функций
//определяется в момент вызова

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

// let $ = function (tag) {
//   return `<${tag}></${tag}>`;
// };
//
// let createBODY = $('body');
// let createDIV = $('div');
// console.log(createBODY); // <body></body>
// console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 // obj.method().method().method()
 ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

// var ezjQuery = {
//   myStr: "",
//   add: function (tag) {
//     this.myStr += `<${tag}></${tag}>`;
//     console.log(this.myStr);
//     return this;
//   }
// };
// ezjQuery
//     .add('body') //<body></body>
//     .add('div') //<body></body><div></div>
//     .add('h1'); //<body></body><div></div><h1></h1>

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */

var ezjQuery2 = {
  //поиск в строке </
  //разбить строку на две строки
  //ставить новый тег между ними

  myStr: "",
  add: function (tag, text) {
    text = text || "";
    if (this.myStr == "") {
      this.myStr += `<${tag}>${text}</${tag}>`;
    }
    else {
      let indexEnd = this.myStr.indexOf('</');
      let startStr = this.myStr.slice(0, indexEnd);
      let endStr = this.myStr.slice(indexEnd);
      this.myStr = `${startStr}<${tag}>${text}</${tag}>${endStr}`;
    }
    return this;
  },
  render: function () {
    let newStr = this.myStr;
    this.myStr = '';
    return newStr;
  }
};

// example
var helloList = ezjQuery2
    .add('body') // <body></body>
    .add('div') // <body><div></div></body>
    .add('ul') // <body><div><ul></ul></div></body>
    .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
    .render();
console.log('hello', helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// //  Обратите внимание, что после вызова render создание строки началось сначала
//
var bodyDiv = ezjQuery2
    .add('body') //<body></body>
    .add('div') //<body><div></div></body>
    .render();
console.log('bodyDiv', bodyDiv); //<body><div></div></body>
document.write(helloList);

function $(tag, text) {
  function FirstMet(myTag) {
    this.getTag = function (myTag) {
      console.log(`<${tag}>${text = text || ""}</${tag}>`);
    }
  };
  var superF = new FirstMet(tag);

  function AllMethods() {
    this.myStr = `<${tag}>${text = text || ""}</${tag}>`;
    this.add = function (tag, text) {
      text = text || "";
      if (this.myStr == "") {
        this.myStr += `<${tag}>${text}</${tag}>`;
      }
      else {
        let indexEnd = this.myStr.indexOf('</');
        let startStr = this.myStr.slice(0, indexEnd);
        let endStr = this.myStr.slice(indexEnd);
        this.myStr = `${startStr}<${tag}>${text}</${tag}>${endStr}`;
      }
      return this;
    };
    this.render = function () {
      console.log(this.myStr);
      this.myStr = '';
    };
  }

  var allMethods = new AllMethods();
  if (tag == undefined) {
    return superF.getTag();
  }
  else {
    return allMethods;
  }

};

$('body').add('li', 'hi').add('span').render();
// $('body'); так не работает





