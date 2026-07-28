import { useState } from "react";

// `variant` and `children` are props owned by this component.
// Everything else is collected into `buttonProps` and passed to the real <button>.
function ActionButton({ variant = "primary", children, className = "", ...buttonProps }) {
  return (
    <button
      className={`forward-button forward-button--${variant} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

function ForwardingPropsExample() {
  const [message, setMessage] = useState("Chưa có thao tác nào.");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <section className="forwarding-example">
      <p className="eyebrow">FORWARDING PROPS</p>
      <h2>Chuyển tiếp props với <code>...props</code></h2>
      <p>
        <code>ActionButton</code> thêm giao diện riêng, nhưng vẫn cho phép component cha
        gửi các props HTML chuẩn xuống thẻ <code>&lt;button&gt;</code> bên trong.
      </p>

      <div className="forwarding-actions">
        <ActionButton
          type="button"
          variant="primary"
          title="Nhấn để lưu bài học"
          aria-label="Lưu bài học về forwarding props"
          data-topic="forwarding-props"
          onClick={() => setMessage("Đã gọi onClick được chuyển tiếp từ component cha.")}
        >
          Lưu bài học
        </ActionButton>

        <ActionButton
          type="button"
          variant="outline"
          disabled={isDisabled}
          title="Ví dụ của prop disabled"
          onClick={() => setMessage("Nút phụ cũng nhận onClick qua ...buttonProps.")}
        >
          Nút phụ
        </ActionButton>

        <label className="disable-toggle">
          <input
            type="checkbox"
            checked={isDisabled}
            onChange={(event) => setIsDisabled(event.target.checked)}
          />
          Vô hiệu hóa nút phụ (prop <code>disabled</code>)
        </label>
      </div>

      <p className="forwarding-result" role="status">
        {message}
      </p>

      <pre>{`function ActionButton({ variant = "primary", children, ...buttonProps }) {
  return (
    <button className={\`forward-button forward-button--\${variant}\`} {...buttonProps}>
      {children}
    </button>
  );
}

<ActionButton
  type="button"
  disabled={false}
  title="Lưu bài học"
  onClick={handleSave}
>
  Lưu bài học
</ActionButton>`}</pre>

      <ul className="forwarding-notes">
        <li><code>variant</code> được component xử lý để chọn kiểu nút.</li>
        <li><code>...buttonProps</code> gom các props còn lại thành một object.</li>
        <li><code>&#123;...buttonProps&#125;</code> trải object đó thành props cho thẻ <code>button</code>.</li>
      </ul>
    </section>
  );
}

export default ForwardingPropsExample;
