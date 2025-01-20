import express from 'express';
import {
    getAllItems,
    getSingleItem,
    purchaseItem
} from '../controllers/storeController.js';

const router = express.Router();

// Store routes
router.get('/getAllItems', getAllItems);
router.get('/getSingleItem', getSingleItem);
router.post('/purchaseItem', purchaseItem);

export default router;