# Sistema de Votação em tempo real #


[![Github-Release](https://img.shields.io/github/release/filoe/cscore.svg)](https://github.com/myersBR/votacao-app/releases)

Este trabalho apresenta uma implementação de um sistema de votação em tempo real em um ambiente cliente/servidor virtualizando ferramentas e tecnologias livres que foi desenvolvido como trabalho para a disciplina de Plataforma de Desenvolvimento em Software Livre e Servidores Web.

# Introdução
Geralmente nos sistemas web, a comunicação é realizada através de requisições do cliente para o servidor, ou seja, o servidor somente envia dados para o cliente somente quando é requisitado. Porém existe uma outra forma de comunicação entre eles que é a comunicação em tempo real, em que um servidor sempre envia dados atualizados para os clientes sem precisar de requisições.
Portanto, o objetivo deste trabalho é demonstrar a comunicação em tempo real entre cliente e servidor utilizando um sistema de votação. A demonstração foi realizada em um ambiente virtualizado, sendo uma máquina virtual servidor e outra cliente. O servidor hospeda o sistema, que foi desenvolvido para este trabalho, e o cliente irá utilizá-lo.
Todas as ferramentas e tecnologias utilizadas para o desenvolvimento deste trabalho são livres.

# Ferramentas Utilizadas

 - **Java Script**
 - **Node.js**
 - **Express.js**
 - **Socket.io**
 - **Bootstrap**
 - **JQuery**
 - **Docker**

# Instalação

**1) Download do projeto** ![VIS_SAMPLE](https://github.com/myersBR/votacao-app/archive/latest.tar.gz)

**2) Descompactar arquivo **

**3) Acessar a pasta descompacta **

**4) Criação da imagem **

   - Após acessar a pasta compactada executaremos o comando **docker build -t "nomeDaImagem"**, onde o nomeDaImagem fica a critério para escolha
   
**4) Criação do container e execução da aplicação **

   - Para a criação do container e a execução da aplicação utilizamos o comando **docker run -p "numeroDaPortaExterna":3000 -d "nomeDaImagem"**, onde o "nomeDaImagem é o mesmo que informamos no passo 4 e o parâmetro "numeroDaPortaExterna" é o número da porta que será utilizada para o redirecionamento para a porta 3000 da nossa aplicação.
   

    
    
   
   


