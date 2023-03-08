import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "../../Context/ProductContext/ProductContext";
import "./Navbar.css";



function Navbar () {
  const {cart} = useContext(ProductContext)

  return (
    <div className="nav">
      <a href="/" className="nav-logo">
        LOGO
      </a>
      <a className="nav-item" href="/">
        Home
      </a>
      <a className="nav-item" href="/">
        Contact
      </a>
    <NavLink to="/TotalCart" className="nav-item">
      {
      cart.length
      } articles
      </NavLink>
    </div>
  );
};


export default Navbar;