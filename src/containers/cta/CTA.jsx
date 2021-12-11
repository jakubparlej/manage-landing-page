import React from "react";
import Button from "../../components/button/Button";
import "./CTA.scss";

function CTA() {
  return (
    <div className="cta section__padding">
      <h2>Simplify how your team works today.</h2>
      <div className="cta__button">
        <Button title="Get Started" style="btn btn-white" />
      </div>
    </div>
  );
}

export default CTA;
