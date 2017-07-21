/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 * */
console.log('task 0 =========================');

const solution = (arr) => {
  var lidersArr = [];

  arr.forEach((elem, index) => {
    var checkItem = false;

    if (index === arr.length - 1) {
      lidersArr.push(elem);
    }
    else {
      for (var k = index + 1; k < arr.length; k++) {
        var innerElem = arr[k];

        if (elem < innerElem ) {
          checkItem = true;
          break;
        }
      }
      if (checkItem == false) {
        lidersArr.push(elem);
      }
    }
  });

  var uniqArr = lidersArr.filter(function (elemF, indexF, arrayF) {
    return arrayF.indexOf(elemF) === indexF;
  });
  console.log(uniqArr);
}

solution([16, 17, 4, 3, 5, 2]) === [17, 5, 2]
solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]); // [67, 45, 35, 8]
solution([12, 10, 12, 8, 7, 6]); // [12, 8, 7, 6]
solution([1, 2, 3, 4, 5, 4]); // [5, 4]


/*
 * TASK 2
 * Сделайте класс, который будет иметь метод topStyle
 * метод topStyle принимает объект с CSS стилями и добавляет в <head>
 *   новый элемент с данными стилями
 *
 *
 * */
// .topStyle('fetch', {backgroundColor:'blue'});
console.log('task 2 в теге head');

class StyleService {
  topStyle(elemSelector, styles) {
    let head = document.querySelector('head');
    let styleTag = document.createElement('style');
    styleTag.innerHTML = "." + elemSelector + "{";
    head.appendChild(styleTag);
    for (var key in styles) {
      var keyArr = key.split('');
      var newProperty = keyArr.map(elem => {
        var hasUpLetter = /[A-Z]/.test(elem);
        return hasUpLetter ? "-" + elem.toLowerCase() : elem;
      });
      newProperty = newProperty.join('');
      styleTag.innerHTML += `${newProperty}:${styles[key]};`;

    }
    styleTag.innerHTML += '}'

  }
}
const styleService = new StyleService();
styleService.topStyle('fetch', {backgroundColor: 'blue', marginTop: '40px'});

/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */
console.log('task @super =========================');

const cssToJs = (style) => {
  function replacer(result, offset, strStart) {
    return strStart[offset + 1].toUpperCase();
  }

  var jsProp = style.replace(/-\D/g, replacer);
  console.log(jsProp);

}

cssToJs('margin-left');

/*
 Нужно визуализировать keypad.html -> keypad.js
 Нужно визуализировать index.html -> app.js
 Структура виртуализации:

 - header - один блок
 - main - второй блок
 >------ Это 2 разных класса
 У каждого из классов, рендер на странице запускается при помощи метода .render
 innerHTML по максимуму
 https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
 Сделайте чтобы при нажатии на кнопку цифра отобразилась в <span class="numbers">
 */


/*
 https://aleksandra-maslennikova.github.io/telephone-book/index.html
 По клику по заголовку таблицы, таблица сортировалась по соответствующему свойству
 */




