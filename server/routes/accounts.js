import express from 'express';
import {
    getAllAccounts,
    getSingleAccount,
    createAccount,
    signIn,
    earnCoins
} from '../controllers/accountController.js';

const router = express.Router();

// Account routes
router.get('/', getAllAccounts);
router.get('/:userName', getSingleAccount);
router.post('/', createAccount);
router.post('/signin', signIn);
router.post('/earn', earnCoins);

export default router;