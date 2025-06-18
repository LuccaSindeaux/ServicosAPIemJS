import express from 'express';
import cardRouter from './router/cardRouter.js';
import deckRouter from './router/deckRouter.js';

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Rotas principais
app.use('/cards', cardRouter);
app.use('/decks', deckRouter);

export default app;

// Rotas da API:
// Método	Endpoint
// GET	    http://localhost:3000/cartas
// GET	    http://localhost:3000/cartas/:id
// POST	    http://localhost:3000/cartas
// PUT	    http://localhost:3000/cartas/:id
// DELETE	http://localhost:3000/cartas/:id