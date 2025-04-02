CRUD do exercicio 3:
    //Buscar por ID
    function idSeracher(id){
        const produto = arrayCrud.find(p => p.id ===id); //constante produto é um método que busca o array e para no primeiro elemento que satisfaça a busca. Neste caso, o argumento dele é o id. E p => p.id === id é uma arrow function que para cada item p (produto) no array, ele verifica se p.id (ID do produto) é igual ao id passado como argumento.
    }

    //Atualizar
    function updateProduct(id, nome, categoria, preco){
    const produto = arrayCrud.find(p => p.id ===id); //Método find() --> busca pelo id
    if (produto){
        produto.nome = nome || produto.nome; //Barras parelelas || siginicam OR
        //Se nome tiver um valor válido (truthy), ele será atribuído a produto.nome.Se nome for null, undefined, "" (string vazia) ou 0 (falsy), então produto.nome permanecerá o mesmo.

        produto.categoria = categoria || produto.categoria;

        produto.preco = preco || produto.preco;
        return JSON.stringify(produto, 2); //2 no final cria a endentação, no console.log() não fica tudo na mesma linha
    };
    return JSON.stringify({ erro: "Produto não encontrado" });
}


    //Deletar
    function remove(id) {
    const index = arrayCrud.findIndex(p => p.id === id); //método findIndex() retorna o id ou -1 caso não encontre.
    if (index !== -1) { //Portanto: se o index for DIFERENTE (!==) de -1, ele executará o restante da função

        const removido = arrayCrud.splice(index, 1); //O método splice() modifica itens de um array(removendo,substituindo ou adicionando). 1)O primeiro argumento de splice() é o índice onde você deseja começar a modificar o array. 2) O segundo argumento é o número de elementos que você deseja remover a partir desse índice. Ou seja, a constante index é o que indica o índice baseado num id digitado, e então ele removerá um elemento splice(index, 1)


        return JSON.stringify({ mensagem: "Produto removido com sucesso", produto: removido[0] }, 2);
    }
    return JSON.stringify({ erro: "Produto não encontrado" });
}

    //Pesquisar por categoria
    function searchCategory(){
        return arrayCrud.filter(p => p.categoria === categoria); 
        
        //mesma lógica do id, porém por categoria, ele irá buscar o primeiro produto que aparecer com a categoria digitada. 
    }

    //pesquisar por nome (like)
    function SearchName(){
    return arrayCrud.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
    //inicialmente a lógica é a mesma que a de outras funçõs buscadoras, com a adição diferencial do 
    toLowerCase(), um método que garante que a pesquisa será case-insensitive (não sensível a maiúsculas/minúsculas), ignorando todos os capitalize.

    já o método includes() é o sinônimo de like no SQL. Verifica se uma string contém uma substring específica. Usamos isso para buscar produtos que tenham a palavra-chave no nome, independentemente de onde ela apareça.
}

