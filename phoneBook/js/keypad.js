class Keypad {
  constructor(options) {
    this.pageName = options.pageName;
    this.navData = options.navData;
    this.arrayKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
    this.app = document.querySelector('.app');


  }

  createTag(tag, parent, mClass) {
    mClass = mClass || false;
    var myTag = document.createElement(tag);
    if (mClass) {
      myTag.className = mClass;
    }
    parent.appendChild(myTag);
    return myTag;
  }

  createNav(parent) {
    const myNav = this.createTag('nav', parent, 'main-nav');
    let navStr = '';
    this.navData.forEach(elem => {
      let linkClassName = elem.linkActive ? 'tab active' : 'tab';
      navStr += `<a href="${elem.href}" class="${linkClassName}">
        <span class="${elem.spanOneClass}" ${elem.spanOneAttr}=${elem.spanOneAttrValue}></span>
        <span class="${elem.spanTwoClass}">${elem.linkText}</span>
      </a> `;
    });
    myNav.innerHTML = navStr;
    return myNav;
  }

  createFooter() {
    const footer = this.createTag('footer', this.app, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    this.createNav(div)
  }

  createNumberHolder(parent) {
    const number = this.createTag('div', parent, 'number');
    number.innerHTML = `<span id="addUser">+user </span><span class="numbers"></span><span id="deleteNumber">del</span>`;
  }

  createKeypadData(parent) {
    this.arrayKeys.forEach(elem => {
      parent.innerHTML += `<button class="key"> ${elem} </button>`;
    });
    parent.innerHTML += `<button class="key key-call"><span class="glyphicon glyphicon-earphone" aria-hidden="true">CALL</span></button>`;
  }

  funcCalling(selectorKey, selectorNumberField) {
    let keysArr = document.querySelectorAll(selectorKey);
    let numberField = document.querySelector(selectorNumberField);
    [...keysArr].forEach((elem, index, array) =>{
      if(elem !== array[array.length-1]){
        elem.onclick = function () {
          numberField.textContent += this.textContent;
        };
      }
    });

  }
  header() {
    const header = this.createTag('header', this.app, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.innerHTML = `<h2>${this.pageName}</h2>`;
  }
  main(){
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    const numberHolder = this.createNumberHolder(div);
    const keypadWrap = this.createTag('div', div, 'keypad-holder');
    const keypadData = this.createKeypadData(keypadWrap);
    const funcCallingInit = this.funcCalling('.key', '.numbers');
    const footerHtml = this.createFooter();
  }
  render() {
    this.header();
    this.main();

  }
}

const keypad = new Keypad({
  pageName: 'Keypad', navData: [
    {
      href: 'index.html',
      linkClass: 'tab',
      linkActive: true,
      linkText: 'Contacts',
      spanOneClass: 'glyphicon glyphicon-search',
      spanOneAttr: 'aria-hidden',
      spanOneAttrValue: 'true',
      spanTwoClass: 'tab-text'
    },
    {
      href: 'keypad.html',
      linkClass: 'tab',
      linkActive: false,
      linkText: 'Keypad',
      spanOneClass: 'glyphicon glyphicon-th',
      spanOneAttr: 'aria-hidden',
      spanOneAttrValue: 'true',
      spanTwoClass: 'tab-text'
    },
    {
      href: 'edit-contact.html',
      linkClass: 'tab',
      linkActive: false,
      linkText: 'Edit contact',
      spanOneClass: 'glyphicon glyphicon-pencil',
      spanOneAttr: 'aria-hidden',
      spanOneAttrValue: 'true',
      spanTwoClass: 'tab-text'
    },
    {
      href: 'user.html',
      linkClass: 'tab',
      linkActive: false,
      linkText: 'User',
      spanOneClass: 'glyphicon glyphicon-user',
      spanOneAttr: 'aria-hidden',
      spanOneAttrValue: 'true',
      spanTwoClass: 'tab-text'
    },
    {
      href: 'add-user.html',
      linkClass: 'tab',
      linkActive: false,
      linkText: 'Add user',
      spanOneClass: 'glyphicon glyphicon-plus',
      spanOneAttr: 'aria-hidden',
      spanOneAttrValue: 'true',
      spanTwoClass: 'tab-text'
    },
  ]
});
keypad.render();