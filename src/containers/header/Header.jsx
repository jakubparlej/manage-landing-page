import React from "react";
import Button from "../../components/button/Button";
import image from "../../assets/illustration-intro.svg";
import bg from "../../assets/bg-tablet-pattern.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="header section__padding">
      <img className="header__bg" src={bg} alt="background" />
      <div className="header__content">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <Button title="Get Started" style="btn" />
      </div>

      <div className="header__image">
        <img src={image} alt="illustration" />
      </div>
    </div>
  );
}

export default Header;
