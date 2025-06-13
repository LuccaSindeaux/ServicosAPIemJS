import cardService from '../service/cardService';
import cardRepository from '../repository/cardRepository';

// Mock do repositório
jest.mock('../repository/cardRepository');

describe('CardService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Deve criar uma carta Dark Magician', () => {
        const cardData = { name: 'Dark Magician', type: 'Spellcaster', atk: 2500, def: 2100 };
        const createdCard = { id: 1, ...cardData };
        
        cardRepository.adicionaCarta.mockReturnValue(createdCard);

        const result = cardService.adicionarCarta(cardData);

        expect(result).toEqual(createdCard);
        expect(cardRepository.adicionarCarta).toHaveBeenCalledWith(cardData);
    });

    it('Mostra erro se um dos campos não for preenchido', () => {
        const cardData = { name: 'Blue-Eyes White Dragon' }; // Faltando type, atk, def

        expect(() => cardService.adicionarCarta(cardData)).toThrow('Nome, tipo, ATK, and DEF são obrigatórios');
    });

    it('Mostra erro se a carta mão for encontrada', () => {
        cardRepository.findById.mockReturnValue(null);

        expect(() => cardService.getCardById(999)).toThrow('Carta não encontrada');
    });
});