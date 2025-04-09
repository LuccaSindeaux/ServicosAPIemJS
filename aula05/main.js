// Importando o export do repository
const produtosRepository = require('./repository/produto_repository.js'); //todas funções no module.export serão importadas
//const {inserir, lsitar} = requiere('./repository/produto_repository'); //outra forma de chamar somente as funções que quero, menos recomendado, deixa o código mais limitado. Obs.: nçao preciso botar a extensão js

// a função produtosRepository tem que ser declarada.

// Main em si
function main() {
    produtosRepository.inserir({nome:"Arroz", categoria:"Alimento", preco:4.7});
    produtosRepository.inserir({nome:"Suco de Laranja", categoria:"Bebida", preco:7.5});
    produtosRepository.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    produtosRepository.inserir({nome:"Coca-cola", categoria:"Bebida", preco:8.9});
    produtosRepository.inserir({nome:"Detergente", categoria:"Limpeza", preco:2.5});

    console.log(produtosRepository.listar());

    console.log("Produto [id=2]: ", produtosRepository.buscarPorId(2));

    console.log("Produtos da categoria Alimento", produtosRepository.pesquisarPorCategoria("Alimento"));

    console.log("Produtos que possuem a letra 'a'", produtosRepository.pesquisarPorNomeLike("a"));

    produtosRepository.atualizar(4, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:4})

    produtosRepository.deletar(4);

    console.log(produtosRepository.listar());

}
 
main();