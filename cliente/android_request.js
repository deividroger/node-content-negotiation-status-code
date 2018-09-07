var http = require('http');

var buffer_corpo_resposta = [];

var opcoes = {
    hostname: 'localhost',
    port: 8002,
    path: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

var json = { nome: 'Deivid'};

var stringJSon = JSON.stringify(json);


var req = http.request(opcoes,function(response){
    
        response.on('data',function(pedaco){

            buffer_corpo_resposta.push(pedaco);    
        
        });

        response.on('end',function(){

            var corpo_response =  Buffer.concat(buffer_corpo_resposta).toString();
            
            console.log(corpo_response);

        });
});
req.write(stringJSon);
req.end();