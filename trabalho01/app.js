// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cardRoutes = require('./routes/cardRoutes');
const deckRoutes = require('./routes/deckRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/cards', cardRoutes);
app.use('/decks', deckRoutes);

// Middleware de erro
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// no bash: npm install --save-dev jest supertest
// Para achar o jest e o express no bash: npm install express body-parser --save