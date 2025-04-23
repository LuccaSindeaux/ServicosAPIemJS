const somador = require("./somador.js");


try{
    console.log(somador.somarNumerosNaturais(-3, 10));
    // mesmo que eu escreva algo que seja correto, ele irá enecerra assim que perceber um erro console.log(funcao(3,1)) -> não executaria
    console.log("Aplicação executada com sucesso!")
} catch(err){
    console.log(err);
} try{
    console.log(somador.somarNumerosNaturais("4","8"))
} catch(err){
    console.log(err);
}

console.log("Fim da aplicação.");