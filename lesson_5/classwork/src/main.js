function abb(a, b) {
  return a > b ? a : b;
}

// abb(5, 6);


const task1 = function someFunc(paramObjArray, paramNum) {

  if (Array.isArray(paramObjArray)) {

    checkNum(paramObjArray, paramNum);

    // for (let i = 0; i < paramObjArray.length; i++) {
    //     let item = paramObjArray[i];
    //
    //     if (item > paramNum) {
    //         return item;
    //     }
    //
    // }

  }
  else {
    for (let key in paramObjArray) {
      let item = paramObjArray[key];

      if (Array.isArray(item)) {

        checkNum(item, paramNum);

      }
      // if (Array.isArray(item)) {
      //
      //     for (let k = 0; k < item.length; k++) {
      //         let subItem = item[k];
      //
      //         if(subItem > paramNum){
      //             return subItem;
      //         }
      //
      //     }
      // }
    }

  }


};

function checkNum(array, num) {
  for (let k = 0; k < array.length; k++) {
    let subItem = array[k];


    if (subItem > num) {
      console.log(subItem);
      return subItem;

    }

  }
}


const obj = {
  name: 'qwerty',
  qwerty: [1, 2, 100, 20, 10]
};
// const arr = [1, 2, 10, 20, 75];

// task1(obj, 20);
//
// task1(arr, 20);

// объекты в массиве - коллекция

var myArr = [1, 2, 3];

myArr.push(50);

const xxx = myArr.pop();

var firstElem = myArr.shift();// удаляет первый элемент и возвращает

myArr.unshift(800);// добавляет первый элемент и возвращает его
myArr.push(100, 200, 300, 400);
// console.log(myArr.slice(0));
// const someArr = [1,2,3,4,5,6];
// console.log(someArr.splice(1,2));
// console.log(someArr);


var qwe = [1, 2, 3];
// concat - создает новый массив


const js = 'JavaScript_cool-language';
// перевернуть
// console.log(js.split('').reverse().join(''));

const js2 = 'Javascript is cool language with awesome community';
// перевернуть каждое слово


function stringWordReverse(str) {

  // превращаем строку в массив
  // из каждого элемента массива создать массив
  // поворачиваем массивы
  // склеиваем массивы в строки
  // создаем новый массив
  // делаем из нового массива строку и возвращаем

  let arr = str.split(' ');
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    elem = elem.split('').reverse().join('');
    newArr.push(elem);

  }

  // создаем строку из нового массива
  return newArr.join(' ');

}
console.log(stringWordReverse(js2));




