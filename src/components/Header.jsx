import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../images/zulu-logo.png";
import { IoCart } from "react-icons/io5";
import { dataStore } from "./dataStore";
import { useContext } from "react";
import '../styles/cartIcon.css';

export default function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="logo" />
      <div className="nav">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/shop" activeClassName="active">
          Shop
        </NavLink>
        <CartIconWithCount linkTo="/cart" />
      </div>
    </header>
  );
}

function CartIconWithCount({ linkTo }) {
  const {cart, setCart} = useContext(dataStore);

  return (
    <div className="cart-icon-wrapper">
      <span className="cart-count">{cart.length}</span>
      <NavLink to={linkTo}>
        <IoCart color="#b1b1b1" />
      </NavLink>
    </div>
  );
}
