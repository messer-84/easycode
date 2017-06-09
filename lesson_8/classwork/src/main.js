// напишите ф-ю к-рая принмает 1 аргумент
// это массив или объект
// если массив тогда отобразите все значения как строку
// если как объект - отобразите все св-ва в консоле


function initSwitch(data) {
    var isArray = Array.isArray(data);

    switch (isArray) {
        case true:
            console.log(data.join(","));
            break;
        case false:
            for (var key in data) {
                console.log(key);
            }
            break;
        default:
            console.log('default');
    }
}

var arr = [1, 2, 3, 4];
var obj = {
    met1: 'met-1',
    met2: 'met-2',
    met3: 'met-3'
};

initSwitch(obj);

initSwitch(arr);


function randomArguments(a,b,c,d,e) {
    var sum = 0;

    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }



    console.log(sum);
}

randomArguments(10,20,30,40,50);
//при создании объекта, объект создает ссылку в оперативной памяти программы
// и данная ссылка присваивается в переменную.

// объект физически занимает ячейку памяти

// когда мы присваиваем новой переменной существующий объект, то присваивается
// существующая ссылка

var obj ={};
obj.name = "Javascript rulez";

var obj2 = obj;

console.log(obj2.name);

// скопировать объект
// чтобы

var object = {
    name: 'your name',
    id: 50,
    friends: ['Lera', 'Vitya', 'Vladimir'],
    recepts: {
        pizza: {
            ingredients: ['cheeze', 'toast']
        }
    }
}


function cloneObject(data) {
    var newObj = {};
    for(var key in data ){
        newObj[key] = data[key]
    }
    return newObj;
}

var clonedObject = cloneObject(object);

let es5ObjectClone = Object.assign({}, object);

var es7ObjectClone = {...object};
var es7ObjectClone2 = {...object, friends:{...object.friends}};
// имутабельность (хранение ссылок)


object.recepts.mix = {
    ingredients: ['vodka', 'juice']
}

console.log(clonedObject);













