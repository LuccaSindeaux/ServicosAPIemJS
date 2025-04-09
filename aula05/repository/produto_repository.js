//Resolução com mais functions do professor Ries
// Aqui em Repository a ideia é manter o arquivo com as funçõpes separadas do main


let listaProdutos = [];
let autoIncrement = 1;

function listar() {
    return listaProdutos;
}

function buscarPorId(id) {
    /*for(let produto of listaProdutos){
        if(produto.id == id) {
            return produto;
        }
    }*/
    return (listaProdutos.find( //find() pega o primeiro elemento que ele encontrar com o id indicado
        function(produto) {
            return (produto.id == id);   // toda a função declara aqui será o parâmetro do find() nesta linha que indica o id buscado     
        }
    ));
}

function inserir(produto) {
    produto.id = autoIncrement++;
    listaProdutos.push(produto);
}

function buscarIndicePorId(id) { // função para uso interno do sistema, não precisa ser exportada ao main
    return listaProdutos.findIndex((produto) => produto.id === id);
}

function atualizar(id, produtoAtual) {
    let indice = buscarIndicePorId(id);
    if(indice >= 0) {
        produtoAtual.id = id; 
        listaProdutos[indice] = produtoAtual;
    }
}

function deletar(id) {
    let indiceProduto = buscarIndicePorId(id);
    if(indiceProduto >= 0) {
        listaProdutos.splice(indiceProduto, 1);
    }
}

function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter( (produto) => produto.categoria == categoria )
}

function pesquisarPorNomeLike(nome) {
    return listaProdutos.filter ( (produto) => {
        const produtoNomeUpper = produto.nome.toUpperCase();
        const nomeUpper = nome.toUpperCase();
        return (produtoNomeUpper.search(nomeUpper) >= 0);
    })
}


// exportação é realizada por modulação 
module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorNomeLike
} // todas as funções aqui serão exportadas aonde eu chamá-las.