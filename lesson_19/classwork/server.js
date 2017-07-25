const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  //logs
  const { url } = request;
  console.log(url);

  let fileDir = `.${url}`;

  if(url.includes('favicon')) return;

  if(url === '/'){
    fileDir = './index.html'
  }

  const someFile = fs.readFileSync(fileDir);
  response.end(someFile);
  //Читаю файл из файловой системы
  //возвращаю клиенту данный файл

}).listen(3001, 'localhost', err => {

  if(err) throw err;

  console.log('server running at localhost:3001');

});

/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла

*/