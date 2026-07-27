function ClickExample() {
  function handleClick() {
    window.alert("You clicked the button!");
  }

  function showProductName(productName) {
    window.alert(`Selected product: ${productName}`);
  }

  return (
    <section className="click-example">
      <p className="eyebrow">REACT ONCLICK</p>
      <h2>Run a function when the user clicks</h2>
      <p className="click-intro">
        Click either button. The result is shown with <code>window.alert</code>, so this example does not need <code>useState</code>.
      </p>

      <div className="click-actions">
        <button type="button" onClick={handleClick}>
          Call handleClick
        </button>
        <button type="button" onClick={() => showProductName("React Notebook")}>
          Send an argument
        </button>
      </div>

      <pre>{`// Pass the function reference: React calls it after a click.
<button onClick={handleClick}>Click</button>

// Use an arrow function when the handler needs an argument.
<button onClick={() => showProductName("React Notebook")}>
  Select product
</button>`}</pre>
      <p className="click-warning">
        Do not write <code>onClick=&#123;handleClick()&#125;</code>. That calls the function immediately while rendering, before the user clicks.
      </p>
    </section>
  );
}

export default ClickExample;
