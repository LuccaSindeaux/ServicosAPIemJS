const deckService = require('../../../services/deckService');
const deckRepository = require('../../../repositories/deckRepository');
const cardRepository = require('../../../repositories/cardRepository');

jest.mock('../../../repositories/deckRepository');
jest.mock('../../../repositories/cardRepository');

describe('Deck Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('adiciona carta ao deck', async () => {
    const mockDeck = { id: 1, name: "Test Deck", cards: [] };
    const mockCard = { id: 1, name: "Dark Magician" };
    
    deckRepository.findById.mockResolvedValue(mockDeck);
    cardRepository.findById.mockResolvedValue(mockCard);
    deckRepository.addCardToDeck.mockResolvedValue({ 
      ...mockDeck, 
      cards: [1] 
    });

    const result = await deckService.addCardToDeck(1, 1);
    expect(result.cards).toContain(1);
    expect(deckRepository.addCardToDeck).toHaveBeenCalledWith(1, 1);
  });

  test('usa o throw para declarar erro no caso de não hacer uma carta no deck', async () => {
    deckRepository.findById.mockResolvedValue({ id: 1, name: "Test Deck", cards: [] });
    cardRepository.findById.mockResolvedValue(null); 
    
    await expect(deckService.addCardToDeck(1, 999))
      .rejects
      .toThrow('Card not found');
});
});