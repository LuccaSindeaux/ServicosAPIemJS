const { Router } = require('express');
const cardController = require('../controller/cardController.js');

const router = Router();

router.get('/', cardController.getAll);
router.get('/:id', cardController.getById);
router.post('/', cardController.adicionarCarta);
router.put('/:id', cardController.atualizaCarta);
router.delete('/:id', cardController.deleteCard);

module.exports = router;