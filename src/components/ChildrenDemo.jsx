function ChildrenWithDestructuring({ children }) {
  return (
    <article className="children-card">
      <p className="eyebrow">WITH DESTRUCTURING</p>
      <h3>function Box(&#123; children &#125;)</h3>
      <div className="children-content">{children}</div>
    </article>
  );
}

function ChildrenWithoutDestructuring(props) {
  return (
    <article className="children-card">
      <p className="eyebrow">WITHOUT DESTRUCTURING</p>
      <h3>function Box(props)</h3>
      <div className="children-content">{props.children}</div>
    </article>
  );
}

function ChildrenDemo() {
  return (
    <section className="children-demo">
      <p className="eyebrow">PROPS.CHILDREN</p>
      <h2>Content placed between opening and closing component tags</h2>

      <div className="children-grid">
        <ChildrenWithDestructuring>
          <strong>This is children.</strong> It is rendered with the
          destructured variable <code>children</code>.
        </ChildrenWithDestructuring>

        <ChildrenWithoutDestructuring>
          <strong>This is also children.</strong> It is rendered with{" "}
          <code>props.children</code>.
        </ChildrenWithoutDestructuring>
        <ChildrenWithoutDestructuring>
          <strong>This is also children.</strong> It is rendered with{" "}
          <code>props.children</code>.
        </ChildrenWithoutDestructuring>
      </div>

      <pre>{`<ChildrenWithDestructuring>
  Content here becomes children
</ChildrenWithDestructuring>`}</pre>
    </section>
  );
}

export default ChildrenDemo;
