import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Home from "./layout/Home";
import Shop from "./layout/Shop";
import Cart from "./layout/Cart";

const App = () => {
  const [items, setItems] = useState([]);
  const [itemsCategory, setItemsCategory] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    setItems(items);
    const unique = await [...new Set(items.map((item) => item.category))];
    setItemsCategory(unique);
    console.log(items);
    // createCategories();
  };

  // const createCategories = () => {
  //   //STACK OVERFLOW
  //   const unique = await [...new Set(items.map((item) => item.category))];
  //   setItemsCategory(unique);
  // };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => <Home /*xxxx={xxxxx}*/ />} />
          <Route
            path="/shop"
            render={() => <Shop items={items} category={itemsCategory} />}
          />
          <Route path="/cart" render={() => <Cart /*xxxx={xxxx}*/ />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
