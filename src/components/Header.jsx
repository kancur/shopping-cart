import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../images/zulu-logo.png";
import { IoCart } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="logo" />
      <div className="nav">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/shop" activeClassName="active">Shop</NavLink>
      </div>
      <div className="cart-icon-wrapper">
        <IoCart color="#b1b1b1"/>
      </div>
    </header>
  );
}
