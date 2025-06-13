import deckService from '../service/deckService.js';

class DeckController {
    getAll(req, res) {
        try {
            const decks = deckService.getAllDecks();
            res.status(200).json(decks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById(req, res) {
        try {
            const deck = deckService.getDeckById(req.params.id);
            res.status(200).json(deck);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    criarDeck(req, res) {
        try {
            const deck = deckService.criarDeck(req.body);
            res.status(201).json(deck);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    atualizarDeck(req, res) {
        try {
            const deck = deckService.atualizarDeck(req.params.id, req.body);
            res.status(200).json(deck);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    deletarDeckId(req, res) {
        try {
            deckServicedeletarDeckId(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

     addCard(req, res) {
        try {
            const { deckId, cardId } = req.params;
            const deck = deckService.addCardToDeck(deckId, cardId);
            res.status(200).json(deck);
        } catch (error) {
            const statusCode = error.message.includes('not found') ? 404 : 400;
            res.status(statusCode).json({ message: error.message });
        }
    }

    removeCard(req, res) {
        try {
            const { deckId, cardId } = req.params;
            const deck = deckService.removeCardFromDeck(deckId, cardId);
            res.status(200).json(deck);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export default new DeckController();