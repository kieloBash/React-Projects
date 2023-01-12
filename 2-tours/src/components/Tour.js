export default function Tour(props) {
  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h3>{props.name}</h3>
          <h3 className="tour-price">${props.price}</h3>
        </div>
        <p>{props.info}</p>
        <div className="btn-container">
          <button className="delete-btn">Not Interested</button>
        </div>
      </footer>
    </article>
  );
}
