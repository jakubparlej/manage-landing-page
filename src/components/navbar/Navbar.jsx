import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.scss";
import Button from "../button/Button";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar section__padding">
      <img src={logo} alt="logo" />
      <div className="navbar__menu">
        <a href="#pricing">
          <p>Pricing</p>
        </a>
        <a href="#product">
          <p>Product</p>
        </a>
        <a href="#about-us">
          <p>About Us</p>
        </a>
        <a href="#careers">
          <p>Careers</p>
        </a>
        <a href="#community">
          <p>Community</p>
        </a>
      </div>
      <Button title="Get Started" />
    </div>
  );
}

export default Navbar;
