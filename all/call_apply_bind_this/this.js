function Human(name) {
  this.name = name;
}

Human.prototype.say = function (what) {
  console.log(this.name + ": " + what);

};

var alex = new Human('Alex');
alex.say('hi');//Alex: hi
var jack = new Human('Jack');
jack.say('hi');//Jack: hi

alex.say.apply(jack, ['hi']);

alex.say.call(jack, 'hi');