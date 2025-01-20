import storeItems from "../data/storeData";
import accounts from "../data/accountData";


const getAllItems = (req, res) => {
    res.status(200).json({items: storeItems});
};


const getSingleItem = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = storeItems.find(item => item.id === id);

    if (!item){
        return res.status(404).json({mssg: "item not found"});
    }
    res.status(200).json({ item });
}


const purchaseItem = (req, res) => {
    const {userName, itemId} = req.body;

    const item = storeItems.find(item => item.id === parseInt(itemId, 10));
    if (!item) {
        return res.status(404).json({ mssg: "Item not found" });
    }

    const account = accounts.find(acc => acc.userName === userName);
    if (!account){
        return res.status(404).json({ mssg: "Account not found" });
    }

    if (account.coins < item.price) {
        return res.status(400).json({ mssg: "Insufficient coins" });
    }

    account.coins -= item.price;

    res.status(200).json({ 
        mssg: "Purchase successful",
        account: account,
        purchasedItem: item
    });

};

export{
    getAllItems,
    getSingleItem,
    purchaseItem
}