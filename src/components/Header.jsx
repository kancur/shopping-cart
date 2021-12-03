import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../images/zulu-logo.png";
import "../styles/cartIcon.css";
import CartIconWithCount from "./CartIconWithCount.";

export default function Header() {
  return (
    <header>
      <NavLink exact to="/">
        <img className="logo" src={Logo} alt="logo" />
      </NavLink>
      <div className="nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <CartIconWithCount linkTo="/cart" />
      </div>
    </header>
  );
}
