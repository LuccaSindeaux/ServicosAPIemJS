const cardService = require('../services/cardService');

exports.getAllCards = async (req, res, next) => {
    try {
        const cards = await cardService.getAllCards();
        res.json(cards);
    } catch (err) {
        next(err);
    }
};

exports.getCardById = async (req, res, next) => {
    try {
        const card = await cardService.getCardById(parseInt(req.params.id));
        if (!card) return res.status(404).json({ message: 'Card not found' });
        res.json(card);
    } catch (err) {
        next(err);
    }
};