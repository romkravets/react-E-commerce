import React from 'react';
import './App.css';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import {Route, Link} from "react-router-dom";
import CartScreen from "./screens/CartScreen";


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div className="App">
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>

            <li>
              <a href="index.html">Shirts</a>
            </li>

          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/" exact component={HomeScreen}/>
          </div>

        </main>
        <footer className="footer">
          All right reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
