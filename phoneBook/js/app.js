class App {
  constructor(options) {
    this.pageName = options.pageName;
    this.navData = options.navData;
    this.placeholderSearch = 'Search';
    this.theadData = options.theadData;
    this.userData = options.userData;
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

  createSearchBlock(parent) {
    const form = this.createTag('form', parent, 'form-inline search-form');
    const formDiv = this.createTag('div', form, 'form-group');
    formDiv.innerHTML = `<div class="form-group"><label class="sr-only" for="search">${this.placeholderSearch}</label><input class="form-control" type="text" id="search" placeholder="Search"></div>`;
  }

  createTR(parent, objData, typeCell) {
    if (typeCell === 'th') {
      let trHtml = this.createTag('tr', parent);
      objData.forEach(elem => {
        trHtml.innerHTML += `<th>${elem}</th>`;
      });
    }
    else if (typeCell === 'td') {
      objData.forEach(elem => {
        let trHtml = this.createTag('tr', parent);
        for (let key in elem) {
          if (key === 'firstName' || key === 'lastName' || key === 'email') {
            trHtml.innerHTML += `<td>${elem[key]}</td>`;
          }
        }
      });
    }
  }

  createNav(parent) {
    const myNav = this.createTag('nav', parent, 'main-nav');
    this.navData.forEach(elem => {
      let linkClassName = elem.linkActive ? 'tab active' : 'tab';
      myNav.innerHTML += `<a href="${elem.href}" class="${linkClassName}">
        <span class="${elem.spanOneClass}" ${elem.spanOneAttr}=${elem.spanOneAttrValue}></span>
        <span class="${elem.spanTwoClass}">${elem.linkText}</span>
      </a>`;
    });
    return myNav;
  }

  createFooter() {
    const footer = this.createTag('footer', this.app, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    this.createNav(div)

  }

  tableSort() {
    let thCell = document.querySelectorAll('th');
    let self = this;

    [...thCell].forEach(elem => {
      elem.onclick = function (e) {
        let control = e.target;
        let field;

        if (control === thCell[0]) {
          field = 'firstName';
        }
        if (control === thCell[1]) {
          field = 'lastName';
        }
        if (control === thCell[2]) {
          field = 'email'
        }

        const curState = self.userData.sort((a, b) => {
          return a[field] > b[field];
        });
        let tbodyHtml = document.querySelector('tbody');
        tbodyHtml.innerHTML = '';
        self.createTR(tbodyHtml, curState, 'td');
      }
    });
  }

  header() {
    const header = this.createTag('header', this.app, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.innerHTML = `<h2>${this.pageName}</h2>`;
  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    const searchHtml = this.createSearchBlock(div);
    const table = this.createTag('table', div, 'table table-hover contacts');
    const thead = this.createTag('thead', table);
    const theadData = this.createTR(thead, this.theadData, 'th');
    const tbody = this.createTag('tbody', table);
    const tbodyData = this.createTR(tbody, this.userData, 'td');
    this.createFooter();
  }

  render() {
    this.header();
    this.main();

  }
}

const app = new App({
  pageName: 'Contacts', navData: [
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
  theadData: ['Name', 'Last name', 'Email'],
  userData: [
    {
      id: 1,
      firstName: "Zoya",
      lastName: "Murrthum",
      age: 25,
      gender: "F",
      phoneNumber: "0966886843",
      deleted: false,
      email: "psproule0@indiegogo.com"

    },
    {
      id: 2,
      firstName: "Elenore",
      lastName: "Deehan",
      age: 9,
      gender: "F",
      phoneNumber: "0964910940",
      deleted: false,
      email: "btrimmill1@techcrunch.com"

    },
    {
      id: 3,
      firstName: "Gayel",
      lastName: "Harpin",
      age: 84,
      gender: "F",
      phoneNumber: "0961273230",
      deleted: false,
      email: "aducker2@dedecms.com"

    },
    {
      id: 4,
      firstName: "Herminia",
      lastName: "Inkles",
      age: 62,
      gender: "F",
      phoneNumber: "0967128172",
      deleted: false,
      email: "eseivwright3@addtoany.com"

    },
    {
      id: 5,
      firstName: "Clari",
      lastName: "Leward",
      age: 42,
      gender: "F",
      phoneNumber: "0967449359",
      deleted: false,
      email: "nhackforth4@bbb.org"

    },
    {
      id: 6,
      firstName: "Charmaine",
      lastName: "Jearum",
      age: 41,
      gender: "F",
      phoneNumber: "0963702820",
      deleted: false,
      email: "ncatto5@cargocollective.com"

    },
    {
      id: 7,
      firstName: "Padgett",
      lastName: "Cairns",
      age: 81,
      gender: "M",
      phoneNumber: "0961692974",
      deleted: false,
      email: "rpesik6@geocities.jp"

    },
    {
      id: 8,
      firstName: "Annecorinne",
      lastName: "Ishchenko",
      age: 52,
      gender: "F",
      phoneNumber: "0964478596",
      deleted: false,
      email: "zwent7@wordpress.org"

    },
    {
      id: 9,
      firstName: "Ivor",
      lastName: "Meiner",
      age: 100,
      gender: "M",
      phoneNumber: "0969920026",
      deleted: false,
      email: "anorthey8@cocolog-nifty.com"

    },
    {
      id: 10,
      firstName: "Zoya",
      lastName: "Bavridge",
      age: 99,
      gender: "F",
      phoneNumber: "0969730998",
      deleted: false,
      email: "fcatenot9@ed.gov"

    }
  ]
});
app.render();
app.tableSort();

