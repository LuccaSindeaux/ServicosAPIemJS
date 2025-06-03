const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Rotas de teste simplificadas
app.get('/test', (req, res) => {
  res.json({ success: true });
});

module.exports = app;