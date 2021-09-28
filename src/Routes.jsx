import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ShoppingCart from "./pages/ShoppingCart";
import MainTemplate from "./templates/MainTemplate";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={MainTemplate} />
    </BrowserRouter>
  );
};

export default Routes;
