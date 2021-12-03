import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ShoppingCart from "./pages/ShoppingCart";
import MainTemplate from "./templates/MainTemplate";

const Routes = () => {
  return (
    //<BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
      <Route path="/" component={MainTemplate} />
    </HashRouter>
    //</BrowserRouter>
  );
};

export default Routes;
