let database = [
  {
    id: 1,
    firstName: "Zoya",
    lastName: "Murrthum",
    age: 25,
    gender: "F",
    phoneNumber: "0966886843",
    deleted: false
  },
  {
    id: 2,
    firstName: "Elenore",
    lastName: "Deehan",
    age: 9,
    gender: "F",
    phoneNumber: "0964910940",
    deleted: false
  },
  {
    id: 3,
    firstName: "Gayel",
    lastName: "Harpin",
    age: 84,
    gender: "F",
    phoneNumber: "0961273230",
    deleted: false
  },
  {
    id: 4,
    firstName: "Herminia",
    lastName: "Inkles",
    age: 62,
    gender: "F",
    phoneNumber: "0967128172",
    deleted: false
  },
  {
    id: 5,
    firstName: "Clari",
    lastName: "Leward",
    age: 42,
    gender: "F",
    phoneNumber: "0967449359",
    deleted: false
  },
  {
    id: 6,
    firstName: "Charmaine",
    lastName: "Jearum",
    age: 41,
    gender: "F",
    phoneNumber: "0963702820",
    deleted: false
  },
  {
    id: 7,
    firstName: "Padgett",
    lastName: "Cairns",
    age: 81,
    gender: "M",
    phoneNumber: "0961692974",
    deleted: false
  },
  {
    id: 8,
    firstName: "Annecorinne",
    lastName: "Ishchenko",
    age: 52,
    gender: "F",
    phoneNumber: "0964478596",
    deleted: false
  },
  {
    id: 9,
    firstName: "Ivor",
    lastName: "Meiner",
    age: 100,
    gender: "M",
    phoneNumber: "0969920026",
    deleted: false
  },
  {
    id: 10,
    firstName: "Zoya",
    lastName: "Bavridge",
    age: 99,
    gender: "F",
    phoneNumber: "0969730998",
    deleted: false
  }
];
let userData = [
  {
    id: 1,
    firstName: "Petey",
    lastName: "Sproule",
    email: "psproule0@indiegogo.com"
  },
  {
    id: 2,
    firstName: "Burlie",
    lastName: "Trimmill",
    email: "btrimmill1@techcrunch.com"
  }, {
    id: 3,
    firstName: "Averill",
    lastName: "Ducker",
    email: "aducker2@dedecms.com"
  }, {
    id: 4,
    firstName: "Erastus",
    lastName: "Seivwright",
    email: "eseivwright3@addtoany.com"
  }, {
    id: 5,
    firstName: "Nadine",
    lastName: "Hackforth",
    email: "nhackforth4@bbb.org"
  }, {
    id: 6,
    firstName: "Normy",
    lastName: "Catto",
    email: "ncatto5@cargocollective.com"
  }, {
    id: 7,
    firstName: "Raoul",
    lastName: "Pesik",
    email: "rpesik6@geocities.jp"
  }, {
    id: 8,
    firstName: "Zechariah",
    lastName: "Went",
    email: "zwent7@wordpress.org"
  }, {
    id: 9,
    firstName: "Andrea",
    lastName: "Northey",
    email: "anorthey8@cocolog-nifty.com"
  }, {
    id: 10,
    firstName: "Fannie",
    lastName: "Catenot",
    email: "fcatenot9@ed.gov"
  }, {
    id: 11,
    firstName: "Tiffy",
    lastName: "Crackett",
    email: "tcracketta@wunderground.com"
  }, {
    id: 12,
    firstName: "Annice",
    lastName: "Rackam",
    email: "arackamb@yellowbook.com"
  }, {
    id: 13,
    firstName: "Gardiner",
    lastName: "Sutty",
    email: "gsuttyc@noaa.gov"
  }, {
    id: 14,
    firstName: "Tiphany",
    lastName: "Dyne",
    email: "tdyned@weebly.com"
  }, {
    id: 15,
    firstName: "Nevile",
    lastName: "Piatti",
    email: "npiattie@scribd.com"
  }];
class PhoneApp {
  constructor(options) {
    this.database = options.database;
    this.curState = options.database;
  }

  validateNumber(phoneNumber) {
    if (isNaN(+phoneNumber)) {
      console.log("Ошибка. Номер должен состоять из цифр");
      return false;
    }
    return phoneNumber;
  }

  formattingNumber(phoneNumber) {
    let firstPart = `(${phoneNumber.slice(0, 3)})`;
    let secondPart = ` ${phoneNumber.slice(3, 5)}`;
    let thirdPart = `-${phoneNumber.slice(5, 7)}`;
    let fourthPart = `-${phoneNumber.slice(7)}`;

    return firstPart + secondPart + thirdPart + fourthPart;
  }

  addUser(options) {
    let id = this.database[this.database.length - 1].id + 1;
    let firstName = options.firstName;
    let lastName = options.lastName;
    let age = options.age;
    let gender = options.gender;
    let phoneNumber = options.phoneNumber;
    let deleted = options.deleted || false;
    //получить id последнего объекта бд
    //id++ плюс добавить id к приходящим данным
    this.database.push({
      id,
      firstName,
      lastName,
      age,
      gender,
      phoneNumber,
      deleted
    });
  }

  editUser(id, field, value) {
    return [
      ...this.database.map(elem => {
        if (elem.id == id) {
          elem[field] = value;
        }
      })
    ];
  }

  deleteUser(field, value) {
    this.database.forEach(elem => (elem.deleted = elem[field] == value));
    return this.database;
  }

  searchUser(value) {
    return [...this.database.filter(elem => elem.firstName == value)];
  }

  filterUser(field, value) {
    this.curState = this.database.filter(elem => elem[field] == value);
    return this.curState;
  }

  sortUser(field) {
    var arr2 = userData.slice();
    var test = arr2.sort((a, b) => {
      // console.log(a[field], ' > ', b[field]);

      return a[field] > b[field];
    });
    console.log(test);

    //return this.curState;
  }
}


const myApp = new PhoneApp({database: userData, curState: userData});

// console.log(myApp.curState);
myApp.sortUser('firstName');
// console.log(myApp.curState);
// console.log(myApp.searchUser('Zoya'));
// console.log(myApp.filterUser('age', 99));
// console.log('curState', myApp.curState);

