const http = require('http');

//var server = http.createServer(function(request, response){
    //response.writeHead(200, {"Content-Type": "text/plain"});

  //  response.end('Ola Mundo Node!\n');
//})

//server.listen(3000);
//console.log("Servidor rodando em http://localhost:3000/");



var callback = function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});

    response.end('Ola Mundo Node!\n');
};

var server = http.createServer(callback);

server.listen(3000);
console.log("Servidor rodando, NÃO MEXE");