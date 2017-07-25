const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  //logs
  const {url} = request;

  let fileDir = `.${url}`;


  //Читаю файл из файловой системы
  //возвращаю клиенту данный файл
  fs.stat(fileDir, function (err, stat) {
    if (err == null) {
      if (url.includes('favicon')) {
        return;
      }

      if (url === '/') {
        fileDir = './index.html';
      }
      console.log('File exists');
      const someFile = fs.readFileSync(fileDir);
      response.end(someFile);

    }
    else if (err.code == 'ENOENT') {
      console.log('File does not exist');
      const file404 = fs.readFileSync('./src/404.html');
      response.end(file404);

    }
    else {
      console.log('Some other error', err.code);
    }
  });


  console.log('------------');


}).listen(3001, 'localhost', err => {

  if (err) throw err;

  console.log('server running at localhost:3001');

});

/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла

*/