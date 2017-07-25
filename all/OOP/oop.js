function Rabbit() {}
/*--под капотом--*/
// Rabbit.prototype = {
//   constructor: Rabbit
// };

var rabbit = new Rabbit();

// Rabbit.prototype и rabbit.__proto__  указывают на
// один и тот же объект
// на объект есть метод constructor
// в этом методе функция-конструктор Rabbit

console.log(Rabbit.prototype);
console.log(rabbit.__proto__);

console.log(rabbit);




var parent = {
  name: "Alex"
};

var child = Object.create(parent);


// console.log(child.name);