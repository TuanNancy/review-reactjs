import "./App.css";
import ActiveButtonExample from "./components/ActiveButtonExample";
import ChildrenDemo from "./components/ChildrenDemo";
import ClickExample from "./components/ClickExample";
import FullPropsCard from "./components/FullPropsCard";
import ForwardingPropsExample from "./components/ForwardingPropsExample";
import ParentEventExample from "./components/ParentEventExample";
import ProductExample from "./components/ProductExample";
import ProfileCard from "./components/ProfileCard";
import NameStateExample from "./components/NameStateExample";
import StateExample from "./components/StateExample";
import StudentStateExample from "./components/StudentStateExample";
import StudentMapExample, { StudentRow } from "./components/StudentMapExample";
import UseEffectExample from "./components/UseEffectExample";
import UseContextExample from "./components/UseContextExample";
import UseRefExample from "./components/UseRefExample";
import UseReducerCounterExample from "./components/UseReducerCounterExample";
import MemoCallbackComparison from "./components/MemoCallbackComparison";
import { demoProduct } from "./data/demoProduct";
import { createSaleProduct } from "./utils/createSaleProduct";

function App() {
  // App prepares the data, then passes it to the appropriate component.
  const saleProduct = createSaleProduct(demoProduct, 50000);

  return (
    <main className="props-demo">
      <header>
        <p className="eyebrow">REACTJS CƠ BẢN</p>
        <h1>Hiểu props qua một ví dụ</h1>
        <p className="intro">
          <code>App</code> là component cha, truyền dữ liệu xuống{" "}
          <code>ProfileCard</code> là component con.
        </p>
      </header>
      <UseReducerCounterExample />
      <MemoCallbackComparison />
      <UseRefExample />
      <UseContextExample />
      <UseEffectExample />

      <ProfileCard name="Minh" age={22} isOnline={true}>
        <strong>children prop:</strong> Nội dung này được truyền từ App vào giữa
        hai thẻ ProfileCard.
      </ProfileCard>

      <ProfileCard name="Tuan" age={35} isOnline={true}>
        <strong>children prop:</strong> Nội dung này được truyền từ App vào giữa
        hai thẻ ProfileCard.
      </ProfileCard>

      <FullPropsCard name="Lan" age={28} isOnline={false} />

      <ForwardingPropsExample />

      <ProductExample product={demoProduct} saleProduct={saleProduct} />

      <ChildrenDemo />

      <ClickExample />

      <ParentEventExample />

      <StateExample />

      <NameStateExample />

      <StudentStateExample />

      <ActiveButtonExample />

      <section className="student-map-example">
        <p className="eyebrow">INDEPENDENT COMPONENT</p>
        <h2>StudentRow tự lấy dữ liệu</h2>
        <p>
          <code>StudentRow</code> đọc trực tiếp <code>initialStudents[0]</code>{" "}
          từ file dữ liệu. Nó không nhận props từ <code>StudentMapExample</code>
          .
        </p>
        <ul className="student-list">
          <StudentRow />
        </ul>
      </section>

      <StudentMapExample />

      <ForwardingPropsExample />
      <section className="explanation">
        <h2>Props đang có trong ví dụ này</h2>
        <ul>
          <li>
            <code>name="Minh"</code>: chuỗi văn bản
          </li>
          <li>
            <code>age=&#123;22&#125;</code>: số
          </li>
          <li>
            <code>isOnline=&#123;true&#125;</code>: boolean
          </li>
          <li>
            <code>children</code>: JSX nằm giữa thẻ mở và thẻ đóng
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
