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
  var slider = document.querySelector('.carousel');
  var width = 748;
  const createClone = (content, where) => {
    var cloneSlide = document.createElement('li');
    cloneSlide.innerHTML = content;
    cloneSlide.classList.add('clone');
    slider.insertAdjacentElement(where, cloneSlide);
    return cloneSlide;
  };
  const buttonPrev = document.querySelector('.left');
  const buttonNext = document.querySelector('.right');
  let liArr = [...document.querySelectorAll('li')];
  let lastElem = liArr[liArr.length - 1];
  let firstElem = liArr[0];
  let countElem = liArr.length;
  createClone(firstElem.innerHTML, 'beforeEnd');
  createClone(lastElem.innerHTML, 'afterBegin');
  slider.style.transform = `translate3d(-${width}px, 0, 0)`;


  var main = document.querySelector('main');

  var numberSlide = document.createElement('div');
  main.appendChild(numberSlide);
  numberSlide.textContent = '1';
  var currentNumber = numberSlide.textContent;

  document.body.appendChild(main);
  firstElem.classList.add('selected');

  buttonNext.onclick = function (e) {
    sliderMove(e.target);
  };

  buttonPrev.onclick = function (e) {
    sliderMove(e.target);
  };

  const freezeSlide = (moveWidth) => {
    setTimeout(function () {
      slider.style.transition = '';
      slider.style.transform = 'translate3d(' + moveWidth + 'px, 0, 0)';
    }, 1000);
  };

  const sliderMove = (button) => {
    let directionRight = button.classList.contains('right');
    let slideSelected = document.querySelector('.selected');
    let nextElem, prevElem, futureElem;

    var strProp = slider.style.transform;
    var indexStart = strProp.indexOf('(');
    var indexEnd = strProp.indexOf('px');
    var strData = parseInt(strProp.slice(indexStart + 1, indexEnd)) || 0;
    slider.style.transition = 'transform 1s ease';

    if (directionRight) {
      slider.style.transform = `translate3d(${strData - width}px, 0, 0)`;
      if (slideSelected === lastElem) {
        freezeSlide(-width);
        nextElem = firstElem;
      }
      else {
        nextElem = slideSelected.nextElementSibling;
      }
      futureElem = nextElem;
      currentNumber = currentNumber == countElem ? '1' : ++currentNumber;
    }
    else {
      slider.style.transform = `translate3d(${strData + width}px, 0, 0)`;
      if (slideSelected === firstElem) {
        freezeSlide(-width * countElem);
        prevElem = lastElem;
      }
      else {
        prevElem = slideSelected.previousElementSibling;
      }
      futureElem = prevElem;
      currentNumber = currentNumber == '1' ? countElem : --currentNumber;

    }
    numberSlide.textContent = currentNumber;

    slideSelected.classList.remove('selected');
    futureElem.classList.add('selected');

  };


};


carousel();