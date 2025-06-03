const request = require('supertest');
const app = require('../../../app');

describe('Teste de integração da Deck API', () => {
  let createdDeckId;

  beforeAll(async () => {
    // Criar um deck de teste
    const response = await request(app)
      .post('/decks')
      .send({ name: "Test Deck" });
    createdDeckId = response.body.id;
  });

  test('POST /decks/:id/cards - adiciona uma carta à um deck', async () => {
    // Primeiro cria uma carta
    const cardResponse = await request(app)
      .post('/cards')
      .send({ name: "Test Card", type: "Monster", atk: 1000, def: 1000 });
    
    const cardId = cardResponse.body.id;

    // Adiciona a carta ao deck
    const response = await request(app)
      .post(`/decks/${createdDeckId}/cards`)
      .send({ cardId });
    
    expect(response.statusCode).toBe(200);
    expect(response.body.cards).toContain(cardId);
  });

  test('DELETE /decks/:id/cards/:cardId - remove uma carta de um deck', async () => {
    const cardResponse = await request(app)
      .post('/cards')
      .send({ name: "Card to Remove", type: "Spell" });
    
    const cardId = cardResponse.body.id;

    await request(app)
      .post(`/decks/${createdDeckId}/cards`)
      .send({ cardId });

    // Depois remove
    const deleteResponse = await request(app)
      .delete(`/decks/${createdDeckId}/cards/${cardId}`);
    
    expect(deleteResponse.statusCode).toBe(200);
    expect(deleteResponse.body.cards).not.toContain(cardId);
  });
});