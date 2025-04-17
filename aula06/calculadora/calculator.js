function somar(a,b){
    return a+b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b || NaN // ternário
    // if(b==0){
    //     return NaN; // NaN é "Not a Number", pois qualquer número dividido por 0 é impossível
    // }
    // return a/b;
}

module.exports = {
    somar,
    subtrair, 
    multiplicar,
    dividir
    }; // Exporta as funções para serem chamadas numa importação em outro arquivo