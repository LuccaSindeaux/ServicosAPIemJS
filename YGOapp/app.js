const express = require('express');
const cors = require('cors');
const cardRouter = require('./router/cardRouter.js');
//const deckRouter = require('./router/deckRouter.js'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cards', cardRouter);
//app.use('/decks', deckRouter);

module.exports = app;

// Rotas da API:
// Método	Endpoint
// GET	    http://localhost:3000/cartas
// GET	    http://localhost:3000/cartas/:id
// POST	    http://localhost:3000/cartas
// PUT	    http://localhost:3000/cartas/:id
// DELETE	http://localhost:3000/cartas/:id