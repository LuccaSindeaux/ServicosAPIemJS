let cards = [];
let nextId = 1;

class CardRepository {
    findAll() {
        return cards;
    }

    buscarId(id) {
        return cards.find(function(card){ 
            return(card.id === id)});
    }

    adicionaCarta(card) {
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