<h2>Sobre a criação do trabalho</h2>
- Com a pasta craida, inicia o projeto node nela com "npm init -y";
- Seguido da instalação da do express "npm install express";
- Para o conceito A, que necessota-se de todo testes unitártios e autenticações, tem de ser colocado no terminal:
    "npm install nodemon jest supertest --save-dev"
    e
    "npm install swagger-ui-express swagger-jsdoc"

<h2>Sobre o JSON criado</h2>
Altera-se o script do Json para:
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "test": "jest"
},

<h2>Sobre os respository</h2>
A criação de classes facilita no momento de exportar as funções para serem chamadas nas demais camadas.

<h2>Realização dos testes</h2>
No terminal, digitar "npm run dev", isto vai iniciar a API na porta 3000