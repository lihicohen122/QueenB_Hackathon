
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
router.get('/getAllaccounts', getAllAccounts);
router.get('/:getSingleAccount', getSingleAccount);
router.post('/createAccount', createAccount);
router.post('/signIn', signIn);
router.post('/earnCoins', earnCoins);

export default router;