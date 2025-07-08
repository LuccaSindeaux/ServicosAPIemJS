const cardRepository =  require('../repository/cardRepository.js')

class CardService {
    async getAllCards() {
        return await cardRepository.findAll();
    }
    async getCardById(id) {
            const card = cardRepository.buscarId(Number(id));
            if (!card) {
                throw new Error('Carta não encontrada.');
            }
            return card;
        }

    async adicionarCarta(card) {
        if (!card.name || !card.type || !card.atk || !card.def) {
            throw new Error('Nome, tipo, ATK, and DEF são obrigatórios');
        }
        return await cardRepository.adicionarCarta(card);
    }

    async atualizaCarta(id, cardData) {
        const updatedCard = await cardRepository.atualizaCarta(Number(id), cardData);
        if (!updatedCard) {
            throw new Error('Carta não encontrada.');
        }
        return updatedCard;
    }
    async deleteCard(id) {
        const rowCount = await cardRepository.deletarCartaId(Number(id));
        if (rowCount === 0) {
            throw new Error('Carta não encontrada para exclusão.');
        }
    }
}

module.exports = new CardService();
//export default new CardService();