// Algoritmos de busca é quando precisamos buscar um elemento numa busca de elementos, existindo vários tipos

// 1 - Busca linear: percorre cada elemento unitariamente até que seja encontrado algo que bata com o seu parâmetro de busca

// 2 - Busca binária: faz uma divisão do array de elementos pela metade a cada etapa do processo; ele é mais eficiente, mas só funciona se o array estiver devidamente ordenado. 

function linearSearch(array, target){
    let index =-1; //Pois os arrays começam em 0, diremos que nosso index inicial é -1, isto é, um "zero" cnvencional em outros cenários
    let count = 0;
    for(let i =0; i < array.length; i++ ){
        count++
        if(array[i] == target){ // se o array no índice i for igual ao meu target
            index = i // a variável index recebe o valor de i que foi percorrido no for
            console.log(`A busca linear levou ${count} etapas`) // esperado 7
        }
    }
    return index
}

function binarySearch(array, target){
    // ordenar antes caso já não esteja
    let firstIndex = 0; // todo array começa em 0
    let lastIndex = array.length - 1 // porque o tamanho do array não é o último index, ja que eles começam em 0
    let midIndex = 0; // O midIndex será alterado e calculado dnetro do laço de repetição
    let count = 0;
    while(lastIndex >= firstIndex){ // laço necessário, meu último index tem de ser maior que meu primeiro
        count++
        midIndex = Math.floor((firstIndex + lastIndex) / 2) // o método Math.floor() arredonda para o menor inteiro
                                                            // como o array tem tamanho 7, o valor será 3
        if(target > array[midIndex]){ // se meu target for maior que o midIndex calculado
            firstIndex = midIndex + 1 // eu mudo meu firstIndex para ser um acima da metade calculada, e segue buscando
        } else if(target < array[midIndex]){// ao contrário, se meu target é menor que o índice do meio calculado
            lastIndex = midIndex - 1 // meu lastIndex precisa ser menor, então ele receberá o valor do meio - 1
        } else{ // Caso onde a busca termina de fato
            console.log(`A busca binária levou ${count} etapas`) // esperado 3
            return midIndex
        }
    }
    return -1 // caso de falha na busca do elemento
}

const array = [1,2,3,4,5,6,7,8]
const target = 7;
const linearIndex = linearSearch(array, target)
const binaryIndex = binarySearch(array, target)

console.log(`Busca linear - Achou o elemento no index ${linearIndex}.`)
console.log(`Busca Binária - Achou o elemento no index ${binaryIndex}.`)
