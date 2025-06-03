const request = require('supertest');
const app = require('../../../app');
const cardRepository = require('../../../repositories/cardRepository');

describe('testes de integração da Card API', () => {
  beforeEach(() => {
    cardRepository.findAll = jest.fn().mockReturnValue([
      { id: 1, name: "Test Card", type: "Monster", atk: 1000, def: 1000 }
    ]);
    cardRepository.findById = jest.fn().mockImplementation((id) => 
      id === 1 ? { id: 1, name: "Test Card" } : undefined
    );
  });

  test('GET /cards - deve retornar todas as cartas', async () => {
    const response = await request(app).get('/cards');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0].name).toBe("Test Card");
  });

  test('GET /cards/:id - deve retornar uma carta específica via id', async () => {
    const response = await request(app).get('/cards/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });

  test('GET /cards/:id - se a carta não existe, lança um erro 404', async () => {
    const response = await request(app).get('/cards/999');
    expect(response.statusCode).toBe(404);
  });

  test('POST /cards - cria uma carta nova', async () => {
    const newCard = { name: "New Card", type: "Spell", atk: 500, def: 500 };
    const response = await request(app)
      .post('/cards')
      .send(newCard);
    
    expect(response.statusCode).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe(newCard.name);
  });
});