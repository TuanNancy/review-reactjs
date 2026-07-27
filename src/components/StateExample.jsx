import { useState } from "react";

function StateExample() {
  // useState(0) creates state whose first value is 0.
  // count is the current value; setCount is the only way to request an update.
  const [count, setCount] = useState(0);

  function increaseCount() {
    // The updater function receives the latest state value.
    setCount((currentCount) => currentCount + 1);
  }

  function decreaseCount() {
    setCount((currentCount) => currentCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <section className="state-example">
      <p className="eyebrow">STATE + USESTATE HOOK</p>
      <h2>Count: {count}</h2>
      <p>
        <code>count</code> is state. When <code>setCount</code> changes it, React renders this component again with the new value.
      </p>

      <div className="state-actions">
        <button type="button" onClick={decreaseCount}>
          - 1
        </button>
        <button type="button" onClick={increaseCount}>
          + 1
        </button>
        <button type="button" className="secondary-button" onClick={resetCount}>
          Reset to 0
        </button>
      </div>

      <pre>{`import { useState } from "react";

const [count, setCount] = useState(0);

function increaseCount() {
  setCount((currentCount) => currentCount + 1);
}`}</pre>

      <ol className="state-flow">
        <li><code>useState(0)</code> gives count its first value: <code>0</code>.</li>
        <li>Clicking <code>+ 1</code> runs <code>increaseCount</code>.</li>
        <li><code>setCount</code> requests the next state value.</li>
        <li>React renders <code>StateExample</code> again, so <code>{`{count}`}</code> shows the new value.</li>
      </ol>
    </section>
  );
}

export default StateExample;
