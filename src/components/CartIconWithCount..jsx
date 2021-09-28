import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { dataStore } from "./dataStore";
import { useContext } from "react";

export default  function CartIconWithCount({ linkTo }) {
  const { cart, setCart } = useContext(dataStore);

  return (
    <NavLink to={linkTo} activeClassName=''>
      <div className="cart-icon-wrapper">
        <span className="cart-count">{cart.length}</span>
        <IoCart color="#b1b1b1" />
      </div>
    </NavLink>
  );
}
