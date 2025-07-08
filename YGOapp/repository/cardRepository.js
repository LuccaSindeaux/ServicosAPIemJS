// let cards = [];
// let nextId = 1;

//Valores previamente chumbados na lista para teste
// {
//     id: 1,
//     name: "Mago Negro",
//     type: "Monstro",
//     descricao: "O mais poderoso dos magos em termos de ataque e defesa.",
//     atk: 2500,
//     def: 2000
//   },
//   {
//     id: 2,
//     name: "Dragão Branco de Olhos Azuis",
//     type: "Monstro",
//     descricao: "Um dragão lendário com ataque devastador e força incomparável.",
//     atk: 3000,
//     def: 2500
//   },
//   {
//     id: 3,
//     name: "Dragão Negro de Olhos Vermelhos",
//     type: "Monstro",
//     descricao: "Um dragão feroz com espírito indomável e potencial oculto.",
//     atk: 2400,
//     def: 2000
//   }
const { connect } = require('./db.js');

class CardRepository {
    async findAll() {
        let client;
        try {
            client = await connect();
            const result = await client.query('SELECT * FROM cards ORDER BY id ASC');
            return result.rows;
        } finally {
            if (client) {
                client.release();
            }
        }
    }

    async getCardById(id) {
        let client;
        try {
            client = await connect();
            const result = await client.query('SELECT * FROM cards WHERE id = $1', [id]);
            return result.rows[0];
        } finally {
            if (client) {
                client.release();
            }
        }
    }

    async adicionarCarta(card) {
        let client;
        const { name, type, atk, def, description } = card;
        try {
            client = await connect();
            const query = 'INSERT INTO cards (name, type, atk, def, description) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = [name, type, atk, def, description];
            const result = await client.query(query, values);
            return result.rows[0];
        } finally {
            if (client) {
                client.release();
            }
        }
    }

    async atualizaCarta(id, cardData) {
        let client;
        const { name, type, atk, def, description } = cardData;
        try {
            client = await connect();
            const query = 'UPDATE cards SET name = $1, type = $2, atk = $3, def = $4, description = $5 WHERE id = $6 RETURNING *';
            const values = [name, type, atk, def, description, id];
            const result = await client.query(query, values);
            return result.rows[0];
        } finally {
            if (client) {
                client.release();
            }
        }
    }

    async deletarCartaId(id) {
        let client;
        try {
            client = await connect();
            const result = await client.query('DELETE FROM cards WHERE id = $1', [id]);
            return result.rowCount;
        } finally {
            if (client) {
                client.release();
            }
        }
    }
}

module.exports = new CardRepository();
//export default new CardRepository();