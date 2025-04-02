let a,b;
    a = 10;
    b = "10";

//  a == b --> True, pois avalia somente valores
//  a === b --> false, pois avalia valor e TIPO de dado, no caso um inteirop não é igual a uma string

// veritfica o tipo de dado da variável --> typeof(a)

//Operador ternário é uma fprma simplificada de realizar um if else
let tabordaBrother, tabordaSister;
    tabordaBrother = "Patric";
    tabordaSister = "Gabrieli";

    //Utilização de ternários
const tabordaVerify = (tabordaBrother === tabordaSister) 
    ? "Os tabordas são os mesmos"  //if
    : "Uma é a Taborda sister, o outro é o brother." //else

console.log(tabordaVerify);

//If e else sem ser ternário (recomendado para linhas maiores de código)
let x = 20;
let y = 30;
if(x > y){
    console;log("Condição: ", "x > y");
} else if (x < y){
    console.log("Condição: ", "x < y");
} else{
    console.log("Condição: ", "x = y");
}

//criação de laços/loops: for
for (let i = 0; i < 5; i++){
    console.log('i: ', i);
}

//Uso de for in --> exclusivo de arrays
let marcasCarros = ["GM", "Fiat", "Renault"];
for(let marca in marcasCarros){
    console.log("índice: ", marca)
}
for(let carro of marcasCarros){
    console.log("Carro: ", carro);
}


//Variáveis sem definição de valor
let testeUndefined;
console.log("Valor de testeUndefined: ", testeUndefined);
