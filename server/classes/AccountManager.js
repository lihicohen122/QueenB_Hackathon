const Account = require('./account');

class AccountManager {
    accounts = [];

    createAccount(fullName, email, password) {
        if (this.accounts.some(acc => acc.email === email)){
            throw new Error('Email already exist');
        }

        const newAccount = new Account(fullName, email, password);
        this.accounts.push(newAccount);
        return newAccount;
    }

    signIn(email, password) {
        const account = this.accounts.find(acc => 
            acc.email === email
        );

        if (!account){
            throw new Error("This email does not exist");
        }

        if (account.password !== password){
            throw new Error("Incorrect password");
        }
        
        return account;
    }
}

const accountManager = new AccountManager();
module.exports = {
    AccountManager,
    accountManager
};