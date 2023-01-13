import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
export default function Question(props) {
  const [toggleHide, setToggleHide] = useState(true);

  return (
    <>
      <div className="head">
        <h3>{props.question}</h3>

        {toggleHide ? (
          <button
            className="btn-toggle"
            onClick={() => setToggleHide(!toggleHide)}
          >
            <FaPlus />
          </button>
        ) : (
          <button
            className="btn-toggle"
            onClick={() => setToggleHide(!toggleHide)}
          >
            <FaMinus />
          </button>
        )}
      </div>

        {toggleHide ? ('') : (<div className='body'>
        <p>{props.answer}</p>
      </div>)}

      
    </>
  );
}
