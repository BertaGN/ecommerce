import React from "react";
import "./Navbar.css";



function Navbar ({count}) {
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
    <p className="nav-item"> {count} articles</p>
    </div>
  );
};


export default Navbar;