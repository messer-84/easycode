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

// fn.length == arguments.length

function addMethod(object, name, fn) {

    let method = object[name];

    object[name] = function () {
        if(fn.length === arguments.length){
            fn.apply(this, arguments);
        }else if(typeof  method === 'function'){
            method.apply(this, arguments);
        }
    }

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
//
junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'






