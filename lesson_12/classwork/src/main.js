function Car(wheels, color, doors, type, isStop = true) {
    this.wheels = wheels;
    this.color = color;
    this.doors = doors;
    this.type = type;
    this.isStop = true;
    // this.drive = function () {
    //     console.log('car is driving');
    // }
}

Car.prototype.drive = function () {
    this.isStop = false;
    console.log(this.type + ' поехала');
}

Car.prototype.stop = function () {
    if (!this.isStop) {
        console.log(this.type + ' остановилась');
    }
    else {
        console.log(this.type + ' машина уже стоит');
    }
}


var bmw = new Car(4, 'red', 2, 'bmw');
var lexus = new Car(4, 'black', 4, 'lexus');

bmw.drive();
bmw.stop();
lexus.stop();
bmw.stop();


var cat = {
    legs: 4,
    callKitty(food, food2){
        console.log(this.name + ' kis kis' + ' держи ' + food);
        console.log(food2);
    }
}

var myCat = {
    name: 'Hermiona'
}

var anotherCat = {
    name: 'Belyash'
}

myCat.__proto__ = cat;
anotherCat.__proto__ = myCat;
myCat.callKitty('рыбу', 'корм');
cat.callKitty.call(anotherCat, 'мясо');
cat.callKitty.apply(anotherCat, ['мясо', 'мясо-2']);

var feedBelyash = cat.callKitty.bind(anotherCat);
feedBelyash('индейку', 'tune');

function bind(contextFn, object) {
    return (...args) => {
        contextFn.apply(object, args);
    }
}
var feedBoom = bind(cat.callKitty, anotherCat);


function Creature(type) {
    this.type = type;
}

Creature.prototype.doMagic = function () {
    if (this.type == 'Mage') {
        return this.magic();
    }
    console.log('Вы человек');
}


Human.prototype = Object.create(Creature.prototype);

function Human(type, ears) {
    Creature.call(this, type);
    this.ears = ears;
}

function Mage(type) {
    Creature.call(this, type);
}

Mage.prototype = Object.create(Creature.prototype);

Mage.prototype.magic = function () {
    console.log('ha ha');
}

var Jack = new Human('Воробей', 2);
var John = new Human('Коннор', 150);
var Gendalf = new Mage('Mage');



















