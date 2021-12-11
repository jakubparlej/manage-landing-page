import React from "react";
import "./Testimonial.scss";

function Testimonial({ img, author, text }) {
  return (
    <div className="testimonial">
      <div className="testimonial__image">
        <img src={img} alt="img" />
      </div>
      <div className="testimonial__content">
        <h3>{author}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Testimonial;
