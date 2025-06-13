import { Router } from 'express';
import cardController from '../controller/cardController.js';

const router = Router();

/**
 * @swagger
 * /cards:
 * get:
 * summary: Retrieve a list of cards
 * responses:
 * 200:
 * description: A list of cards.
 */
router.get('/', cardController.getAll);
router.get('/:id', cardController.getById);
router.post('/', cardController.adicionarCarta);
router.put('/:id', cardController.atualizaCarta);
router.delete('/:id', cardController.deleteCard);

export default router;