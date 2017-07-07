// window.onload = function() {
// };

/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */
console.log('taks 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//трехмерный
var arrMet = [
  [[48, 50, 22], [86, 45, 27], [36, 80, 79]],
  [[57, 63, 70], [87, 96, 29], [28, 2, 70]],
  [[19, 93, 13], [86, 11, 80], [32, 92, 31]]
];
//двухмерный
var newArrMet = [
  [48, 50, 22, 86, 45, 27, 36, 80, 79],
  [57, 63, 70, 87, 96, 29, 28, 2, 70],
  [19, 93, 13, 86, 11, 80, 32, 92, 31]
];

const solution2 = arr => {
  var myArr = [];
  var myArrIn = [];

  if (!!arr[0][0].length) {
    arr.forEach(elem => {
      elem.forEach(elemIn => {
        myArrIn = myArrIn.concat(elemIn);
      });
      myArr.push(myArrIn);
      myArrIn = [];
    });
  }
  else {
    arr.forEach((elem, index) => {
      elem.forEach((elemIn, indexIn) => {
        if (myArrIn.length == 3) {
          myArr.push(myArrIn);
          myArrIn = []
        }
        myArrIn.push(elemIn);
      });
    });
    // add last elements
    myArr.push(myArrIn);
  }
  return myArr;

};
console.log(solution2(arrMet));
console.log(solution2(newArrMet));
console.log('taks 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>');


/*
 Визуализируйте массив, если в коллекции есть свойство children,
 тогда создайте вложенный лист
 name - свойство h1
 children ul->li
 Используйте innerHTML
 */

const navigation = [
  {name: 'Главная'},
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [
          {name: 'Ноутбуки'},
          {name: 'Планшеты'}
        ]
      }
    ]
  },
  {name: 'Профиль'}
];
const visualArray = arr => {
  const createTag = (tag, parent, text) => {
    var inTag = document.createElement(tag);
    inTag.innerHTML = text ? `<h2>${text}</h2>` : '';
    parent.appendChild(inTag);
    return inTag;
  };

  var ul = createTag('ul', document.body);// main list

  arr.forEach(elem => {
    for (let key in elem) {
      if (key === 'children') {
        var subUL = createTag('ul', li);// <ul> - второй уровень

        elem[key].forEach(elemIn => {
          for (let key in elemIn) {
            if (key === 'children') {
              var subSubUL = createTag('ul', subLI);//<ul> - третий уровень
              elemIn[key].forEach(elemSubIn => {
                for (let key in elemSubIn) {
                  createTag('li', subSubUL, elemSubIn[key],);//<li> - третий уровень
                }
              });
            }
            else {
              var subLI = createTag('li', subUL, elemIn[key]);  //<li> - второй уровень
            }
          }
        });
      }
      else {
        var li = createTag('li', ul, elem[key]);//<li> - первый уровень (главная)
      }
    }
  });
};

visualArray(navigation);

///

// 2. Напишите функцию, которая будет получать последнего родителя
// у элемента, но не body

var selector = document.querySelector('li li li');
var body = document.querySelector('body');

const findParent = (element) => {
    var parent = element.parentElement;

    if (parent !== body) {
        return findParent(parent);
    }
    else {
        return parent.lastElementChild;
    }

};
console.log(findParent(selector));


