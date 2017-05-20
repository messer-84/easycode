function hello() {
    console.log('hello world');
}

function helloUser(name) {
    console.log('hello' + name);
}
// helloUser(' Oleg');

function summ(a,b) {
   console.log(a + b);
}

summ(5,7);
/* Если функция ничего не возвращает, эта
функция является процедурой
 */

const createArray = function () {
  return ['10', 10, {name:'da'}]
};

// console.log(createArray);
// console.log(createArray());

function myName(name) {
    return {
        myName: name
    };
}
/* Функция будет принимать 1 аргумент
 - Объект у которого будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр

 */
function editName(obj) {

    return  myName(obj.name.toUpperCase());

    //
    // return {
    //     name: obj.name.toUpperCase()
    // }
}

console.log(editName({name: 'oleg'}));



// myName('Max');