import express from 'express';
import cardRouter from './router/cardRouter.js';
import deckRouter from './router/deckRouter.js';

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Rotas principais
app.use('/cards', cardRouter);
app.use('/decks', deckRouter);

export default app;