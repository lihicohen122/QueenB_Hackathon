import express from 'express';
import {
    getAllItems,
    getSingleItem,
    purchaseItem
} from '../controllers/storeController.js';

const router = express.Router();

// Store routes
router.get('/', getAllItems);
router.get('/item/:id', getSingleItem);
router.post('/purchase', purchaseItem);

export default router;