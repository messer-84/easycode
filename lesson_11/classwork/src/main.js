const mainTeacher = {teacherName: 'Doctor House'};

var methodMagic = function () {
    console.log('Халява приди!');
};

const createGroup = () => {
    var group = [];
    for (var i = 0; i < 30; i++) {
        var student = {'studentName': 'student-' + i};
        student.__proto__ = mainTeacher;
        student.someMagic = methodMagic;
        group.push(student);
    }
    return group;
}

console.log(createGroup());


var obj1 = {
    name: 'myName'
}

var obj2 = {
    showName: 'myShowName'
}

var obj3 = {
    lastName: 'myLastName',
    name: 'obj3Name'
}

obj2.__proto__ = obj3;
obj1.__proto__ = obj2;

var animal = {
    legs: 4
}

var cat = {
    name: 'Кот'
}

cat.__proto__ = animal;

console.log(cat.legs);

var food = {
    eat: 'рыба'
}

function User(name) {
    this.name = name;
}

var oleg = new User('Oleg');
var petr = new User('Petr');

function Cars(myArray, cars, name) {
    if (myArray) {
        this.myArray = myArray;
    }
    if (cars) {
        this.cars = cars;
    }
    if (name) {
        this.name = name;
    }

}

var newObj = new Cars([1, 2, 3], {name: 'name'}, 'mes');


console.log(newObj);

//функция возвращает объект - паттерн Модуль
function CreateCounter() {
    let counter = 0;
    return {
        addCounter: function () {
            return console.log(++counter);
        }
    }
}

var hasCounter = new CreateCounter();

hasCounter.addCounter()
hasCounter.addCounter()
hasCounter.addCounter()
hasCounter.addCounter()
hasCounter.addCounter()

function Animal(type) {
    this.type = type;
}

Animal.prototype.run = function () {
    console.log(this.name, 'побежал');
}

function Cat(name) {
    this.name = name;
}

Cat.prototype.sayMeow = function () {
    console.log(this.name, 'says: Meow');
}


function Room(name, square) {
    this.name = name;
    this.square = square;
}

Room.prototype.color = 'orange';

var businessRoom = new Room('business room', 25);

var bedRoom = new Room('bedroom', 15);
bedRoom.color = 'blue';


var kidsRoom = new Room('kids room', 20);

console.log(bedRoom);
console.log(businessRoom);
console.log(kidsRoom);









































































