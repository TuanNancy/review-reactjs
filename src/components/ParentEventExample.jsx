import EventButton from "./EventButton";

function ParentEventExample() {
  // This function belongs to the parent component.
  function handleGreet(personName) {
    window.alert(
      `Hello ${personName}! The parent function handled this click.`,
    );
  }

  return (
    <section className="parent-event-example">
      <p className="eyebrow">EVENT FUNCTION AS A PROP</p>
      <h2>Parent sends a click handler to its child</h2>
      <p>
        <code>ParentEventExample</code> creates <code>handleGreet</code> and
        passes it to <code>EventButton</code> as <code>onGreet</code>.
      </p>

      <EventButton name="Minh" onGreet={handleGreet} />
      <EventButton name="Tuan" onGreet={handleGreet} />
      <EventButton name="Lan" onGreet={handleGreet} />

      <pre>{`// ParentEventExample.jsx (parent)
function handleGreet(personName) {
  window.alert(\`Hello \${personName}\`);
}

<EventButton name="Minh" onGreet={handleGreet} />

// EventButton.jsx (child)
function EventButton({ name, onGreet }) {
  return (
    <button onClick={() => onGreet(name)}>
      Say hello
    </button>
  );
}`}</pre>
    </section>
  );
}

export default ParentEventExample;
