let prompt = require('prompt-sync')(); // colocação obrigatório para conguir usar a biblioteca prompt-sync.
// o comando mais importante pe ter o "require('prompt-sync')();". Ou seja, a minha variável pode ter qualquer nome.


// Entrada de dados

console.log('Digite o primeiro valor: ');
let valor1 = prompt(); // ao executar o código ele parará aqui no terminal, esperando que o usuário digite algo. 
let valor2 = prompt('Digite o segundo valor: '); // Forma mais correta

// Processamentos de dados
let v1 = parseFloat(valor1);
let v2 = parseFloat(valor2);
let soma = v1 + v2;


// Saída de dados
// console.log('Os valores digitados foram: '+ valor1 + " e " + valor2); é o mesmo que o abaixo
console.log(`Os valores digitados foram: ${valor1} e ${valor2}, a soma deles é ${soma}`); // com crases: boas práticas JS

