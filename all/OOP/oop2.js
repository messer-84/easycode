function Rabbit(name){
  this.name = name;
}

Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

var rabbit = new Rabbit('Rabbit');

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

/* Первый вызов ставит this == rabbit, остальные ставят this равным Rabbit.prototype, следуя правилу "this – объект перед точкой".
Так что только первый вызов выведет Rabbit, в остальных он будет undefined.
*/