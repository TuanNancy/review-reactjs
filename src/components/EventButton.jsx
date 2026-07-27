function EventButton({ name, onGreet }) {
  return (
    <button type="button" onClick={() => onGreet(name)}>
      Say hello to {name}
    </button>
  );
}

export default EventButton;
