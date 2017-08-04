var url = 'https://jsonplaceholder.typicode.com/users/';
var url2 = 'http://easycode-js.herokuapp.com/xxx/users';
const userId = [1,2,3];


// userId.map(userId => {
//   fetch(url + userId).then(data => data.json());//Promise
// });
//
// const user1 = fetch(url + 1).then(data => data.json());
// const user2 = fetch(url + 2).then(data => data.json());
// const user3 = fetch(url + 3).then(data => data.json());
//
// const users = [user1, user2, user3];
//
// const users = Promise.all([user1, user2, user3]).then(data => {
//
// });

// users.map( userPromise => {
//   userPromise.then(user => {
//     console.log(user);
//   });
// });

const allUsers = fetch(url2).then(data => data.json());

// const apiData = Promise.all(allUsers).then(data => {
//   console.log(data);
//
// });

// fetch('/users', {
//   method : 'POST',
//   headers: {
//     'Content-Type' : 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'Hubot',
//     login: 'hubot'
//   })
// });

localStorage.setItem('data', 'xxxdata');

