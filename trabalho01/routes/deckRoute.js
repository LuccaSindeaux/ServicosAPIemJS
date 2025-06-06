const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deckController');

router.get('/', deckController.getAllDecks);
router.get('/:id', deckController.getDeckById);
router.post('/', deckController.createDeck);
router.put('/:id', deckController.updateDeck);
router.delete('/:id', deckController.deleteDeck);

// Operações específicas
router.post('/:id/cards', deckController.addCardToDeck);
router.delete('/:id/cards/:cardId', deckController.removeCardFromDeck);

module.exports = router;