var http = require('http');

var buffer_corpo_resposta = [];

var opcoes = {
    hostname: 'localhost',
    port: 8002,
    path: '/',
    headers: {
        'Accept': 'application/json'
    }
}

http.get(opcoes,function(response){
    
        response.on('data',function(pedaco){

            buffer_corpo_resposta.push(pedaco);    
        
        });

        response.on('end',function(){

            var corpo_response =  Buffer.concat(buffer_corpo_resposta).toString();
            
            console.log(corpo_response);

        });
});