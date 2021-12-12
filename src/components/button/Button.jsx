import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <>
      <button className={`btn ${props.class}`}>{props.title}</button>
    </>
  );
}

export default Button;
