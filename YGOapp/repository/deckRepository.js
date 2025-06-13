let decks = [];
let nextId = 1;

class DeckRepository {
    findAll() {
        return decks;
    }

    buscarId(id) {
        return decks.find(function(deck){ 
            return(deck.id === id)});
    }

    criarDeck(deck) {
        const newDeck = { id: nextId++, name: deck.name, cards: [] };
        decks.push(newDeck);
        return newDeck;
    }

    atualizarDeck(id, deckData) {
        const deckIndex = decks.findIndex(d => d.id === id);
        if (deckIndex === -1) {
            return null;
        }
        decks[deckIndex] = { ...decks[deckIndex], ...deckData };
        return decks[deckIndex];
    }

    deletarDeckId(id) {
        const deckIndex = decks.findIndex(d => d.id === id);
        if (deckIndex === -1) {
            return false;
        }
        decks.splice(deckIndex, 1);
        return true;
    }
}

export default new DeckRepository();