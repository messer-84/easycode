
function stringWordReverse(str) {

  // превращаем строку в массив
  let arr = str.split(' ');
  let newArr = [];
  console.log(arr);//  ["Javascript", "is", "cool", "language", "with", "awesome", "community"]

  for (let i = 0; i < arr.length; i++) {
    // из каждого элемента массива создать массив
    let elem = arr[i];
    //typeof elem string

    elem = elem.split(''); //["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
    // typeof elem  - object - array

    // поворачиваем подмассивы
    elem.reverse(); //["t", "p", "i", "r", "c", "s", "a", "v", "a", "J"]

    // делаем из перевернутых подмассивов подстроки
    // - join - исходный массив не меняется (нужно присваивать)
    elem = elem.join(''); // tpircsavaJ - (string)
    // console.log(elem);


    // создать новый массив из данных строк
    newArr.push(elem);
    // console.log(newArr);

  }
  // создаем строку из нового массива
  let newStr = newArr.join(' ');
  console.log(newStr);

}

function stringWordReverse(str) {

  // превращаем строку в массив
  let arr = str.split(' ');
  let newArr = [];
  //console.log(arr);//  ["Javascript", "is", "cool", "language", "with", "awesome", "community"]

  for (let i = 0; i < arr.length; i++) {
    // из каждого элемента массива создать массив
    let elem = arr[i];
    //typeof elem string

    // разбиваем строки на массивы - поворачиваем массивы - склеиваем массивы в строки
    elem = elem.split('').reverse().join('');
    //typeof elem string


    // создаем новый массив из данных строк
    newArr.push(elem);

  }

  // создаем строку из нового массива
  return newArr.join(' ');

}
console.log(stringWordReverse(js2));