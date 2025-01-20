import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

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
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all items from the server
    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await api.get('/store/getAllItems');  // Using the api instance
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
            const response = await api.post('/store/purchaseItem', {  // Using the api instance
                userName,
                itemId
            });

            // Update local state to reflect the purchase
            if (response.data.mssg === 'Purchase successful') {
                // Refresh the items list after successful purchase
                await fetchItems();
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
            const response = await api.get(`/store/getSingleItem/${itemId}`);  // Using the api instance
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

export default StoreProvider;