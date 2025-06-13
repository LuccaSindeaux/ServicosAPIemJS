const deckRepository = require('../../../repositories/deckRepository');

describe('Deck Repository', () => {
  test('findAll retorna todos os decks do repositório', () => {
    const decks = deckRepository.findAll();
    expect(decks).toBeInstanceOf(Array);
  });
});

const { addCardToDeck } = require('../../../repositories/deckRepository');

describe('addCardToDeck', () => {
  let decks;

  beforeEach(() => {
    // Inicializa o array de decks antes de cada teste
    decks = [
      { id: 1, name: 'Deck A', cards: [101, 102] },
      { id: 2, name: 'Deck B', cards: [103] },
      { id: 3, name: 'Deck C', cards: [] },
    ];
  });
});