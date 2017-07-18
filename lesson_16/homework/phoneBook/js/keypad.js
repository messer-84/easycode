class Keypad {
  constructor(options) {
    this.pageName = options.pageName;
    this.navData = options.navData;
    this.arrayKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

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

  createHeader() {
    const header = this.createTag('header', document.body, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.insertAdjacentHTML('beforeEnd', `<h2>${this.pageName}</h2>`)
  }

  createNav(parent) {
    const myNav = this.createTag('nav', parent, 'main-nav');
    this.navData.forEach((elem, index) => {
      let obj = this.navData[index];
      let linkClassName = obj.linkActive ? 'tab active' : 'tab';
      const linkContent =
        `<a href="${obj.href}" class="${linkClassName}">
          <span class="${obj.spanOneClass}" ${obj.spanOneAttr}=${obj.spanOneAttrValue}></span>
          <span class="${obj.spanTwoClass}">${obj.linkText}</span>
        </a>`;
      myNav.insertAdjacentHTML('afterBegin', linkContent);
    });
    return myNav;
  }

  createFooter() {
    const footer = this.createTag('footer', document.body, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    const nav = this.createNav(div);
    footer.appendChild(nav);
  }

  createNumberHolder(parent) {
    const number = this.createTag('div', parent, 'number');
    number.innerHTML = `<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><span class="numbers"></span><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>`;
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

  render() {
    const headerHtml = this.createHeader();
    const mainHtml = this.createTag('main', document.body);
    const div = this.createTag('div', mainHtml, 'container');
    const numberHolder = this.createNumberHolder(mainHtml);
    const keypadWrap = this.createTag('div', mainHtml, 'keypad-holder');
    const keypadData = this.createKeypadData(keypadWrap);
    const funcCallingInit = this.funcCalling('.key', '.numbers');
    const footerHtml = this.createFooter();

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