/*
 TASK 0
 Проверьте что строка содержит все символы от "a" до "z"
 */

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты

const solution = str => {
    let newArr = [];

    [...str].forEach(elem => {
        let item = elem.match(/[a-z]/);

        if (item !== null) {
            item = item.join('');
            if (newArr.indexOf(item) == -1) {
                newArr.push(item);
            }
        }
    });
    console.log(newArr.length == 26);
};

solution("wyyga"); // false
solution("qwertyuioplkjhgfdsazxcvbnm"); // true
solution("ejuxggfsts"); // false
solution("qpwoeirutyalskdjfhgmznxbcv"); // true
solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"); // true
solution("0123456789abcdefghijklmnop"); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */
console.log('task2 =======================>>>>>>>>>');

const joinFunc = arr => {
    var newArr = [];
    arr.forEach(checkArr);
    console.log(newArr);

    function checkArr(elem) {
        if (Array.isArray(elem)) {
            elem.forEach((elemIn) => {
                checkArr(elemIn);
            });
        }
        else {
            newArr.push(elem);
        }
    }

};


joinFunc([[1, 2], [3, [4]], 5, 10]);
joinFunc([25, 10, [10, [15]]]);
joinFunc([1, [2, [{a: "b"}]]]);






















