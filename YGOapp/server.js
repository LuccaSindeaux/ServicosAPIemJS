import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Rotas da API:
// Método	Endpoint
// GET	    http://localhost:3000/cartas
// GET	    http://localhost:3000/cartas/:id
// POST	    http://localhost:3000/cartas
// PUT	    http://localhost:3000/cartas/:id
// DELETE	http://localhost:3000/cartas/:id