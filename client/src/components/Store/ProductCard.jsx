// import PropTypes from 'prop-types';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <h2>{product.name}</h2>
//       <p>${product.price}</p>
//       <button onClick={() => alert('Your voucher code is XXXX')}>Purchase</button>
//     </div>
//   );
// };

// // PropTypes validation
// ProductCard.propTypes = {
//     product: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//     }).isRequired,
//   };

// export default ProductCard;

import { useState } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../context/StoreContext';

const ProductCard = ({ product }) => {
  const { purchaseItem, loading } = useStore();
  const [purchaseStatus, setPurchaseStatus] = useState('');

  const handlePurchase = async () => {
    // Assume we're getting the username from some user context or prop
    const username = 'currentUser'; // Replace with actual username
    
    const result = await purchaseItem(username, product.id);
    
    if (result.success) {
      setPurchaseStatus('Purchase successful!');
    } else {
      setPurchaseStatus(result.error || 'Purchase failed');
    }
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      {purchaseStatus && (
        <p className={purchaseStatus.includes('successful') ? 'success' : 'error'}>
          {purchaseStatus}
        </p>
      )}
      <button 
        onClick={handlePurchase} 
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Purchase'}
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;