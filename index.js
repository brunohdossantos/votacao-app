'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var candidatos = [{ candidato: 'Fulano', votos: 0, vencedor: false}, { candidato: 'Beltrano', votos: 0, vencedor:false}];
var maxVotos = 3;
var qtdVotos = 0;

io.on('connection', function(socket){
    console.log('a user connected');
            
    if(qtdVotos >= maxVotos){
        socket.emit('votacaoFinalizada', candidatos);
    }
    else {
        socket.emit("candidatos", candidatos.map(c => c.candidato));
        socket.emit("resultado", candidatos);
    }

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('voto', function(candidato){
        console.log('voto para:', candidato);
        if(qtdVotos + 1 <= maxVotos){        
            candidatos[candidato].votos++;
            qtdVotos++;

            var vencedores = [];
            var valor = 0;
            
            for(i = 0; i < candidatos.length; i++){
                
                candidatos[i].vencedor = false;

                if(valor == candidatos[i].votos){
                    vencedores.push(i);
                }
                else if(valor < candidatos[i].votos){
                    vencedores = [];
                    vencedores.push(i);
                    valor = candidatos[i].votos;
                }
            }

            console.log(vencedores);

            for(i = 0; i < vencedores.length; i++){
                candidatos[vencedores[i]].vencedor = true;
            }

            if(qtdVotos == maxVotos){
                io.emit('votacaoFinalizada', candidatos, { for: 'everyone' });
            }
            else {
                io.emit('resultado', candidatos, { for: 'everyone' });
            }
        }
        else{
            io.emit('votacaoFinalizada', candidatos, { for: 'everyone' });
        }
    });
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});
