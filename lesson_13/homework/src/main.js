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
var str = someWebpackModule;
var arrRE = [/%%APPNAME%%/g, /%%HOMEDIR%%/g, /%%APP_DIR%%/g];
var arrNew = ['app', './JavaScript-Basic', 'fixtures/src'];
var foundArr = [];

//делаем массив с массивами совпадений
arrRE.forEach(elem => foundArr.push(str.match(elem)));


arrRE.forEach((elem, index) => {
  var changeElem = arrNew[index],
      foundElem = foundArr[index];

  foundElem.forEach(() => str = str.replace(elem, changeElem));
});


console.log(str);

