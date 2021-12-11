import React from "react";
import "./Button.scss";

function Button({ title, style }) {
  return (
    <>
      <button className={style}>{title}</button>
    </>
  );
}

export default Button;
