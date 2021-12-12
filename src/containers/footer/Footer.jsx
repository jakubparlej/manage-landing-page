import React from "react";
import "./Footer.scss";
import logoWhite from "../../assets/logo-white.svg";
import { facebook, youtube, twitter, pinterest, instagram } from "./imports";
import Button from "../../components/button/Button";

function Footer() {
  return (
    <div className="footer section__padding">
      <div className="footer__logo">
        <img src={logoWhite} alt="Logo" />
      </div>
      <div className="footer__social-icons">
        <img src={facebook} alt="facebook" />
        <img src={youtube} alt="youtube" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
        <img src={instagram} alt="instagram" />
      </div>
      <div className="footer__menu1">
        <p>Home</p>
        <p>Pricing</p>
        <p>Products</p>
        <p>About</p>
      </div>
      <div className="footer__menu2">
        <p>Careers</p>
        <p>Community</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer__form">
        <form action="">
          <input type="email" placeholder="Updates your inbox..." />
          <input type="submit" value="Go" />
        </form>
      </div>
      <div className="footer__copyright">
        <p>Copyright 2021. Made by Jakub Parlej.</p>
      </div>
    </div>
  );
}

export default Footer;
