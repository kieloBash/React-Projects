import React, { useState } from "react";
import "./css/Review.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review({ review }) {
  const [index, setIndex] = useState(0);
  const { name, role, info, image } = review[index];

  const checkNumber = (temp) => {
    if (temp > review.length - 1) {
      return 0;
    }
    if (temp < 0) {
      return review.length - 1;
    }
    return temp;
  };
  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index+1);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index-1);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * review.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

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
          <button onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          Surprise Me
        </button>
      </section>
    </>
  );
}
