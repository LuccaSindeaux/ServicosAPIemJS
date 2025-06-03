const deckService = require('../services/deckService');

exports.getAllDecks = async (req, res, next) => {
    try {
        const decks = await deckService.getAllDecks();
        res.json(decks);
    } catch (err) {
        next(err);
    }
};

exports.addCardToDeck = async (req, res, next) => {
    try {
        const deck = await deckService.addCardToDeck(
            parseInt(req.params.id),
            req.body.cardId
        );
        res.json(deck);
    } catch (err) {
        next(err);
    }
};