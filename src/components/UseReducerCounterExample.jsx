import { useReducer } from "react";

// Reducer nhận state hiện tại và action, sau đó luôn trả về state MỚI.
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "add":
      return { count: state.count + action.amount };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

const initialState = { count: 0 };

export default function UseReducerCounterExample() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <section className="reducer-example">
      <p className="eyebrow">USE REDUCER</p>
      <h2>Bộ đếm với useReducer</h2>
      <p>
        Mỗi nút gọi <code>dispatch(action)</code>. React đưa action vào
        <code> counterReducer </code> để tạo ra state mới.
      </p>

      <div className="reducer-counter" aria-live="polite">
        <span>Giá trị hiện tại</span>
        <strong>{state.count}</strong>
      </div>

      <div className="reducer-actions">
        <button onClick={() => dispatch({ type: "decrement" })}>- 1</button>
        <button onClick={() => dispatch({ type: "increment" })}>+ 1</button>
        <button onClick={() => dispatch({ type: "add", amount: 5 })}>
          + 5
        </button>
        <button
          className="secondary-button"
          onClick={() => dispatch({ type: "reset" })}
        >
          Đặt lại
        </button>
      </div>

      <p className="reducer-flow">
        Ví dụ khi bấm <strong>+ 1</strong>:{" "}
        <code>dispatch(&#123; type: "increment" &#125;)</code> → reducer tăng{" "}
        <code>count</code> → React render lại số mới.
      </p>
    </section>
  );
}
