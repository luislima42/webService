var http = require('http')
var url = require('url')
var fs = require('fs')

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    })
}

var callback = function(request, response){
    response.writeHead(200, {"Content-Type": "application/json"});

    var parts = url.parse(request.url);

    if(parts.path == "/"){
        response.end("Site Principal");
    }else if(parts.path == "/rota1"){
        response.end("Site Rota 1");
    }else if(parts.path == "/rota1/cadastro"){
        readFile(response, "cadastro.json")
    }else if(parts.path == "/rota1/catalogo"){
        readFile(response, "catalogo.json")
    }else if(parts.path == "/rota1/dados"){
        readFile(response, "dados.json")
    }
    else{
        response.end("Rota não mapeada: " + parts.path);
    }
};

var server = http.createServer(callback);

server.listen(3000);
console.log("Servidor rodando, NÃO MEXE");