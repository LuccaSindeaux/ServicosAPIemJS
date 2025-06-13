import deckRepository from '../repository/deckRepository.js';

class DeckService {
    getAllDecks() {
        return deckRepository.findAll();
    }

    getDeckById(id) {
        const deck = deckRepository.buscarId(Number(id));
        if (!deck) {
            throw new Error('Deck não encontrado.');
        }
        return deck;
    }

    criarDeck(deck) {
        if (!deck.name) {
            throw new Error('Nome do Deck é obrigatório!');
        }
        return deckRepository.criarDeck(deck);
    }

    atualizarDeck(id, deckData) {
       const updatedDeck = deckRepository.atualizarDeck(Number(id), deckData);
       if (!updatedDeck) {
           throw new Error('Deck não encontrado.');
       }
       return updatedDeck;
    }

    deletarDeckId(id) {
        const success = deckRepository.deletarDeckId(Number(id));
        if (!success) {
            throw new Error('Deck não encontrado.');
        }
    }

    addCardNoDeck(deckId, cardId) {
        const deck = deckRepository.buscarId(Number(deckId));
        if (!deck) {
            throw new Error('Deck not found');
        }

        const card = cardRepository.buscarId(Number(cardId));
        if (!card) {
            throw new Error('Card not found');
        }

        // Regra de negócio: um deck não pode ter mais de 60 cartas
        if (deck.cards.length >= 60) {
            throw new Error('Deck com capacidade máxima de 60');
        }

        // Regra de negócio: não pode ter mais de 3 cópias da mesma carta
        const cardCount = deck.cards.filter(c => c.id === card.id).length;
        if (cardCount >= 3) {
            throw new Error('Cada deck só pode ter 3 cópias de uma mesma carta');
        }

        deck.cards.push(card);
        return deck;
    }

    removeCardDeck(deckId, cardId) {
        const deck = deckRepository.findById(Number(deckId));
        if (!deck) {
            throw new Error('Deck não encontradi');
        }

        const cardIndex = deck.cards.findIndex(c => c.id === Number(cardId));
        if (cardIndex === -1) {
            throw new Error('Carta não encontrada neste deck');
        }

        deck.cards.splice(cardIndex, 1);
        return deck;
    }
}

export default new DeckService();