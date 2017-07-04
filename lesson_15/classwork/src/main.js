// //
// var str1 = 'Javascript is rule';
// var str3 = 'Javascript is is is is rule';
//
//
// function checkStr(str) {
//   // var re = new RegExp('Javascript');
//   var re = /Javascript/;
//   return re.test(str);
// }
//
// console.log(checkStr(str1));
//
//
// let replaceStr3 = str => {
//   return str.replace(/is/, '%%%')
//       .replace(/is /g, '')
//       .replace('%%%', 'is');
// }
// console.log(replaceStr3(str3));

let create = tag => document.createElement(tag);

var arrText = ['Javascript', 'react', 'node.js'];


const h1 = create('h1');
h1.textContent = 'Hello easycode';
document.body.appendChild(h1);


const ul = create('ul');

//foreach
for (var i = 0; i < arrText.length; i++) {

  let elem = arrText[i];
  let li = create('li');
  li.textContent = elem;
  ul.appendChild(li);

}
document.body.appendChild(ul);




