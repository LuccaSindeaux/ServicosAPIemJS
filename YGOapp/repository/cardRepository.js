let cards = [];
let nextId = 1;

//Valores previamente chumbados na lista para teste
// {
//     id: 1,
//     name: "Mago Negro",
//     type: "Monstro",
//     descricao: "O mais poderoso dos magos em termos de ataque e defesa.",
//     atk: 2500,
//     def: 2000
//   },
//   {
//     id: 2,
//     name: "Dragão Branco de Olhos Azuis",
//     type: "Monstro",
//     descricao: "Um dragão lendário com ataque devastador e força incomparável.",
//     atk: 3000,
//     def: 2500
//   },
//   {
//     id: 3,
//     name: "Dragão Negro de Olhos Vermelhos",
//     type: "Monstro",
//     descricao: "Um dragão feroz com espírito indomável e potencial oculto.",
//     atk: 2400,
//     def: 2000
//   }

class CardRepository {
    findAll() {
        return cards;
    }

    buscarId(id) {
        return cards.find(function(card){ 
            return(card.id === id)});
    }

    adicionarCarta(card) {
        const newCard = { id: nextId++, ...card };
        cards.push(newCard);
        return newCard;
    }

    atualizaCarta(id, cardData) {
        const cardIndex = cards.findIndex(c => c.id === id);
        if (cardIndex === -1) {
            return null;
        }
        cards[cardIndex] = { ...cards[cardIndex], ...cardData };
        return cards[cardIndex];
    }

    deletarCartaId(id) {
        const cardIndex = cards.findIndex(c => c.id === id);
        if (cardIndex === -1) {
            return false;
        }
        cards.splice(cardIndex, 1);
        return true;
    }
}

export default new CardRepository();