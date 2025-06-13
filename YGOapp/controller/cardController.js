import cardService from '../service/cardService.js';

class CardController {
    getAll(req, res) {
        try {
            const cards = cardService.getAllCards();
            res.status(200).json(cards);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById(req, res) {
        try {
            const card = cardService.getCardById(req.params.id);
            res.status(200).json(card);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    adicionarCarta(req, res) {
        try {
            const card = cardService.adicionarCarta(req.body);
            res.status(201).json(card);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

   atualizaCarta(req, res) {
        try {
            const card = cardService.atualizaCarta(req.params.id, req.body);
            res.status(200).json(card);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    deleteCard(req, res) {
        try {
            cardService.deleteCard(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export default new CardController();