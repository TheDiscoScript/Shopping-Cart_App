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
  const [cartItems, setCartItems] = useState([
    // {
    //   id: 1,
    //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //   price: 109.95,
    //   description:
    //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //   category: "men's clothing",
    //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    // },
    // {
    //   id: 2,
    //   title: "Mens Casual Premium Slim Fit T-Shirts ",
    //   price: 22.3,
    //   description:
    //     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    //   category: "men's clothing",
    //   image:
    //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    // },
  ]);

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
  const addItemToCart = (itemID) => {
    let found = items.find((item) => item.id === itemID);
    setCartItems((prevCart) => [...prevCart, found]);
  };
  const handleRemove = (id) => {
    const arrayMinusOne = cartItems.filter((item) => item.id !== id);
    setCartItems(arrayMinusOne);
  };
  const countTotal = () => {
    let total = cartItems.reduce((prev, cur) => {
      return prev + cur.amount * cur.price;
    }, 0);
    return parseInt(total);
  };
  // const createCategories = () => {
  //   //STACK OVERFLOW
  //   const unique = await [...new Set(items.map((item) => item.category))];
  //   setItemsCategory(unique);
  // };

  return (
    <Router>
      <div className="App">
        <NavBar itemsNumber={cartItems} />
        <Switch>
          <Route path="/" exact render={() => <Home /*xxxx={xxxxx}*/ />} />
          <Route
            path="/shop"
            exact
            render={() => (
              <Shop
                items={items}
                category={itemsCategory}
                addItem={addItemToCart}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                cartItems={cartItems}
                remove={handleRemove}
                total={countTotal}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
