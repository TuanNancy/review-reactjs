function FullPropsCard(props) {
  return (
    <article className="full-props-card">
      <p className="eyebrow">FULL PROPS OBJECT: FullPropsCard</p>
      <h2>{props.name}</h2>
      <p>{props.age} years old</p>
      <p>{props.isOnline ? "Online" : "Offline"}</p>
      <p className="props-code">
        This component reads: props.name, props.age, props.isOnline
      </p>
    </article>
  );
}

export default FullPropsCard;
