const cardRepository = require('../../../repositories/cardRepository');

beforeEach(() => {
  cardRepository.findAll = jest.fn().mockReturnValue([
    { id: 1, name: "Dark Magician", type: "Spellcaster", atk: 2500, def: 2100 }
  ]);
});

describe('Card Repository', () => {
  test('findAll deve retornar todas as cartas', () => {
    const cards = cardRepository.findAll();
    expect(cards).toHaveLength(1);
    expect(cards[0].name).toBe("Dark Magician");
  });

  test('findById retorna uma carta por id', () => {
    const card = cardRepository.findById(1);
    expect(card).toBeDefined();
    expect(card.id).toBe(1);
  });

  test('findById retorna undefined se não existir a carta', () => {
    const card = cardRepository.findById(999);
    expect(card).toBeUndefined();
  });

  test('Cria uma nova carta', () => {
    const newCard = { name: "New Card", type: "Spell", atk: 1000, def: 1000 };
    const createdCard = cardRepository.create(newCard);
    expect(createdCard.id).toBeDefined();
    expect(createdCard.name).toBe(newCard.name);
  });
});