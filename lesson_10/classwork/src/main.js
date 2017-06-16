// функция-контструктор
// КЛАСС
function User(name) {
    this.name = name;
    //return this;
}

let userOleg = new User('Oleg');
let userPetr = new User('Petr');

// после того как мы разместили страну в World у данной страны добавился метод который получает доступ в bankCash

function Country(name, callback) {
    this.name = name;
    this.currentCash = 0;
    this.callback = callback;
}

function World(bankCash) {
    this.allCountries = [];
    this.bankCash = bankCash;
    this.addCountry = function (country) {
        console.log('this', country);
        this.bankCash = this.bankCash - 20;
        this.allCountries.push(country.name);

        country[country.name] = (params) => {
            country.callback(params);

            country.currentCash = country.currentCash + params;

        };
    }
}

let earth = new World(100);

let ukraine = new Country('ua', function (howMuchMoneyINeed) {
    console.log(howMuchMoneyINeed);
});

earth.addCountry(ukraine);

console.log(ukraine);

ukraine.ua(20);
console.log(earth.bankCash);
console.log(earth.allCountries);
console.log(ukraine.currentCash);



