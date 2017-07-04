/*
 TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
 solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
 solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
 solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
 solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
 solution([2, 2, 44, 44]) => []
 */

const solution = arr => arr.filter(number => {
    return arr.filter(elem => elem === number).length % 2;
}).filter((elem, index, arr) => arr.indexOf(elem) === index);

// let solution = (arr) => {
//     //найти количество совпадений
//     // если длина массива делится на 2 с остатком
//     // добавить в новый массив
//
//     let str = arr.join(',');
//     let arrUniq = [];
//
//     arr.forEach(elem => {
//         let re = new RegExp('\\b' + elem + '\\b', 'g');
//         let arrSame = str.match(re);
//
//         if (arrSame.length % 2 > 0) {
//             if (arrUniq.indexOf(arrSame[0]) == -1) {
//                 arrUniq.push(arrSame[0]);
//             }
//         }
//     });
//
//     console.log(arrUniq);
// };

console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));//34-45
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]));//4-100-5000
console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));//6-5-9-21
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));//8-16-23-42
console.log(solution([2, 2, 44, 44]));

console.log('Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

function replaceSubString(str, homeDir, appDir, appName) {
    var arrRE = ['%%HOMEDIR%%', '%%APP_DIR%%', '%%APPNAME%%'];
    var arrNewValues = [homeDir, appDir, appName];
    //create array with RE
    var arrRegExps = arrRE.map(elem => new RegExp(elem, 'g'));

    //делаем массив с массивами совпадений
    var arrFoundValues = arrRegExps.map(elem => str.match(elem));

    //change
    arrRegExps.forEach((elem, index) => {
        var newValue = arrNewValues[index],
            foundValue = arrFoundValues[index];

        foundValue.forEach(() => str = str.replace(elem, newValue));
    });


    console.log(str);
}

replaceSubString(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js');

// Task 2 в файле - https://github.com/messer-84/easycode/blob/master/lesson_14/homework/task2.html

console.log('Task 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
class CreateHtml {
    constructor() {
        this.arrQuestions = ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'];
        this.arrResponses = [
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1*', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1**', 'Вариант ответа №2', 'Вариант ответа №3'],
        ];
        this.inputData = [
            [
                {name: 'q1_version_1', value: 'q1_ver_1'},
                {name: 'q1_version_1', value: 'q1_ver_2'},
                {name: 'q1_version_1', value: 'q1_ver_3'}
            ],
            [
                {name: 'q2_version_2', value: 'q2_ver_1'},
                {name: 'q2_version_2', value: 'q2_ver_2'},
                {name: 'q2_version_2', value: 'q2_ver_3'}
            ],
            [
                {name: 'q3_version_3', value: 'q3_ver_1'},
                {name: 'q3_version_3', value: 'q3_ver_2'},
                {name: 'q3_version_3', value: 'q3_ver_3'}
            ]
        ];
    }

    createTag(tag) {
        return document.createElement(tag);
    }

    appendTag(parent, elem) {
        parent.appendChild(elem);
    }

    addElement(options) {
        var myTag = document.createElement(options.tag);
        options.parent.appendChild(myTag);
        if (options.text) {
            myTag.textContent = options.text;
        }
    }

    addList(parent) {
        this.arrQuestions.forEach((elem, indexQuestion, arr) => {
            //this == class

            var li = this.createTag('li');
            var ul = this.createTag('ul');

            this.addElement({tag: 'h2', text: elem, parent: li});
            this.appendTag(li, ul);
            this.appendTag(parent, li);


            this.arrResponses[indexQuestion].forEach((elem, index, arr) => {
                    //this == class

                    let subLI = this.createTag('li');
                    let label = this.createTag('label');
                    let inputCheckbox = this.createTag('input');

                    inputCheckbox.setAttribute('type', 'checkbox');
                    inputCheckbox.setAttribute('name', this.inputData[indexQuestion][index].name);
                    inputCheckbox.setAttribute('value', this.inputData[indexQuestion][index].value);

                    label.textContent = elem;
                    label.appendChild(inputCheckbox);
                    subLI.appendChild(label);
                    ul.appendChild(subLI);
                }
            );


        });
    }
}

let createHtml = new CreateHtml();


createHtml.addElement({tag: 'h1', text: 'Tecт по программированию', parent: document.body});

let elemOL = createHtml.createTag('ol');

createHtml.appendTag(document.body, elemOL);

createHtml.addList(elemOL);

createHtml.addElement({tag: 'button', text: 'Проверить мои результаты', parent: document.body});




