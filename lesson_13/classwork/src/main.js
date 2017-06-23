function Server() {
    //приватные
    var secret_password = 'so secret';
    this.showSecrtePassword = function () {
        console.log(secret_password);
    };
    //защищенные методы
    this._changeSecretPassword = function (newPassword) {
        secret_password = newPassword;
    }
}

Server.prototype.public = function () {

};

var http = new Server();

function Parent() {

}
Parent.prototype.sayHello = function () {
    console.log('Hello' + this.name);
}

function Child(name) {
    this.name = name;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.sayHello = function () {
    console.log('привет полиморфизм');
}

var cat = new Child('hvostik');

function sayHi() {
    console.log('HIIII');
}
console.time('start');
// setTimeout(sayHi(), 3000);

//сначала последнюю
//потом предпоследнюю
//затем первую через таймер

function make1() {
    console.log('1 make same');
}

function make2() {
    console.log('2 even');
}

function make3() {
    console.log('3 time');
}

// setTimeout(make3, 1000);
// setTimeout(make2, 2000);
// setTimeout(make1(), 3000);
// var timerId = setInterval(make1, 2000);

// setTimeout(function () {
//     clearInterval(timerId);
//     console.log('очистка');
// }, 6000);

try {
    some.func();
} catch (e) {
    console.log(e);
    console.log('что-то не так');
} finally {

    console.log('fin stop');

}













