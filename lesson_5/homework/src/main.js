/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let betweenArray = [];

    for (let i = a + 1; i < b; i++) {
        betweenArray.push(i);
    }

    return betweenArray;

}

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */
function fizzBuzzArray(num) {
    let numArray = [];


    for (let i = 0; i < num; i++) {
        numArray.push(i);
        let itemArray = numArray[i];

        if (itemArray % 3 === 0 && itemArray % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (itemArray % 3 === 0) {
            console.log('Fizz');
        }
        else if (itemArray % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(itemArray);
        }
    }
}

function fizzBuzz(num) {

    for (let i = 0; i < num; i++) {
        let item = i;

        if (item % 3 === 0 && item % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (item % 3 === 0) {
            console.log('Fizz');
        }
        else if (item % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(item);
        }
    }
}

fizzBuzz(100);

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function () {
}];

function showType(data) {
    let newData = [];


    for (let i = 0; i < data.length; i++) {
        let elem = typeof data[i];

        newData.push(elem);
    }

    console.log(newData);

}

showType(arr);

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив
 содержащий все объекты содержащие свойство unknownAge:true
 */

let array = Array.from({length: 35}).map(
    (value, index) => (index % 2 ? {age: index + 2} : {age: NaN})
);


//console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
//console.log(array.length); // 35

function solution(paramArray) {
    let newAgeArray = [];


    for (let i = 0; i < paramArray.length; i++) {
        let item = paramArray[i];

        if ('age' in item) {

            if (isNaN(item.age)) {
                item.unknownAge = true;
            }
            newAgeArray.push(item);

        }
    }

    return newAgeArray;

}


let newAgeArray = solution(array);

function returnArr(paramArray) {
    let unknowsArray = [];

    for (let i = 0; i < paramArray.length; i++) {
        let unknowsArrayItem = paramArray[i];


        if (unknowsArrayItem.unknownAge === true) {
            unknowsArray.push(unknowsArrayItem);
        }
    }

    return unknowsArray;
}

console.log(returnArr(newAgeArray));








