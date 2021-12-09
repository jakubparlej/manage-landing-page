import React from "react";
import "./Feature.scss";

function Feature({ num, title, desc }) {
  return (
    <div className="feature">
      <div className="feature__header">
        <div className="feature__number">{num}</div>
        <div className="feature__title">{title}</div>
      </div>
      <div className="feature__desc">{desc}</div>
    </div>
  );
}

export default Feature;
