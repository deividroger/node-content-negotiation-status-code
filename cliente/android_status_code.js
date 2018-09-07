var http = require('http');

var buffer_corpo_resposta = [];

var opcoes = {
    hostname: 'localhost',
    port: 8002,
    path: '/teste',
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

// var json = { nome: 'Deivid'};

// var stringJSon = JSON.stringify(json);


http.get(opcoes,function(response){
    
        response.on('data',function(pedaco){

            buffer_corpo_resposta.push(pedaco);    
        
        });

        response.on('end',function(){

            var corpo_response =  Buffer.concat(buffer_corpo_resposta).toString();
            
                console.log(corpo_response);

                console.log(response.statusCode);

        });
});
// req.write(stringJSon);
// req.end();