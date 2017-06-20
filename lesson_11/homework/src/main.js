let user = {
  name: 'Ivan'
};
let admin = {
  adminEmail: 'admin@mail.com'
};
let guest = {

};
let database = {
  pass: '1234',
  users: []
};
//child - parent
database.__proto__ = user;
user.__proto__ = admin;
// admin.__proto__ = database;
guest.__proto__ = database;