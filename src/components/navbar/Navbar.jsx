import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.scss";
import Button from "../button/Button";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar section__padding">
      <img src={logo} alt="logo" />
      <div className="navbar__links">
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
      <div className="navbar__btn">
        <Button title="Get Started" style="btn" />
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            className="fade-in"
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="fade-in"
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container fade-in">
            <div className="navbar__menu-links">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
