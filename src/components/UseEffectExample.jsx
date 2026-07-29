import { useEffect, useState } from "react";

// 1. Không truyền dependency array: effect chạy sau MỌI lần component render.
function EffectAfterEveryRender() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Ví dụ 1: effect chạy sau mỗi lần render. Count:", count);
  });

  return (
    <div className="effect-panel">
      <h3>1. Không có dependency array</h3>
      <p>
        <code>useEffect(() =&gt; &#123;...&#125;)</code> chạy sau lần render đầu tiên và sau mọi
        lần render tiếp theo.
      </p>
      <p className="effect-result">
        Count hiện tại: <strong>{count}</strong>
      </p>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Tăng count
      </button>
      <p className="effect-note">Mỗi lần bấm nút, mở Console sẽ thấy effect chạy lại.</p>
      <pre>{`useEffect(() => {
  console.log("Chạy sau mỗi lần render");
});`}</pre>
    </div>
  );
}

// 2. Dependency array rỗng: effect chỉ chạy một lần khi component xuất hiện.
function EffectOnMount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Ví dụ 2: effect chỉ chạy một lần khi component được hiển thị.");
  }, []);

  return (
    <div className="effect-panel">
      <h3>2. Dependency array rỗng: []</h3>
      <p>
        <code>useEffect(() =&gt; &#123;...&#125;, [])</code> chỉ chạy một lần sau khi component
        render lần đầu. Thường dùng để gọi API lấy dữ liệu ban đầu.
      </p>
      <p className="effect-result">
        Count hiện tại: <strong>{count}</strong>
      </p>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Tăng count
      </button>
      <p className="effect-note">
        Bấm nút vẫn làm component render lại, nhưng Console không có log effect mới.
      </p>
      <pre>{`useEffect(() => {
  console.log("Chỉ chạy khi component xuất hiện");
}, []);`}</pre>
    </div>
  );
}

// 3. Có dependency: effect chạy lần đầu và chạy lại khi dependency thay đổi.
function EffectWhenValueChanges() {
  const [name, setName] = useState("");
  const displayedName = name.trim() || "bạn";

  useEffect(() => {
    console.log("Ví dụ 3: name thay đổi nên effect chạy lại:", name);
    document.title = `Xin chào, ${name.trim() || "bạn"}!`;
  }, [name]);

  return (
    <div className="effect-panel">
      <h3>3. Có dependency: [name]</h3>
      <p>
        <code>useEffect(() =&gt; &#123;...&#125;, [name])</code> chạy sau lần render đầu tiên và
        chạy lại mỗi khi <code>name</code> thay đổi.
      </p>
      <label className="name-field">
        Nhập tên của bạn
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ví dụ: Minh"
        />
      </label>
      <p className="effect-result">
        Xin chào, <strong>{displayedName}</strong>!
      </p>
      <p className="effect-note">
        Khi nhập tên, effect đổi tiêu đề tab và ghi log vào Console.
      </p>
      <pre>{`useEffect(() => {
  document.title = \`Xin chào, \${name || "bạn"}!\`;
}, [name]);`}</pre>
    </div>
  );
}

// 4. Gọi API: lấy dữ liệu sau khi component xuất hiện.
function FetchUsersExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3");

        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu từ API.");
        }

        const data = await response.json();
        setUsers(data);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, [reloadCount]);

  return (
    <div className="effect-panel">
      <h3>4. Gọi API để lấy dữ liệu</h3>
      <p>
        Effect gọi API sau khi component xuất hiện. Khi API trả dữ liệu về,
        <code>setUsers</code> cập nhật state và React render danh sách người dùng.
      </p>
      <button type="button" onClick={() => setReloadCount((current) => current + 1)}>
        Gọi lại API
      </button>
      {isLoading && <p className="effect-note">Đang tải dữ liệu...</p>}
      {error && <p className="effect-note">Lỗi: {error}</p>}
      {!isLoading && !error && (
        <ul className="effect-list">
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
      <pre>{'useEffect(() => {\n  fetch("/api/users")\n    .then((response) => response.json())\n    .then((data) => setUsers(data));\n}, []);'}</pre>
    </div>
  );
}

// 5. Đồng bộ state với localStorage của trình duyệt.
function LocalStorageExample() {
  const [note, setNote] = useState(() => localStorage.getItem("use-effect-note") || "");

  useEffect(() => {
    localStorage.setItem("use-effect-note", note);
  }, [note]);

  return (
    <div className="effect-panel">
      <h3>5. Lưu dữ liệu vào localStorage</h3>
      <p>
        Mỗi khi <code>note</code> thay đổi, effect lưu nó vào bộ nhớ của trình duyệt. Tải lại
        trang, ghi chú vẫn còn.
      </p>
      <label className="name-field">
        Ghi chú của bạn
        <input
          type="text"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Nhập một ghi chú"
        />
      </label>
      <pre>{'useEffect(() => {\n  localStorage.setItem("note", note);\n}, [note]);'}</pre>
    </div>
  );
}

// 6. Timer là API của trình duyệt, nên dùng effect để tạo và cleanup để xóa timer.
function TimerExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return (
    <div className="effect-panel">
      <h3>6. Tạo timer</h3>
      <p>
        Effect tạo một <code>setInterval</code> khi component xuất hiện. Hàm return là cleanup,
        dùng để xóa interval khi component bị gỡ khỏi màn hình.
      </p>
      <p className="effect-result">
        Timer đã chạy: <strong>{seconds}</strong> giây
      </p>
      <pre>{'useEffect(() => {\n  const timerId = setInterval(updateClock, 1000);\n  return () => clearInterval(timerId);\n}, []);'}</pre>
    </div>
  );
}

function UseEffectExample() {
  return (
    <section className="effect-example">
      <p className="eyebrow">BÀI HỌC USEEFFECT</p>
      <h2>Các trường hợp dùng useEffect</h2>
      <p>
        <code>useEffect</code> chạy sau khi React đã render giao diện. Hãy mở <kbd>F12</kbd>
        {" → "}<strong>Console</strong> để quan sát từng ví dụ.
      </p>

      <EffectAfterEveryRender />
      <EffectOnMount />
      <EffectWhenValueChanges />
      <FetchUsersExample />
      <LocalStorageExample />
      <TimerExample />
    </section>
  );
}

export default UseEffectExample;
