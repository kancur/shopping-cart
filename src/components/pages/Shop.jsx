import '../../styles/shop.css'
import products from '../../products/products'
import Product from '../Product';

export default function Shop() {
  return (
    <>
      <h1>Our products</h1>
      <div className="products-wrapper">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
}