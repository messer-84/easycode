class Server {
    constructor(database) {
        this.database = database;
    }

    listen(POST, host) {
        console.log('server running');
    }
}

class Client extends Server {
    constructor(name, database) {
        super(database);
        this.name = name;
    }
}

var http = new Client('name', []);


console.log(http.database);
console.log(http.name);

class Parent {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('Hello ' + this.name);
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
//полиморфизм
    sayHello() {
        super.sayHello();//от родителя
        console.log('привет полиморфизм');
    }

}
var parCat = new Parent('par cat');
var cat = new Child('Кот');
cat.sayHello();
parCat.sayHello();
