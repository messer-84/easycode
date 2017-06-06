var arr = [1, 10, 100, 2, 50];


// sort возвращает
arr.sort(function (elem1, elem2) {
// console.log('elem1',elem1);
// console.log('elem2',elem2);
  return elem1 - elem2;
}); // 1,2,10,50,100


var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArr(arr) {
  var sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i]
  // }
  // return sum;

  arr.forEach(function (elem) {
    sum += elem;
  });

  return sum;


}
//console.log(sumArr(arr2));

function sum(arr) {
  return arr.reduce(function (prevValue, value, index, arr) {
    prevValue += value;
    return prevValue;
  }, 0);
}

function editArray(arr) {

  return arr.reduce(function (prevValue, value, index, arr) {

    return index == 0 ? prevValue += value : prevValue += '-' + value;

  }, '');
}
console.log(sum(arr2));
console.log(editArray(arr2));

// Замыкания это область действия которая создается при объявлении функции и позволяет ей получать доступ и манипулировать внешними по
// отношению к ней переменными

// замыкания это возможность хранить состояния функции


function helloUser(name) {
  return function () {
    console.log('privet ' + name);
  }
}
const user = helloUser('Maksim')();
console.log(user);

//сделайте функцию которая будет складывать 2 числа

// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// const number15 = add(5)(10);
//
// console.log(number15);

const plusOne = counter();

function counter() {
  //возвращать объект
  //в объекте должен быть метод add
  //показывать в консоли цифру на 1 больше предыдущей

  return {
    countData: 1,
    add: function () {
      console.log(this.countData++);

    }
  }
}


plusOne.add();
//1
plusOne.add();
//2
plusOne.add();
//3























