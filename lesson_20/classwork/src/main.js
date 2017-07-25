const url = 'https://easycode-js.herokuapp.com/';

// var button = document.createElement('button');
// var div = document.createElement('div');
//
// button.textContent = 'button';
// document.body.appendChild(button);
// document.body.appendChild(div);


// const serverRequestGET = (callback) => {
//   let xhr = new XMLHttpRequest();
//
//   xhr.addEventListener('readystatechange', () => {
//     if(xhr.readyState === 4){
//       div.innerHTML += '<hr>' + xhr.responseText;
//     }
//   });
//   xhr.open('GET', url + 'test', true);
//   xhr.send();
// }
//
// button.addEventListener('click', () => {
//   serverRequestGET();
// });

const newUser = {
  fullName: 'hello from easy code',
  email: 'hello@ok.ok'
}

const myData = {
  fullName: '_________Maksim',
  email: 'test@test.com'
}

// var button2 = document.querySelector('.btn2');
// var button3 = document.querySelector('.btn3');

// button2.addEventListener('click', () =>{
//   let xhrPOST = new XMLHttpRequest();
//
//   xhrPOST.addEventListener('readystatechange', () =>{
//     if(xhrPOST.readyState === 4){
//       console.log('response: ', JSON.parse(xhrPOST.response));
//       console.log('responseText: ', xhrPOST.responseText);
//
//
//     }
//   });
//   xhrPOST.open('POST', 'https://easycode-js.herokuapp.com/test/users');
//   xhrPOST.setRequestHeader('Content-Type', 'application/json');
//   xhrPOST.send(JSON.stringify(newUser));
//
// });
// button3.addEventListener('click', () => {
//   let xhrPOST = new XMLHttpRequest();
//
//   xhrPOST.addEventListener('readystatechange', () =>{
//     if(xhrPOST.readyState === 4){
//       console.log('response: ', JSON.parse(xhrPOST.response));
//       console.log('responseText: ', xhrPOST.responseText);
//
//
//     }
//   });
//   xhrPOST.open('POST', 'https://easycode-js.herokuapp.com/maks/users');
//   xhrPOST.setRequestHeader('Content-Type', 'application/json');
//   xhrPOST.send(JSON.stringify(myData));
// });

let btnSend = document.querySelector('.send');

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = myForm.elements.name;
  let email = myForm.elements.email;

  if(!name.value){
    alert('поле имя не заполнено');
  }
  if(!email.value){
    alert('поле email не заполнено');
  }
  console.log(name.value, email.value);


});

