//Classes e objetos


//Criando um objeto
let produto = new Object();
produto.id = 1;
produto.nome = "Folha A4";
produto.preco = 12.50;

//Função com objeto
produto.imprimir = () =>{
    console.log(`${this.id} - ${this.nome}`); //o this é o self em JS
}

produto.imprimir();


//Classes
class Produtos {
    constructor(id, nome, preco){
        this.id = id;
        this.nome = nome
        this.preco = preco
    }
    calcularImposto(){
        return this.preco * 0.1
    }
    imprimir(){
        console.log(`${this.id} - ${this.nome} - ${this.preco}`)
    }
}

//JSON
let produto3 = {
    id: 3,
    nome: "Prdouto 3",
    preco: 50.00
}