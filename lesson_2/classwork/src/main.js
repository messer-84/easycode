const helloString = 'hello';
const iAmString = 'world';
const es6String = `hello world`;

const helloWorld = helloString + iAmString;

// console.log(helloWorld);

let myString = `${helloString}
${iAmString}`;

// console.log(myString[0]);

let user = {
    cars: ['bmw','audi'],
    name: "Maksim"
};

// console.log('У пользователя ' + user.name + ' есть автомобили: ' + user.cars);
// console.log(`У пользователя ${user.name} есть автомобили: ${user.cars}`);

let sameService = "YouTube";

// console.log(sameService.slice(3));// Tube
// console.log(sameService.slice(3, 2));
let myName = 'mAXIM';

myName = myName[0].toUpperCase() + myName.slice(1).toLowerCase();

// myName = myName.slice(0,1).toUpperCase() + myName.slice(1).toLowerCase();

// console.log(myName);
let log = 'privet, kak dela';
// let qwerty = log.split(' ');
// let qwerty = log.replace('privet','hi');
// console.log(log.indexOf('a', 11));// второй аргумент - с какого индекса
// console.log(qwerty);

let xxx = '50';

// console.log(xxx == 50);//true - оператор == приводит xxx к тому типу с которым сравниваем - number
// console.log(xxx === 50);//false
const year2017 = 2017;

console.log(year2017%2000);

console.log(2 ** 3); // возведение в степень es6

let myArray = [10,20,30,40];

//деструктуризация массива

// console.log(Math.max(...[50,10,20]));
console.log(Math.max(...myArray));//40


