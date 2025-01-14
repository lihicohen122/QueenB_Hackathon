import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Headphones', price: 199 },
    { id: 3, name: 'Smartphone', price: 799 },
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
