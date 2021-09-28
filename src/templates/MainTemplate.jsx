import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "../pages/Homepage";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";
import '../styles/mainTemplate.css'

export default function MainTemplate() {
  return (
    <>
      <Header />
      <main className="main">
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={ShoppingCart} />
      </main>
      <Footer />
    </>
  );
}
