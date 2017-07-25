// http://127.0.0.1/echo?message=Hello -> Hello
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

http.createServer((req, res) => {

    console.log( req.method, req.url );

}).listen(1337, 'localhost', err => {
  if(err) throw err;
  console.log('server running');

});