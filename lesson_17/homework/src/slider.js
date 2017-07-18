/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
 *
 *
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * Добавьте внизу цифры с текущим активным изображением.
 *
 */

const carousel = () => {
  const buttonPrev = document.querySelector('.left');
  const buttonNext = document.querySelector('.right');
  let liArr = [...document.querySelectorAll('li')];
  var numberSlide = document.createElement('div');
  var main = document.querySelector('main');
  document.body.appendChild(main);
  main.appendChild(numberSlide);

  const findVisibleElem = () => {
    liArr.forEach((elem, index) => {
      if (elem.style.display !== 'none') {
        elem.classList.add('selected');
        numberSlide.textContent = ++index;
      }
    });
  };
  findVisibleElem();


  buttonNext.onclick = function () {
    sliderMove(this);
  };

  buttonPrev.onclick = function () {
    sliderMove(this);
  };

  const sliderMove = (button) => {
    let directionRight = button.classList.contains('right');
    let slideSelected = document.querySelector('.selected');
    let nextElem, prevElem, futureElem;
    let lastElem = liArr[liArr.length - 1];
    let firstElem = liArr[0];
    if (directionRight) {
      if (slideSelected === lastElem) {
        nextElem = firstElem;
      }
      else {
        nextElem = slideSelected.nextElementSibling;
      }
      futureElem = nextElem;
    }
    else {
      if (slideSelected === firstElem) {
        prevElem = lastElem;
      }
      else {
        prevElem = slideSelected.previousElementSibling;
      }
      futureElem = prevElem;
    }
    slideSelected.classList.toggle('selected');
    slideSelected.style.display = 'none';
    futureElem.classList.toggle('selected');
    futureElem.style.display = 'block';
    liArr.forEach((elem,index) => {
      if (elem.classList.contains('selected')) {
        numberSlide.textContent = ++index;
      }
    });

  }
};

carousel();