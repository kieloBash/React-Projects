import React from "react";
import "./css/Review.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Review({ review }) {
  return (
    <>
      {review.map((review) => {
        const { id, name, role, info, image } = review;
        return (
          <section key={id} className="single-review">
            <img src={image} alt={name} />
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
        );
      })}
    </>
  );
}
