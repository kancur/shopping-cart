import { useContext } from "react";
import { dataStore } from "../components/dataStore";
import ProductInCart from "../components/ProductInCart";
import products from "../productsMock/products";
import "../styles/shoppingCart.css";

export default function ShoppingCart() {
  const { state, dispatch } = useContext(dataStore);

  const idsInCart = state.map((product) => product.id);

  const productsInCart = [...products].filter((product) =>
    idsInCart.includes(product.id)
  );

  return (
    <>
      {(idsInCart.length === 0) && <h2>Your cart is empty.</h2>}
      {productsInCart.map((product) => (
        <ProductInCart key={product.id} product={product} />
      ))}
    </>
  );
}
