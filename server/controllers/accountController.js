
import accounts from "../data/accountData.js";

const INITIAL_COINS = 500;
 
// Get all accounts
const getAllAccounts = (req, res) => {
    console.log("Current accounts:", accounts); // Debug log
    res.status(200).json({ accounts });
};


// Create a new account
const createAccount = (req, res) => {
    const { userName, email} = req.body;

    console.log("Attempting to create account:", { userName, email }); // Debug log

    // Check if userName already exists
    if (accounts.some(acc => acc.userName === userName)) {
        console.log("Username already exists:", userName); // Debug log
        return res.status(400).json({ mssg: "UserName already exists" });
    }

    const newAccount = {
        id: accounts.length ? accounts[accounts.length - 1].id + 1 : 1,
        userName,
        email,
        coins: INITIAL_COINS  // Initialize with 500 coins
    };
    
    accounts.push(newAccount);
    console.log("Account created successfully:", newAccount); // Debug log
    console.log("Updated accounts array:", accounts); // Debug log

    res.status(201).json({ account: newAccount });

    console.log("New account created:", newAccount); // Debug log
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
    const { userName, email  } = req.body;

    console.log("Attempting to sign in:", { userName, email }); // Debug log

    const account = accounts.find(acc => acc.userName === userName && acc.email === email);
    if (!account) {
        console.log("Sign in failed - account not found"); // Debug log
        return res.status(404).json({ mssg: "Invalid credentials" });
    }
    
    console.log("Sign in successful:", account); // Debug log
    res.status(200).json({ account });
};

const earnCoins = (req, res) => {
    const { userName, amount } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
        return res.status(400).json({ mssg: "Invalid coin amount" });
    }

    // Find account
    const account = accounts.find(acc => acc.userName === userName);
    if (!account) {
        return res.status(404).json({ mssg: "Account not found" });
    }

    // Add coins to account
    account.coins += amount;
    console.log(`Added ${amount} coins to account:`, account); // Debug log

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