//обратный отсчет
var timerId = setInterval(function () {
  console.log(i);
  if (i == 1) {
    clearInterval(timerId);
    console.log('The web server is down');
  }
  i--;
}, 1000);

//обратный отсчет
var i = 5;
var timer;
(function timerDown() {
  if (i == 0) {
    console.log('off');
    clearTimeout(timer);
  }
  else {
    console.log(i);
    timer = setTimeout(timerDown, 1000);
  }
  i--;
})();

//отсчет вперед
for (var k = 1; k <= 10; k++) {

  (function (index) {
        setTimeout(function () {
          console.log(index);
        }, 1000 * k);
      })(k);

}
