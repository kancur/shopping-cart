import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { dataStore } from "./dataStore";
import { useContext } from "react";

export default  function CartIconWithCount({ linkTo }) {
  const { state, dispatch } = useContext(dataStore);
  
  const countProductsInCart = () => {
    return state.reduce((count, product) => count + product.count, 0)
  }

  return (
    <NavLink to={linkTo} activeClassName=''>
      <div className="cart-icon-wrapper">
        <span className="cart-count">{countProductsInCart()}</span>
        <IoCart color="#b1b1b1" />
      </div>
    </NavLink>
  );
}
