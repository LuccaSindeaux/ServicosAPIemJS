const cardService = require('../service/cardService.js');

class CardController {
    async getAll(req, res) {
        try {
            const cards = await cardService.getAllCards();
            res.status(200).json(cards);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const card = await cardService.getCardById(req.params.id);
            res.status(200).json(card);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async adicionarCarta(req, res) {
        try {
            const card = await cardService.adicionarCarta(req.body);
            res.status(201).json(card);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizaCarta(req, res) {
        try {
            const card = await cardService.atualizaCarta(req.params.id, req.body);
            res.status(200).json(card);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deleteCard(req, res) {
        try {
            await cardService.deleteCard(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new CardController();