const deckRepository = require('../../../repositories/deckRepository');

describe('Deck Repository', () => {
  test('findAll retorna todos os decks do repositório', () => {
    const decks = deckRepository.findAll();
    expect(decks).toBeInstanceOf(Array);
  });
});

const { findById, addCardToDeck } = require('../../src/repositories/deckRepository');