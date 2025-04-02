// Atividade da Aula - CRUD de Produtos em Memória
// Realize as seguintes operações de um CRUD de produtos (id [gerado], nome, categoria e preco) em memória (utilize array):
// - inserir: insere um produto no array, gerando um id com a ideia de autoincremento.
// - listar: retorna a lista de produtos
// - buscar por id: com base no id, retorna o produto correspondente.
// - atualizar: recebendo o id e em um produto, atualiza na lista o produto relacionado.
// - deletar: remove o produto com o id recebido no parâmetro.
// - pesquisar por categoria: retorna uma lista de produtos correspondente a determinada categoria.
// - pesquisar por nome (like): retorna uma lista de produtos correspondente que contenha a palavra-chave.
// Para testar, realize apenas chamadas de funções do próprio código (sem entrada de dados).
// Após concluir as operações, refatore o código separando as funções em um outro arquivo (chamarei de produto_repository.js na pasta repository) como um módulo. O código principal (chamarei de main.js) deverá chamar esse arquivo.
// Crie também um readme.md explicando a aplicação, assim como mostrando como executar.

let arrayCrud = [];
let nextId = 1;

//Inserir
function insertProdcut(nome, categoria, preco){
    const newProd = {
        id: nextId++, //incremento de id
        nome,
        categoria,
        preco
    };
    arrayCrud.push(newProd);
    return JSON.stringify(newProd, 2)
} 

//Listar
function listProds(){
    return JSON.stringify(arrayCrud, 2);
}

//Buscar por ID
function idSeracher(id){
    const produto = arrayCrud.find(p => p.id ===id);
}

//Atualizar
function updateProduct(id, nome, categoria, preco){
    const produto = arrayCrud.find(p => p.id ===id); //Método find() --> busca pelo id
    if (produto){
        produto.nome = nome || produto.nome;
        produto.categoria = categoria || produto.categoria;
        produto.preco = preco || produto.preco;
        return JSON.stringify(produto, 2);
    };
    return JSON.stringify({ erro: "Produto não encontrado" });
}

//Deletar
function remove(id) {
    const index = arrayCrud.findIndex(p => p.id === id); //método findIndex() retorna o id ou -1 caso não encontre
    if (index !== -1) { 
        const removido = arrayCrud.splice(index, 1);
        return JSON.stringify({ mensagem: "Produto removido com sucesso", produto: removido[0] }, 2);
    }
    return JSON.stringify({ erro: "Produto não encontrado" });
}

//Pesquisar por categoria
function searchCategory(){
    return arrayCrud.filter(p => p.categoria === categoria);
}
//pesquisar por nome (like)
function SearchName(){
    return arrayCrud.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
}



// Exemplo de uso:
// console.log(inserir("Notebook", "Eletrônicos", 3500.00));
// console.log(inserir("Mouse", "Periféricos", 150.00));
// console.log(listar());
// console.log(buscarPorId(1));
// console.log(atualizar(1, "Notebook Gamer", "Eletrônicos", 5000.00));
// console.log(remover(2));
// console.log(listar());