const tdColor = () => {
  // let tdArray = document.querySelectorAll('td');

  // [...tdArray].forEach(elem => {
  //   elem.onclick = function () {
  //     this.style.backgroundColor = 'red';
  //   }
  // });

  const tbody = document.querySelector('tbody');

  tbody.onclick = function (e) {
    if (e.target.tagName === 'TD') {
      e.target.style.backgroundColor = 'red';
    }
  };

  const willRemoveFunc = () => {
    console.log('hello');

  };

  tbody.addEventListener('click', willRemoveFunc);

  tbody.removeEventListener('click', willRemoveFunc);


};

// tdColor();


let query = selector => document.querySelector(selector);


const block1 = query('.block1');
const block2 = query('.block2');
const block3 = query('.block2');

block1.addEventListener('click', function (e) {
  // alert(e.target.classList);
  alert('block 1')
}, true);

block2.addEventListener('click', function (e) {
  // alert(e.target.classList);
  alert('block 2')

});

block3.addEventListener('click', function (e) {
  // alert(e.target.classList);
  alert('block 3');
  e.stopPropagation();

}, true);