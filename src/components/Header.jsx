import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../images/zulu-logo.png";
import { IoCart } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <img class="logo" src={Logo} alt="logo" />
      <div class="nav">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/shop" activeClassName="active">Shop</NavLink>
      </div>
      <div class="cart-icon-wrapper">
        <IoCart color="#b1b1b1"/>
      </div>
    </header>
  );
}
