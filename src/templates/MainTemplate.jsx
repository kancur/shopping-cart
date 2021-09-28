import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Homepage from "../components/pages/Homepage";
import Shop from "../components/pages/Shop";
import ShoppingCart from "../components/pages/ShoppingCart";
import '../styles/mainTemplate.css'

export default function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <main className="main">
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={ShoppingCart} />
      </main>
    </>
  );
}
