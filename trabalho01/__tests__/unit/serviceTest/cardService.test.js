const cardService = require('../../../services/cardService');
const cardRepository = require('../../../repositories/cardRepository');

jest.mock('../../../repositories/cardRepository');

describe('Card Service', () => {
  test('getAllCards retorna todas as cartas de um repositório', async () => {
    const mockCards = [{ id: 1, name: "Test Card" }];
    cardRepository.findAll.mockResolvedValue(mockCards);
    
    const result = await cardService.getAllCards();
    expect(result).toEqual(mockCards);
  });
});