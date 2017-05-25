// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);

// for(let i = 0; i < 10; i++){
//     if(i%2 === 0){
//         // console.log(i);
//
//     }
// }

// const arr = [10,20,30,40];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// function editArray(array) {
//
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]*2);
//     }
// }

// editArray(arr);

// let qwerty = [11,20,31,40,51,60,71,80,91,100];
//
// function getNum(arr){
//     let newNum = [];
//     for(let i = 0; i < arr.length; i++){
//          var elem = arr[i]
//         if( arr[i] % 2 > 0){
//             newNum[newNum.length] = arr[i];
//             // newNum.push(elem);
//         }
//     }
//     console.log(newNum);
//
// }

// getNum(qwerty);

// let myArr = [10,20,{age: 27}, 30,50];
// let i = 0;
// while(i < myArr.length){
//     // console.log(myArr[i]);
//
//     if(myArr[i].age){
//         // console.log('winners');
//         break;
//     }
//
//     i++;
// }

let counter = 0;
let randomValue = Math.random() * 10;

// while(randomValue < 9){
//     let randomValue = Math.random()*10;
//
//     console.log(counter, 'react');
//     console.log(randomValue);
//     counter++;
// }

var project = {
    name: 'Landing page',
    salary: '1200$',
    technology: ['css3', 'html5', 'jquery']
};

for (let key in project) {
    // console.log(key);
}

for (let key in project) {

    let elem = project[key];

    if(  Array.isArray(elem) ){
        for(let i = 0; i < elem.length; i++){
            let itemArray = elem[i];

            console.log(itemArray);
        }
    }
}












