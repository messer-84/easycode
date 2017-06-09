// es6 Object

let myObject = {
    es5function: function () {
        for (let key in myObject) {
            console.log(key);
        }
    },
    es6function(){
        for (let key in myObject) {
            console.log(key);
        }
    },
    es66function(){
        var arr = Object.keys(myObject);
        arr.forEach(function (elem) {
            console.log(myObject[elem]);
        });
    },
    length: 10
};

// myObject.es5function();
// myObject.es6function();
// myObject.es66function();

//

let sum = function (a, b) {
    return a + b;
};

let sumES6 = (a, b) => {
    console.log('sum es6');
    return a + b;
}

let pow = (a) => {
    return a * 2;
}

console.log(pow(8));

let double = (a) => a * 2;
let double2 = a => a * 2;

var mySalary = [1000, 1500, 2000, 2500, 3500];

let oldStyle = function (array) {
    return array.filter(function (elem) {
        return elem > 1500;
    });
}

let es6Style = array => array.filter(elem => elem > 1500);

console.log(es6Style(mySalary));
console.log(oldStyle(mySalary));

var sumArguments = (...args) =>
    args.reduce((prevValue, value) => ( prevValue += value ));


// function showContext() {
//     console.log(this);
// }

var telephoneBook1 = {
    friends: ['торт', 'мороженное', 'пица'],
    helloFriends: showFriends
}
// showContext();

// recipeBook.showContext();

var telephoneBook2 = {
    friends: ['ivan', 'vasya', 'petya'],
    showFriends: showFriends

}

function showFriends() {
    console.log(this.friends);
}

telephoneBook1.helloFriends();

telephoneBook2.showFriends();


const user = {
    name: 'Jack',
    fruits: 'mango, kiwi, banan',
    friends: [
        {
            name: 'Egor',
            fruits: 'apple'
        },
        {
            name: 'Jennie',
            fruits: 'lime'
        },
        {
            name: 'Frodo',
            fruits: 'granate'
        }
    ],
    showFruits(){
        console.log(this.fruits);
    }
}

user.showFruits();





































