import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* הוספת תמונה */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
        style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }} 
      />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => alert('Your voucher code is XXXX')}>Purchase</button>
    </div>
  );
};

// PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired, // וידוא שהשדה image הוא חובה
  }).isRequired,
};

export default ProductCard;
