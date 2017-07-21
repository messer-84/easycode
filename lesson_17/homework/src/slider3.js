class ECSlider {
  constructor({ activeElementIndex, sliderTagName }) {
    this.sliderTag = document.querySelector('.' + sliderTagName);
    // MODEL
    this.state = {
      activeElementIndex,
      totalSliderLength: this.sliderTag.childElementCount
    };

    this.buttonLeft = document.querySelector('.ec-left');
    this.buttonRight = document.querySelector('.ec-right');

    this.events();
  }

  moveLeft() {
    console.log(this);
    const { activeElementIndex } = this.state;
    const nextActiveElementIndex = activeElementIndex - 1;
    if (nextActiveElementIndex < 0) {
      return;
    }
    // VIEW
    this.updateView(activeElementIndex, nextActiveElementIndex);
  }

  updateView(oldElementIndex, nextActiveElementIndex) {
    this.sliderTag.children[oldElementIndex].style.display = 'none';
    this.sliderTag.children[nextActiveElementIndex].style.display = 'block';
    // TODO move MODEL
    this.state.activeElementIndex = nextActiveElementIndex;
  }

  moveRight() {
    console.log(this);
    // const { name } = object;
    // const name = object.name;
    const { activeElementIndex, totalSliderLength } = this.state;
    const nextActiveElementIndex = activeElementIndex + 1;
    if (nextActiveElementIndex === totalSliderLength) {
      return;
    }

    this.updateView(activeElementIndex, nextActiveElementIndex);
  }

  events() {
    this.buttonLeft.onclick = this.moveLeft.bind(this);
    this.buttonRight.onclick = this.moveRight.bind(this);
  }

  static start(options) {
    return new ECSlider(options);
  }
}
