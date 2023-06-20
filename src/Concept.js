const Concept = (props) => {
  return (
    <li className="concept">
      <img src={props.concept.image} alt={props.concept.title } />
      <h2>{props.concept.title }</h2>
      <p>{props.concept.description }</p>
    </li>
  );
};

export default Concept;