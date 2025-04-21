// É possível fazer a mesma lógica do programa.js mas lendo arquivos externos;
// Isto é útil em casos de termos de fazer um upload de nosso arquivos para uma plataforma que não lerá nossos arquivos locais comn as bibliotecas instaladas.

// Importação do arquivo
let input = require('fs').readFileSync('entrada.txt','utf8'); // lerá  meu fileSystem no formato utf8 (português)
let lines  =  input.split('\n'); 
// Estou falando que minha variável lines recebe a variável input separada pelo \n, comando de quebra de linha
// Essencialmente, minha variável lines transofrma cada linha do entrada.txt num item de um array

// Entrada de dados

let valor1 = lines.shift(); //Ao invés de ler o prompt, ele lerá o a linha e mudará para a próxima
let valor2 = lines.shift();

// Processamentos de dados
let v1 = parseFloat(valor1);
let v2 = parseFloat(valor2);
let soma = v1 + v2;


// Saída de dados
console.log(`Os valores digitados foram: ${valor1} e ${valor2}, a soma deles é ${soma}`);