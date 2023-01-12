import React, { useState } from "react";
import "./css/Review.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review({ review }) {
  const [index, setIndex] = useState(0);
  const { name, role, info, image } = review[index];
  return (
    <>
      <section key={index} className="single-review">
        <div className="image-container">
          <img src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div className="profile">
          <h2>{name}</h2>
          <h4>{role}</h4>
          <p>{info}</p>
        </div>
        <div className="move-container">
          <button>
            <FaChevronLeft />
          </button>
          <button>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn">Surprise Me</button>
      </section>
    </>
  );
}
