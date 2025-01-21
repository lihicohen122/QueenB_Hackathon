import ProductCard from './ProductCard';
import './Store.module.css';
const ProductList = () => {
  const products = [
    { id: 1, name: 'Tea cup', price: 25, image: '/images/image3.jpeg' },
    { id: 2, name: 'Shirt', price: 30, image: '/images/image1.jpeg' },
    { id: 3, name: 'Notebook', price: 20, image: '/images/image2.jpeg' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
