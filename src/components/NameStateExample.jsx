import { useState } from "react";

function NameStateExample() {
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function clearName() {
    setName("");
  }

  return (
    <section className="name-state-example">
      <p className="eyebrow">USESTATE WITH AN INPUT</p>
      <h2>Type your name</h2>
      <p>The input value comes from state. Try typing below.</p>

      <label className="name-field">
        Your name
        <input
          type="text"
          // value={name}
          onChange={handleNameChange}
          placeholder="Example: Minh"
        />
      </label>

      <p className="greeting-preview">
        Hello, <strong>{name || "friend"}</strong>!
      </p>

      <button type="button" className="secondary-button" onClick={clearName}>
        Clear name
      </button>

      <pre>{`const [name, setName] = useState("");

function handleNameChange(event) {
  setName(event.target.value);
}

<input value={name} onChange={handleNameChange} />`}</pre>
    </section>
  );
}

export default NameStateExample;
