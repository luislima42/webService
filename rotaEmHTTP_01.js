var http = require('http')
var url = require('url')

var callback = function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});

    var parts = url.parse(request.url);

    if(parts.path == "/"){
        response.end("Site Principal");
    }else if(parts.path == "/rota1"){
        response.end("Site Rota 1");
    }else{
        response.end("Rota invalida" + parts.path);
    }
};

var server = http.createServer(callback);

server.listen(3000);
console.log("Servidor rodando, NÃO MEXE");