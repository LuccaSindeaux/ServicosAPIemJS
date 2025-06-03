const deckRepository = require('../repositories/deckRepository');
const cardRepository = require('../repositories/cardRepository');

exports.getAllDecks = () => {
    return deckRepository.findAll();
};

exports.addCardToDeck = async (deckId, cardId) => {
    const card = cardRepository.findById(cardId);
    if (!card) throw new Error('Card not found');
    
    return deckRepository.addCardToDeck(deckId, cardId);
};
