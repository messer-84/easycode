const app = {
  pageName: 'Contacts',
  placeholderSearch: 'Search',
  theadData: ['Name', 'Last name', 'Email'],
  userData: [{
    "first_name": "Hildagarde",
    "last_name": "Eaton",
    "email": "heaton0@ed.gov"
  }, {
    "first_name": "Lyndsie",
    "last_name": "Flacke",
    "email": "lflacke1@kickstarter.com"
  }, {
    "first_name": "Elonore",
    "last_name": "Kopisch",
    "email": "ekopisch2@hibu.com"
  }, {
    "first_name": "Esther",
    "last_name": "Varrow",
    "email": "evarrow3@disqus.com"
  }, {
    "first_name": "Sianna",
    "last_name": "Braffington",
    "email": "sbraffington4@list-manage.com"
  }, {
    "first_name": "Norri",
    "last_name": "Demoge",
    "email": "ndemoge5@army.mil"
  }, {
    "first_name": "Reagan",
    "last_name": "Curnock",
    "email": "rcurnock6@redcross.org"
  }, {
    "first_name": "Renae",
    "last_name": "Ford",
    "email": "rford7@histats.com"
  }, {
    "first_name": "Adel",
    "last_name": "Dymick",
    "email": "adymick8@netlog.com"
  }, {
    "first_name": "Doria",
    "last_name": "Kelinge",
    "email": "dkelinge9@narod.ru"
  }, {
    "first_name": "Raimondo",
    "last_name": "Helis",
    "email": "rhelisa@prlog.org"
  }, {
    "first_name": "Vicki",
    "last_name": "Perrinchief",
    "email": "vperrinchiefb@aol.com"
  }, {
    "first_name": "Noami",
    "last_name": "Bullard",
    "email": "nbullardc@msu.edu"
  }, {
    "first_name": "Evan",
    "last_name": "O'Sherrin",
    "email": "eosherrind@sbwire.com"
  }, {
    "first_name": "Onfre",
    "last_name": "Kelwaybamber",
    "email": "okelwaybambere@jiathis.com"
  }],
  navData: [
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
  ],
  createTag(tag, parent, mClass){
    mClass = mClass || false;
    var myTag = document.createElement(tag);
    if (mClass) {
      myTag.className = mClass;
    }
    parent.appendChild(myTag);
    return myTag;
  },
  createHeader(){
    const header = this.createTag('header', document.body, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.insertAdjacentHTML('beforeEnd', `<h2>${this.pageName}</h2>`)
  },
  createSearchBlock(parent){
    const form = this.createTag('form', parent, 'form-inline search-form');
    const formDiv = this.createTag('div', form, 'form-group');
    const label = this.createTag('label', formDiv, 'sr-only');
    label.textContent = 'Search';
    label.setAttribute('for', 'search');
    const input = this.createTag('input', formDiv, 'form-control');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search');
    input.setAttribute('placeholder', 'Search');
  },
  createNav(parent){
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
  },
  createFooter(){
    const footer = this.createTag('footer', document.body, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    const nav = this.createNav(div);
    footer.appendChild(nav);
  },
  render(){
    const headerHtml = this.createHeader();
    const mainHtml = this.createTag('main', document.body);
    const div = this.createTag('div', mainHtml, 'container');
    const searchBlock = this.createSearchBlock(div);
    const table = this.createTag('table', div, 'table table-hover contacts');
    const thead = this.createTag('thead', table);
    const theadTR = this.createTag('tr', thead);
    this.theadData.forEach(elem => {
      theadTR.insertAdjacentHTML('beforeEnd', `<th>${elem}</th>`);
    });
    const tbody = this.createTag('tbody', table);
    this.userData.forEach(elem => {
      const tr = this.createTag('tr', tbody);
      let obj = elem;
      for (let key in obj) {
        tr.insertAdjacentHTML('beforeEnd', `<td>${obj[key]}</td>`);
      }
    });
    const footerHtml = this.createFooter();
  }
};

app.render();