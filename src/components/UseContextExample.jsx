import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

function UserGreeting() {
  const user = useContext(UserContext);

  return (
    <div className="context-greeting">
      <p>
        Component con dùng <code>useContext(UserContext)</code>:
      </p>
      <strong>Xin chào, {user.name}! 👋</strong>
      <span>Vai trò: {user.role}</span>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="context-dashboard">
      <p>
        <code>Dashboard</code> không nhận prop <code>user</code>, nhưng
        component con bên trong vẫn lấy được dữ liệu.
      </p>
      <UserGreeting />
    </div>
  );
}

function UserGreetingWithProps({ user }) {
  return (
    <div className="context-greeting">
      <p>
        Component con nhận <code>user</code> qua props:
      </p>
      <strong>Xin chào, {user.name}! 👋</strong>
      <span>Vai trò: {user.role}</span>
    </div>
  );
}

function DashboardWithProps({ user }) {
  return (
    <div className="context-dashboard">
      <p>
        <code>DashboardWithProps</code> nhận prop <code>user</code>, sau đó phải
        truyền tiếp cho component con.
      </p>
      <UserGreetingWithProps user={user} />
    </div>
  );
}

function UseContextExample() {
  const [user, setUser] = useState({ name: "Minh", role: "Học viên React" });

  function changeUser() {
    setUser((currentUser) =>
      currentUser.name === "Minh"
        ? { name: "Lan", role: "Giảng viên React" }
        : { name: "Minh", role: "Học viên React" },
    );
  }

  return (
    <section className="context-example">
      <p className="eyebrow">BÀI HỌC USECONTEXT</p>
      <h2>Chia sẻ thông tin người dùng</h2>
      <p>
        <code>App</code> cung cấp dữ liệu, còn component ở sâu bên trong dùng{" "}
        <code>useContext</code> để đọc dữ liệu mà không cần truyền props qua
        từng tầng.
      </p>

      <div className="context-comparison">
        <div className="context-method">
          <h3>1. Dùng useContext</h3>
          <p className="context-flow">
            UseContextExample → Provider → Dashboard → UserGreeting
          </p>
          <UserContext.Provider value={user}>
            <Dashboard />
          </UserContext.Provider>
        </div>

        <div className="context-method">
          <h3>2. Truyền props qua từng tầng</h3>
          <p className="context-flow">
            UseContextExample → DashboardWithProps → UserGreetingWithProps
          </p>
          <DashboardWithProps user={user} />
        </div>
      </div>

      <button type="button" onClick={changeUser}>
        Đổi người dùng
      </button>
    </section>
  );
}

export default UseContextExample;
