import React from "react";
import "./Button.scss";

function Button({ title }) {
  return (
    <>
      <button className="btn">{title}</button>
    </>
  );
}

export default Button;
