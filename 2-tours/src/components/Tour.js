import { useState } from "react";

export default function Tour(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h3>{props.name}</h3>
          <h3 className="tour-price">${props.price}</h3>
        </div>
        <p>{readMore ? props.info : `${props.info.substring(0,250)}...`}</p>
        <button onClick={()=>setReadMore(!readMore)} className='show'>
            {readMore ? 'Show less' : 'Show more'}
        </button>
        <div className="btn-container">
          <button className="delete-btn" onClick={() => props.removeTours(props.id)}>Not Interested</button>
        </div>
      </footer>
    </article>
  );
}
