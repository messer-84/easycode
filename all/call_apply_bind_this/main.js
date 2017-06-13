//
// function showFullName() {
//   console.log(this.firstName + ' ' + this.lastName);
// }
//
// user = {
//   firstName: "Dan",
//   lastName: 'Obama'
// };
//
//
// showFullName.call(user);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2


function showFullName(firstPart, lastPart) {
  console.log(this[firstPart] + ' ' + this[lastPart]);
}

user = {
  firstName: "Dan",
  lastName: 'Obama',
  patronym: "Иванович"
};


showFullName.call(user, 'firstName', 'lastName');
showFullName.call(user, 'firstName', 'patronym');

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>3

var obj = {
  p: 666,
  method: function () {
    console.log(this.p);

  }
};

var trap = {
  p: 'its a trap'
};


obj.method.call(trap);

//сделать массив из arguments
function func() {
  var arg = [].slice.call(arguments);
  var arg2 = [...arguments];

  console.log(arg, arg instanceof Array);
  console.log(arg2);

}
func(4, 6, 7, 3, 100);