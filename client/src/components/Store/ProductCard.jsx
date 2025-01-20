import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
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
    }).isRequired,
  };

export default ProductCard;
