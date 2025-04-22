array = [{"nome": "Carlos", "idade": 30}, {"nome": "Ana", "idade": 25}, {"nome": "Bruno", "idade": 19}]

function ordenarPorAtributo(array, atributo) {
    return array.sort((a, b) => {
      if (typeof a[atributo] === 'string') {
        return a[atributo].localeCompare(b[atributo]); // ordena strings em ordem alfabética
      } else if (typeof a[atributo] === 'number') {
        return a[atributo] - b[atributo]; // ordena números em ordem crescente
      } else {
        return 0; // se o tipo não for conhecido, não altera a ordem
      }
    });
  }

console.log(ordenarPorAtributo(array, "nome"))
console.log(ordenarPorAtributo(array, "idade"))


// Validar tipos de objetos
function validarEstrutura(obj, modelo) {
    for (let chave in modelo) {
      if (!(chave in obj)) {
        return false; // se a chave não existe no objeto
      }
  
      if (typeof obj[chave] !== modelo[chave]) {
        return false; // se o tipo da chave está errado
      }
    }
    return true;
  }


const obj1 = { nome: "Ana", idade: 25 };
const obj2 = { nome: 39, idade: 25 };
const modelo = { nome: "string", idade: "number" };

console.log(validarEstrutura(obj1,modelo))
console.log(validarEstrutura(obj2,modelo))



// declare uma função que acuse a diferença entre dois JSON
//exemplo: entrada --> obj1 = {"a": 2, "b": 1}, obj2 = {"a": 2, b: "3"}
//         saída   --> {"b":3}
function diferencaJSON(obj1, obj2) {
    let resultado = {};
  
    for (let chave in obj1) {
      if (obj1[chave] !== obj2[chave]) {
        resultado[chave] = obj2[chave];
      }
    }
  
    return Object.keys(resultado).length === 0 ? null : resultado;
    // Outra forma: 
    // if (Object.keys(resultado).length === 0) { --> pega as chaves do meu resultado, devolve um array e pergunta se o tamanho é 0
    //     return null; --> sendo o caso, retorna null
    //   } else {
    //     return resultado; --> não sendo o caso retorna o resultado de 'let resultado = {}'
    //   }
      
  }

console.log(diferencaJSON({ a: 1, b: 2 }, { a: 1, b: 3 }));
console.log(diferencaJSON({ c: 2, b: 2 }, { c: 1, b: 2 }));
console.log(diferencaJSON({ a: 1, b: 2 }, { a: 1, b: 2 }))
  