const app = {
  appName: 'Тест по программированию',
  submitText: 'Проверить результаты',
  questions: [
    {
      name: 'Вопрос 1',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    }, // приходят с сервера
    {
      name: 'Вопрос 2',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [1]
    }, // приходят с сервера
    {
      name: 'Вопрос 3',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    } // приходят с сервера
  ],

  createLi() {
    return this.new('li');
  },
  createMain(){
    const body = document.body;
    const main = this.new('main');
    body.appendChild(main);
    return main;
  },
  createH1(parent){
    const h1 = this.new('h1');
    h1.textContent = this.appName;
    parent.appendChild(h1);
  },
  createOl(parent){
    const ol = this.new('ol');
    parent.appendChild(ol);
    return ol;

  },
  createQuestions(question){
    const li = this.createLi();
    const h3 = this.new('h3');
    h3.textContent = question.name;
    const ul = this.new('ul');

    question.answers.forEach(answer => {
      const htmlAnswer = this.createAnswer(answer);
      ul.appendChild(htmlAnswer);
    });

    li.appendChild(h3);
    li.appendChild(ul);
    return li;
  },
  createAnswer(answer) {
    const liAnswer = this.createLi();
    const label = this.new('label');
    label.textContent = answer;
    const input = this.new('input');
    input.setAttribute('type', 'checkbox');
    liAnswer.appendChild(input);
    liAnswer.appendChild(label);
    return liAnswer;
  },
  createButton(parent){
    const button = this.new('button');
    button.textContent = this.submitText;
    parent.appendChild(button);
    return button;

  },
  render() {
    //создаем main
    // создаем ol
    // создаем h3+li*3
    const htmlMain = this.createMain();
    const htmlH1 = this.createH1(htmlMain);
    const htmlOl = this.createOl(htmlMain);

    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestions(question);
      htmlOl.appendChild(htmlQuestion);
    });
    const htmlButton = this.createButton(htmlMain);
    const button2 = this.new('button');
    button2.textContent = 'Button-2';
    htmlMain.appendChild(button2);
    const main = document.querySelector('.main');
    button2.onclick = () => {
      // main.innerHTML += creatList(jsLikeArr);
      // const { body } = document;
      // var ul = document.body.children[0];


    };
    var jsLikeArr = ['object', 'function', 'clojures'];

    const creatList = (arr) => {
      let str = "<ul>";

      arr.forEach((elem) => {
        str += `<li>${elem}</li>`;
      });
      str += '</ul>';
      return str;

    };

    var ul = document.querySelectorAll('ul');

    [...ul].forEach(elem => {
      var getRight = document.createElement('div');
      getRight.textContent = 'Верно';
      elem.insertAdjacentElement('afterEnd', getRight);
    });

    // creatList(jsLikeArr);

    // creatList(jsLikeArr);
    var myMain = document.querySelectorAll('main')[0];
    var myDiv = document.createElement('div');
    // myList.innerHTML = creatList(jsLikeArr);
      console.log(myMain);
    var salary = document.createElement('div');
    salary.textContent = '2000';
    myMain.insertAdjacentElement('afterEnd', salary);

    // htmlButton.onclick = function () {
    //   // console.log(htmlMain.children[1].children[1].children[0].textContent = 'Вопрос 4');
    //   // console.log(htmlMain.children[0].nextElementSibling.children[0]);
    //   // console.log(htmlMain.children[1].children[0].children[1].children[2].children[0].checked = true);
    //
    //   // document.querySelectorAll('input')[1].checked = true;
    //   // document.querySelectorAll('input')[4].checked = true;
    //   // document.querySelectorAll('input')[7].checked = true;
    //   // var args = document.querySelectorAll('ul li:nth-child(2)');
    //
    //   // [...args].forEach((elem, index) => {
    //   //   elem.children[0].checked = true;
    //   // });
    // }
  },
  new(tag) {
    return document.createElement(tag);
  },

};

app.render();

var myObject = {
  name: 'Jack',
  email: 'Vorobey'
};

const sayHello = (object) => {
  // const { name } = object;
  // const name = object.name;
};

