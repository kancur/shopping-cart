import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import ShoppingCart from "./components/pages/ShoppingCart";
import MainTemplate from "./templates/MainTemplate";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={MainTemplate} />
    </BrowserRouter>
  );
};

export default Routes;
