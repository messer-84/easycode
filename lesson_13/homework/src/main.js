const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app'

 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам

 Сделайте несколько экземпляров данной функции
 *
 *
 * */
var arrRE = ['%%APPNAME%%', '%%HOMEDIR%%', '%%APP_DIR%%'];
var arrTo = ['app', './JavaScript-Basic', 'fixtures/src'];

function replaceSubString(str, arrOldValues, arrNewValues) {
  //create array with RE
  var arrRegExps = arrOldValues.map(elem => new RegExp(elem, 'g'));

  //делаем массив с массивами совпадений
  var arrFoundValues = arrRegExps.map(elem => str.match(elem));

  //change
  arrRegExps.forEach((elem, index) => {
    var newValue = arrNewValues[index],
        foundValue = arrFoundValues[index];

    foundValue.forEach(() => str = str.replace(elem, newValue));
  });


  console.log(str);
}

replaceSubString(someWebpackModule, arrRE, arrTo);


class Human {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.gender = options.gender;
    this.height = options.height;
  }
}

class Worker extends Human {
  constructor(options) {
    super(options);
    this.organization = options.organization;
    this.salary = options.salary;
  }

  work() {
    console.log(`${this.name} working`);
  }
}

class Student extends Human {
  constructor(options) {
    super(options);
    this.placeOfStydy = options.placeOfStydy;
    this.grant = options.grant;
  }

  watchSerials() {
    console.log(`${this.name} watch serials`);
  }
}

var jack = new Worker(
    {
      name: 'Jack',
      age: 31,
      gender: 'male',
      height: 180,
      organization: 'BMW',
      salary: 2500
    }
);

var smith = new Student(
    {
      name: 'Smith',
      age: 20,
      gender: 'male',
      height: 190,
      placeOfStydy: 'HNU',
      grand: 1500
    }
);

console.log(jack);
console.log(smith);

jack.work();
smith.watchSerials();

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 1000;

  let serverResponse = i => {
    return setTimeout(function () {
      console.log('zzzz');
      console.log(i);

    }, (timer = timer / 2));
  };

  for (let i = 10; i >= 1; i--) {

    timer = timer * i;

    timer = 0;

    serverResponse(i);

  }

};

//цикл от 10 до одного
// в каждой итерации
// timer умножается на номер итерации
// запускается функция с номером итерации
////в функции возвращается счетчик
////задержка каждый раз меняется
//// переменная timer/2

///генерятся счетчики
// setTimeout(func,50);
// setTimeout(func,225);
// setTimeout(func,900);
// setTimeout(func,3150);

// startTimer();
// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor() {

  }

  query() {
    var i = 5;
    var timer;
    (function timerDown() {
      if (i == 0) {
        console.log('off');
        clearTimeout(timer);
      }
      else {
        console.log(i);
        timer = setTimeout(timerDown, 1000);
      }
      i--;
    })();



  }
}

const dataBase = new DataBase();
dataBase.query();




