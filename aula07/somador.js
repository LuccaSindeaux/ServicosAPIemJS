function somarNumerosNaturais(x,y){
    if(typeof x != "number" || typeof y != "number"){
        throw "Valores não são números";
    }

    if(!Number.isInteger(x) || !Number.isInteger(y)){
        throw "Valores não são inteiros";
    }

    if(x < 0 || y < 0){
        throw "Valores não são positivos";
    }

    return x + y
}

module.exports = {
    somarNumerosNaturais
}