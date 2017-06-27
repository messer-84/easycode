//4
setTimeout(function () {
  console.log('www');

},0);

// 1
console.log('next');

//5
setTimeout(function () {
  console.log('NEXT TIMER !');

},1000);

//2
console.time('start');
for (let i = 0; i <= 1000000000; i++){
  if(i === 10000){
    console.log('something');
  }
}
console.timeEnd('start');
//3
console.log('yahoo');


