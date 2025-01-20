import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
// import storeItems from '../data/storeData';
import storeItems from 'server/data/storeData.js';

import PropTypes from 'prop-types';


// Create the store context
const StoreContext = createContext();

// Custom hook for using the store context
export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};

export const StoreProvider = ({ children }) => {
    // State management
    const [items, setItems] = useState(storeItems);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all items from the server
    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/store/getAllItems');
            setItems(response.data.items);
            setError(null);
        } catch (err) {
            setError('Failed to fetch store items');
            console.error('Error fetching items:', err);
        } finally {
            setLoading(false);
        }
    };

    // Purchase an item
    const purchaseItem = async (userName, itemId) => {
        try {
            setLoading(true);
            const response = await axios.post('/api/store/purchaseItem', {
                userName,
                itemId
            });

            // Update local state to reflect the purchase
            if (response.data.mssg === 'Purchase successful') {
                // You might want to trigger a refresh of the user's account data here
                // or handle it through a separate user context
                return {
                    success: true,
                    data: response.data
                };
            }
        } catch (err) {
            const errorMessage = err.response?.data?.mssg || 'Failed to purchase item';
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally {
            setLoading(false);
        }
    };

    // Get a single item by ID
    const getItem = async (itemId) => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/store/getSingleItem/${itemId}`);
            return response.data;
        } catch (err) {
            setError('Failed to fetch item');
            console.error('Error fetching item:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    // Load items when the component mounts
    useEffect(() => {
        fetchItems();
    }, []);

    // Context value object
    const value = {
        items,
        loading,
        error,
        purchaseItem,
        getItem,
        refreshItems: fetchItems
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

// PropTypes for the provider
StoreProvider.propTypes = {
    children: PropTypes.node.isRequired
};