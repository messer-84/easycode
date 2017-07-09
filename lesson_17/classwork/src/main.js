const root = document.createElement('div');

root.style.backgroundColor = 'red';
root.style.width = '300px';
root.style.height = '300px';

document.body.appendChild(root);
const button = document.createElement('button');
button.textContent = 'Button';
document.body.appendChild(button);
root.classList.add('root-content');

root.onclick = function () {
  root.classList.toggle('circle');
};
var move = 0;
var toggle;


let leftDirection;
root.onmousemove = function () {
  if (!leftDirection) {
    let leftPosition = parseInt(root.style.left) || 0;
    root.style.left = ++leftPosition + 'px';
    if(leftPosition === 400){
      leftDirection = true;
    }
  }


  console.log(move);
};

// root.onmouseover = function () {
//   root.style.top = '50px';
// };
// root.onmouseout = function () {
//   root.style.top = '0';
// };

// button.onclick = change();

var colors = [
  {style: '#222'},
  {style: '#22a'},
  {style: '#27b'},
  {style: '#ccc'},
  {style: '#001'}
];

// button.onclick = function () {
//
//   root.style.backgroundColor = root.style.backgroundColor === 'red' ? 'black' : 'red';
// };
var counter = 0;
// setInterval(function () {
//   root.style.backgroundColor = colors[counter].style;
//   root.textContent = counter;
//   if (counter === colors.length - 1) {
//     counter = 0;
//   }
//   else {
//     counter++;
//     console.log(colors[counter]);
//
//   }
// },1000);








