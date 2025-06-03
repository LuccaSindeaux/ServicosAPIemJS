const deckRepository = require('../repositories/deckRepository');
const cardRepository = require('../repositories/cardRepository');

exports.getAllDecks = () => {
    return deckRepository.findAll();
};

exports.addCardToDeck = async (deckId, cardId) => {
    const card = await cardRepository.findById(cardId);
    if (!card) throw new Error('Card not found'); // Certifique-se que está lançando o erro
    
    const deck = await deckRepository.findById(deckId);
    if (!deck) throw new Error('Deck not found');
    
    return deckRepository.addCardToDeck(deckId, cardId);
};