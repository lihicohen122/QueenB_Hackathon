import express from 'express';
import {
    getAllAccounts,
    createAccount,
    signIn,
    earnCoins,
    findAccountByUserName
} from '../controllers/accountController.js';

const router = express.Router();

// Account routes
router.get('/', getAllAccounts);
router.get('/:userName', findAccountByUserName);
router.post('/', createAccount);
router.post('/signin', signIn);
router.post('/earn', earnCoins);

export default router;