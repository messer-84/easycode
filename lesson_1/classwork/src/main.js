var name = "Maksim";
var age = 32;
var salary = 5000;
var isTrue = true;

let privet = "Hello world";

const PI = 3.14;

var a = null; // значение не определен
const fes = NaN;
// 1000 / 0 - Infinity

const user = {
    name: 'Maksim',
    age: '32',
    salary: 5000,
    dev: true
};

var obj = {
  subObj: {
      Status: 'easy code student'
  }
};

obj.subObj = {
    Status: 'test'
};

obj.subObj.Status = 'test';

// console.log(name);
// console.log(age);
// console.log(salary);
// console.log(isTrue);

// console.log(user);

console.log(obj.subObj.Status);
let frameworks = ['Angular', 'React', 'Node.js'];
console.log(frameworks);