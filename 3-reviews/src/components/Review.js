import React from "react";
import "./css/Review.css";

export default function Review({ review }) {
  return (
    <>
      {review.map((review) => {
        const { id, name, role, info, image } = review;
        return (
          <section key={id} className='single-review'>
            <img src={image} alt={name} />
            <div className="profile">
                <h2>{name}</h2>
                <h4>{role}</h4>
                <p>{info}</p>
            </div>
            <div className="move-container">
                <button>left</button>
                <button>right</button>
            </div>
            <button className="random-btn">Surprise Me</button>
          </section>
        );
      })}
    </>
  );
}
