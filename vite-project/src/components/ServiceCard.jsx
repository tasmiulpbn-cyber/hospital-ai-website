function ServiceCard(props) {
  return (
    <div className="card">
      <h3>{props.icon} {props.title}
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ServiceCard;
