import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { dataStore } from "./dataStore";
import { useContext } from "react";

export function CartIconWithCount({ linkTo }) {
  const { cart, setCart } = useContext(dataStore);

  return (
    <div className="cart-icon-wrapper">
      <span className="cart-count">{cart.length}</span>
      <NavLink to={linkTo}>
        <IoCart color="#b1b1b1" />
      </NavLink>
    </div>
  );
}
