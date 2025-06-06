let decks = [
    { id: 1, name: "Spellcaster Power", cards: [5] },
    {id: 2, name: "Dark Dragon", cards:[2]}
];

exports.findAll = () => {
    return decks;
};

exports.findById = (id) => {
    return decks.find(d => d.id === id);
};

exports.addCardToDeck = (deckId, cardId) => {
    const deck = this.findById(deckId);
    if (!deck) throw new Error('Deck not found');
    
    if (!deck.cards.includes(cardId)) {
        deck.cards.push(cardId);
    }
    
    return deck;
};