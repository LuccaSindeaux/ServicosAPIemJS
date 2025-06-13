import { Router } from 'express';
import deckController from '../controller/deckController.js';

const router = Router();

router.get('/', deckController.getAll);
router.get('/:id', deckController.getById);
router.post('/', deckController.criarDeck);
router.put('/:id', deckController.atualizarDeck);
router.delete('/:id', deckController.deletarDeckId);
router.post('/:deckId/cards/:cardId', deckController.addCard);
router.delete('/:deckId/cards/:cardId', deckController.removeCard);

export default router;