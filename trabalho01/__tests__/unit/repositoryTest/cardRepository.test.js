const cardRepository = require('../../../repositories/cardRepository');

beforeEach(() => {
  cardRepository.findAll = jest.fn().mockReturnValue([
    { id: 1, name: "Dark Magician", type: "Spellcaster", atk: 2500, def: 2100 }
  ]);
});

describe('Card Repository', () => {
  test('findAll should return all cards', () => {
    const cards = cardRepository.findAll();
    expect(cards).toHaveLength(1);
    expect(cards[0].name).toBe("Dark Magician");
  });

  test('findById should return the correct card', () => {
    const card = cardRepository.findById(1);
    expect(card).toBeDefined();
    expect(card.id).toBe(1);
  });

  test('findById should return undefined for non-existent card', () => {
    const card = cardRepository.findById(999);
    expect(card).toBeUndefined();
  });

  test('create should add a new card', () => {
    const newCard = { name: "New Card", type: "Spell", atk: 1000, def: 1000 };
    const createdCard = cardRepository.create(newCard);
    expect(createdCard.id).toBeDefined();
    expect(createdCard.name).toBe(newCard.name);
  });
});