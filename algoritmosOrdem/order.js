//São métodos usados para reorganizar os elementos de um array de acordo com uma ordem específica — normalmente crescente (1, 2, 3...) ou decrescente (3, 2, 1...).

// Existem (essencialmente) quatro tipos

// Bubble Sort - menos eficiente em listas grandes
function bubbleSort(array) {
    let n = array.length; //variável n possui o tamanho do meu array
    for (let i = 0; i < n - 1; i++) { // i irá se repetir até que seu valor seja um abaixo do tamanho do meu array
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Troca os elementos
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Selection Sort Encontra o menor elemento e o coloca na primeira posição, depois o segundo menor na segunda posição... e assim por diante.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let menor = i;
        for (let j = i + 1; j < n; j++) {//Começamos com j = i + 1 porque Já estamos tratando a posição i como candidata ao menor número. Então só precisamos verificar os elementos após i para encontrar um valor menor.
            if (arr[j] < arr[menor]) {// se o array no índice j for menor que o array no índice i (dado o let menor = i)
                menor = j;//então minha variável menor passa ser j
            }
        }
        [arr[i], arr[menor]] = [arr[menor], arr[i]]; //aqui está a troca efetivamente, meu indice i passa a ser menor, e menor passa a ser i (já que i é maior que menor)
    }// o laço se repete até tudo estar em ordem
    return arr;
}

// Insertion Sort: Insere cada elemento na posição correta em uma parte já ordenada do array.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let atual = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > atual) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = atual;
    }
    return arr;
}


// Quick Sort: Escolhe um pivô, separa (particiona) o array em dois: 1)Um com os elementos menores que o pivô; 2)Outro com os elementos maiores que o pivô.
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let menores = [];
    let maiores = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            menores.push(arr[i]);
        } else {
            maiores.push(arr[i]);
        }
    }

    return [...quickSort(menores), pivot, ...quickSort(maiores)];
}

// sort é um método do JS que funciona para strings, mas há uma forma de faze-lo funcionar com números
let numbers = [8,4,2,7,12,45,62,15];
numbers.sort((a,b)=>{
    return a - b
})
console.log(numbers)

// o sort normal seria só numbers.sort(), e colocaria todos os núemros com 1 primeiro, depois os com 2 e assim por diante
// ordenando por ordem alfabética os números. 


// O perigo do sort é que ele MUDA PARA SEMPRE o array original, e as vezes isto não é interessante, já que devemos por vezes eguir a ordem de um bvanco de dados.

// Há então um novo método que cria um novo array com os mesmos elementos do original, mas mudar sua ordem. 
// O método é o toSorted(), e ele fica melhor declarado dentro de uma variável

let numbersRay = [8,4,2,7,12,45,62,15];

const sortedNumbers = numbersRay.toSorted((a,b) => a - b);
console.log(numbersRay); // mostrará o array original [8,4,2,7,12,45,62,15]
console.log(sortedNumbers);// mostrará o array ordenado [2,4,7, 8,12,15,45,62]