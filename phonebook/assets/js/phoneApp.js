function PhoneApp() {
  this.database = [{"id":1,"firstName":"Celinda","lastName":"Murrthum","age":25,"gender":"F","phoneNumber":"0966886843","deleted":false},
  {"id":2,"firstName":"Elenore","lastName":"Deehan","age":9,"gender":"F","phoneNumber":"0964910940","deleted":false},
  {"id":3,"firstName":"Gayel","lastName":"Harpin","age":84,"gender":"F","phoneNumber":"0961273230","deleted":false},
  {"id":4,"firstName":"Herminia","lastName":"Inkles","age":62,"gender":"F","phoneNumber":"0967128172","deleted":false},
  {"id":5,"firstName":"Clari","lastName":"Leward","age":42,"gender":"F","phoneNumber":"0967449359","deleted":false},
  {"id":6,"firstName":"Charmaine","lastName":"Jearum","age":41,"gender":"F","phoneNumber":"0963702820","deleted":false},
  {"id":7,"firstName":"Padgett","lastName":"Cairns","age":81,"gender":"M","phoneNumber":"0961692974","deleted":false},
  {"id":8,"firstName":"Annecorinne","lastName":"Ishchenko","age":52,"gender":"F","phoneNumber":"0964478596","deleted":false},
  {"id":9,"firstName":"Ivor","lastName":"Meiner","age":100,"gender":"M","phoneNumber":"0969920026","deleted":false},
  {"id":10,"firstName":"Celestyn","lastName":"Bavridge","age":99,"gender":"F","phoneNumber":"0969730998","deleted":false},
  {"id":11,"firstName":"Glynda","lastName":"Kleinlerer","age":86,"gender":"F","phoneNumber":"0968380860","deleted":false},
  {"id":12,"firstName":"Salli","lastName":"Ucchino","age":28,"gender":"F","phoneNumber":"0969331253","deleted":false},
  {"id":13,"firstName":"Rosina","lastName":"Saville","age":6,"gender":"F","phoneNumber":"0964653608","deleted":false},
  {"id":14,"firstName":"Hale","lastName":"Brookbank","age":78,"gender":"M","phoneNumber":"0962739366","deleted":false},
  {"id":15,"firstName":"Rodolphe","lastName":"Shelford","age":35,"gender":"M","phoneNumber":"0962495273","deleted":false},
  {"id":16,"firstName":"Giustina","lastName":"Boarder","age":36,"gender":"F","phoneNumber":"0969585769","deleted":false},
  {"id":17,"firstName":"Rollo","lastName":"Shrimpling","age":52,"gender":"M","phoneNumber":"0965932962","deleted":false},
  {"id":18,"firstName":"Jenda","lastName":"Lillee","age":57,"gender":"F","phoneNumber":"0965112058","deleted":false},
  {"id":19,"firstName":"Jeromy","lastName":"Pumfrett","age":3,"gender":"M","phoneNumber":"0964656951","deleted":false},
  {"id":20,"firstName":"Addie","lastName":"Blatchford","age":33,"gender":"M","phoneNumber":"0961135305","deleted":false}];

}

//проверка на числа
PhoneApp.prototype.validateNumber = function (phoneNumber) {
  if (isNaN(+phoneNumber)) {
    console.log('Ошибка. Номер состоять из цифр');
    return false;
  }
  return phoneNumber;
};

//форматирование
//PhoneApp.formattingNumber(myApp.validateNumber("0964984998"));
PhoneApp.prototype.formatingNumber = function (phoneNumber) {
  let firstPart = `(${phoneNumber.slice(0, 3)})`;
  let secondPart = ` ${phoneNumber.slice(3, 5)}`;
  let thirdPart = `-${phoneNumber.slice(5, 7)}`;
  let fourthPart = `-${phoneNumber.slice(7)}`;
  return firstPart + secondPart + thirdPart + fourthPart;
};

PhoneApp.prototype.addUser = function(options) {
  let id = this.database[this.database.length - 1].id + 1;
  let firstName = options.firstName;
  let lastName = options.lastName;
  let age = options.age;
  let gender = options.gender;
  let phoneNumber = options.phoneNumber;
  let deleted = options.deleted || false;
  //получить id последнего объекта бд
  //id++ плюс добавить id к приходящим данным
  this.database.push({ id, firstName, lastName, age, gender, phoneNumber, deleted });
};

//poly
PhoneApp.prototype.deleteUser = function(field, value) {
  this.database.forEach(elem => (elem.deleted = elem[field] == value));
  return this.database;
};

//polly
PhoneApp.prototype.editUser = function (options) {

};



PhoneApp.prototype.searchUser = function (options) {

};


const myApp = new PhoneApp();

myApp.validateNumber("0964984998");
myApp.formatingNumber("0999293868");

myApp.addUser({
  "firstName": "AddUser",
  "lastName": "Webben",
  "age": 71,
  "gender": "M",
  "phoneNumber": "0964984998",
  "deleted": false
});