import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Template from "./components/Template/Template";
import Man from "./pages/Man/Man";
import Woman from "./pages/Woman/Woman";
import Child from "./pages/Child/Child";
import Discounts from "./pages/Discounts/Discounts";
import Gifts from "./pages/Gifts/Gifts";
import NewTrends from "./pages/NewTrends/NewTrends";
import Product from "pages/Product/Product";
import Home from "pages/Home/Home";
import Cart from "pages/Cart/Cart";
import "./App.css";

/*
TODO:
-Creare API MANAGER e pulire i componenti.
-PayPal payment
*/

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/niko" component={Home}>
        <Redirect to="/" />{" "}
      </Route>
      <Route exact path="/" component={Home} />
      <Route path={`/prodotto/:id`} component={Product} />
      <Route path="/nuove-tendenze" component={NewTrends} />
      <Route path="/regali" component={Gifts} />
      <Route path="/uomo" component={Man} />
      <Route path="/donna" component={Woman} />
      <Route path="/bambino" component={Child} />
      <Route path="/sconti" component={Discounts} />
      <Route path="/carrello" component={Cart} />
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Template>
          <Routes />
        </Template>
      </Router>
    </div>
  );
}

export default App;
