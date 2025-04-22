// QUESTÃO 1
// Foi dada uma matriz com arrays dentro dela, cada um destes possui várias letras e números dentro como strings.
// Crie uma função que filtre os números dentro de cada matriz e devolva a soma deles.

function somarNumerosDaMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            let string = matriz[i][j]; //Seleciona a string que está na posição [i][j] da matriz.
            let numeros = [...string].filter(char => !isNaN(char) && char >= '0' && char <= '9');
            // 1 - [...] transforma a string em um array de caracteres. Ex: "a3b9" → ["a", "3", "b", "9"]
            // 2 - .filter(...) percorre os caracteres e mantém somente os que são números entre '0' e '9'
            // 3 - !isNaN(char) verifica se o caractere pode ser interpretado como número
            // 4 - char >= '0' && char <= '9' garante que é um dígito e evita capturar espaços ou outros caracteres estranhos
            if (numeros) {
                // Converte cada dígito para número e soma
                numeros.forEach(n => soma += parseInt(n));
            }
        }
    }
    //O primeiro for percorre cada linha da matriz.
    //O segundo for percorre cada elemento da linha, que é uma string.

    return soma;
}

let matriz1 = [
    ["abc9d"],
    ["e3fgh"],
    ["ijkl"],
    ["m2no"],
    ["pq4r"],
    ["s1t"],
    ["uvw"],
    ["xyz8"],
    ["0z"],
    ["y7z"]
  ];
  // Soma esperada: 9 + 3 + 2 + 4 + 1 + 8 + 0 + 7 = 34

let matriz2 = [
    ["sdf23sdf"],
    ["noNumbersHere"],
    ["ab4cd5ef6"],
    ["z9"],
    ["justtext"],
    ["m88n"],
    ["x7"],
    ["12t"],
    ["pp0qq"],
    ["o1p"]
  ];
  // Dígitos encontrados: 2+3+4+5+6+9+8+8+7+1+2+0+1 = 56

let matriz3 = [
    ["q1w2e3"],
    ["r4t5y"],
    ["u6i"],
    ["o7p"],
    ["a8s"],
    ["d9f"],
    ["g0h"],
    ["jk"],
    ["lz"],
    ["x1c"]
  ];
  // Soma esperada: 1+2+3+4+5+6+7+8+9+0+1 = 56

console.log(somarNumerosDaMatriz(matriz1))
console.log(somarNumerosDaMatriz(matriz2))
console.log(somarNumerosDaMatriz(matriz3))


// QUESTÃO 2
// Foi dada uma matriz com arrays dentro dela, cada um destes possui várias letras maiúsculas e minúsculas.
// Crie uma função que separe as maiúscula das minúsculas, devolva o resultado de cada uma delas numa tupla [x,y]

function contarLetras(matriz) {
    let minusculas = 0;
    let maiusculas = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            let str = matriz[i][j]; //Seleciona a string que está na posição [i][j] da matriz.
            for (let char of str) {
                if (char >= 'a' && char <= 'z') {
                    minusculas++;
                } else if (char >= 'A' && char <= 'Z') {
                    maiusculas++;
                }
            }
        }
    }
    //O primeiro for percorre cada linha da matriz.
    //O segundo for percorre cada elemento da linha, que é uma string.

    return [minusculas, maiusculas];
}

let matriz4 = [
    ["AbC", "xyz", "QW"],
    ["DeF"],
    ["ghI", "JKL"]
];
let matriz5 = [
    ["123", "!!!"],
    ["aBcDe"],
    ["FGH"]
];

console.log(contarLetras(matriz4)); // Resultado esperado: [6 minúsculas, 9 maiúsculas]
console.log(contarLetras(matriz5)); // Resultado esperado: [3 minúsculas, 5 maiúsculas]