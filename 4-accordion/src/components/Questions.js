import React from "react";
import Question from "./Question";

export default function Questions(props) {
  return (
    <>
      {props.questions.map((data) => {
        const { question, answer } = data;
        return (
          <section key={data.id} className="single-question">
            <Question question={question} answer={answer} />
          </section>
        );
      })}
    </>
  );
}
