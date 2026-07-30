import { useRef, useState } from "react";

function FocusInputExample() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <article className="ref-panel">
      <h3>1. Truy cập trực tiếp vào phần tử DOM</h3>
      <p>
        Gắn <code>ref</code> vào ô input. Sau khi render,{" "}
        <code>inputRef.current</code> là phần tử HTML <code>&lt;input&gt;</code>{" "}
        thật, nên ta gọi được hàm DOM <code>focus()</code>.
      </p>

      <label className="ref-input-label">
        Tên của bạn
        <input
          ref={inputRef}
          type="text"
          placeholder="Bấm nút để focus vào đây"
        />
      </label>

      <button type="button" onClick={focusInput}>
        Focus vào ô input
      </button>

      <p className="ref-note">
        Luồng: bấm nút → <code>focusInput()</code> →{" "}
        <code>inputRef.current.focus()</code> → con trỏ nhập liệu xuất hiện
        trong ô input.
      </p>
    </article>
  );
}

function SilentValueExample() {
  const clickRef = useRef(0);
  const [shownRefValue, setShownRefValue] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  function increaseRefOnly() {
    clickRef.current += 1;
  }

  function renderAgain() {
    setShownRefValue(clickRef.current);
    setRenderCount((count) => count + 1);
  }

  return (
    <article className="ref-panel">
      <h3>2. Lưu biến “ngầm” mà không render lại</h3>
      <p>
        <code>clickRef.current</code> giữ giá trị qua các lần render, nhưng thay
        đổi nó không yêu cầu React vẽ lại giao diện.
      </p>

      <div className="ref-values">
        <p>
          Giá trị ref đang hiển thị: <strong>{shownRefValue}</strong>
        </p>
        <p>
          Số lần render bằng state: <strong>{renderCount}</strong>
        </p>
      </div>

      <div className="ref-actions">
        <button type="button" onClick={increaseRefOnly}>
          Tăng ref (không render)
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={renderAgain}
        >
          Render lại bằng state
        </button>
      </div>

      <ol className="ref-steps">
        <li>Bấm “Tăng ref” vài lần: số trên giao diện chưa đổi.</li>
        <li>
          Giá trị trong <code>clickRef.current</code> vẫn đã tăng, chỉ là React
          chưa render lại để hiển thị nó.
        </li>
        <li>
          Bấm “Render lại bằng state”: state đổi, React render lại và lúc này số
          ref mới xuất hiện.
        </li>
      </ol>
    </article>
  );
}

function UseRefExample() {
  return (
    <section className="ref-example">
      <p className="eyebrow">BÀI HỌC USEREF</p>
      <h2>useRef dùng để làm gì?</h2>
      <p>
        <code>useRef(initialValue)</code> tạo một object có dạng{" "}
        <code>&#123; current: ... &#125;</code>. Object này được React giữ lại
        giữa các lần render.
      </p>

      <FocusInputExample />
      <SilentValueExample />
    </section>
  );
}

export default UseRefExample;
