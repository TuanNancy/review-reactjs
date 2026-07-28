import { useState } from "react";

function ActiveButtonExample() {
  const [selectedLevel, setSelectedLevel] = useState("Cơ bản");

  function selectLevel(event) {
    setSelectedLevel(event.currentTarget.value);
  }

  return (
    <section className="active-button-example">
      <p className="eyebrow">ACTIVE BUTTON WITH USESTATE</p>
      <h2>Chọn cấp độ học React</h2>
      <p>
        Nút đang chọn sẽ có class <code>is-active</code> để sáng lên.
      </p>

      <div className="level-actions" aria-label="Chọn cấp độ học">
        <button
          type="button"
          value="Cơ bản"
          className={`level-button ${selectedLevel === "Cơ bản" ? "is-active" : ""}`}
          onClick={selectLevel}
        >
          Cơ bản
        </button>
        <button
          type="button"
          value="Trung bình"
          className={`level-button ${selectedLevel === "Trung bình" ? "is-active" : ""}`}
          onClick={selectLevel}
        >
          Trung bình
        </button>
        <button
          type="button"
          value="Nâng cao"
          className={`level-button ${selectedLevel === "Nâng cao" ? "is-active" : ""}`}
          onClick={selectLevel}
        >
          Nâng cao
        </button>
      </div>

      <p className="selected-level">
        Bạn đang chọn: <strong>{selectedLevel}</strong>
      </p>

      <pre>{`const [selectedLevel, setSelectedLevel] = useState("Cơ bản");

function selectLevel(event) {
  setSelectedLevel(event.currentTarget.value);
}

className={selectedLevel === "Cơ bản" ? "is-active" : ""}`}</pre>
    </section>
  );
}

export default ActiveButtonExample;
