import '../styles/shop.css'
import products from '../productsMock/products'
import Product from '../components/Product';

export default function Shop() {
  return (
    <>
      <h1>Our products</h1>
      <div className="products-wrapper">
        {products.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </div>
    </>
  );
}