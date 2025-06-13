import cardRepository from '../repositories/cardRepository.js';

class CardService {
    getAllCards() {
        return cardRepository.findAll();
    }
    getCardById(id) {
            const card = cardRepository.buscarId(Number(id));
            if (!card) {
                throw new Error('Carta não encontrada.');
            }
            return card;
        }

    adicionarCarta(card) {
        if (!card.name || !card.type || !card.atk || !card.def) {
            throw new Error('Nome, tipo, ATK, and DEF são obrigatórios');
        }
        return cardRepository.adicionarCarta(card);
    }

    atualizaCarta(id, cardData) {
        const updatedCard = cardRepository.atualizaCarta(Number(id), cardData);
        if (!updatedCard) {
            throw new Error('Carta não encontrada.');
        }
        return updatedCard;
    }

    deleteCard(id) {
        const success = cardRepository.deletarCartaId(Number(id));
        if (!success) {
            throw new Error('Carta não encontrada.');
        }
    }
}

export default new CardService();