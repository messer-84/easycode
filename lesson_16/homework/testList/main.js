const app = {
  appName: 'Тест по программированию',
  submitText: 'Проверить результаты',
  questions: [
    {
      name: 'Вопрос 1',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [0]
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
  checkResult(button){
    var ul = document.querySelectorAll('ul');
    button.onclick = () => {
      [...ul].forEach((elem, index) => {

        var itemsArr = elem.querySelectorAll('li');
        var indexRight = this.questions[index].rightAnswers[0];

        [...itemsArr].forEach((elemIn, indexIn) => {

          var input = elemIn.querySelector('input');

          if (input.checked) {
            var result = indexIn === indexRight ? 'Верно' : 'Ошибка';
            elemIn.insertAdjacentHTML('beforeEnd', `<span> ${result}</span>`);
          }
        });

      });

    };
  },
  createButton(parent){
    const button = this.new('button');
    button.textContent = this.submitText;
    parent.appendChild(button);
    return button;

  },
  render() {
    const htmlMain = this.createMain();
    const htmlH1 = this.createH1(htmlMain);
    const htmlOl = this.createOl(htmlMain);

    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestions(question);
      htmlOl.appendChild(htmlQuestion);
    });
    const htmlButton = this.createButton(htmlMain);
    this.checkResult(htmlButton);


  },
  new(tag) {
    return document.createElement(tag);
  },

};

app.render();

const sayHello = (object) => {
  // const { name } = object;
  // const name = object.name;
};

