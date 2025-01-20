import accounts from "../data/accountData";

const INITIAL_COINS = 500;
 
// Get all accounts
const getAllAccounts = (req, res) => {
    res.status(200).json({ accounts });
};


// Create a new account
const createAccount = (req, res) => {
    const { userName, email} = req.body;

    // Check if userName already exists
    if (accounts.some(acc => acc.userName === userName)) {
        return res.status(400).json({ mssg: "UserName already exists" });
    }

    const newAccount = {
        id: accounts.length ? accounts[accounts.length - 1].id + 1 : 1,
        userName,
        email,
        coins: INITIAL_COINS  // Initialize with 500 coins
    };
    
    accounts.push(newAccount);
    res.status(201).json({ account: newAccount });
};

const getSingleAccount = (req, res) => {
    const { userName } = req.params;
    
    const account = accounts.find(acc => acc.userName === userName);
    
    if (!account) {
        return res.status(404).json({ mssg: "Account not found" });
    }
    
    res.status(200).json({ account });
};

// Sign in to an account
const signIn = (req, res) => {
    const { email, userName } = req.body;
    
    const account = findAccountByUserName(userName);

    if (!account) {
        return res.status(404).json({ mssg: "This userName does not exist" });
    }

    res.status(200).json({ account });
};

const earnCoins = (req, res) => {
    const { userName, amount } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
        return res.status(400).json({ mssg: "Invalid coin amount" });
    }

    // Find account
    const account = findAccountByUserName(userName)
    if (!account) {
        return res.status(404).json({ mssg: "Account not found" });
    }

    // Add coins to account
    account.coins += amount;

    res.status(200).json({ 
        mssg: "Coins added successfully",
        account: account,
        earnedAmount: amount
    });
};

    
export {
    getAllAccounts,
    getSingleAccount,
    createAccount,
    signIn,
    earnCoins
};