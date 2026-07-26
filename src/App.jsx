import "./App.css";

// Component con: nhận dữ liệu từ App qua props.
function ProfileCard({ name, age, isOnline, children }) {
  return (
    <article className="profile-card">
      <div className="avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>

      <div className="profile-content">
        <p className="eyebrow">COMPONENT CON: ProfileCard</p>
        <h2>{name}</h2>
        <p>{age} tuổi</p>
        <p className={isOnline ? "status online" : "status offline"}>
          {isOnline ? "● Đang trực tuyến" : "● Đang ngoại tuyến"}
        </p>

        {/* children là nội dung được đặt giữa thẻ <ProfileCard>...</ProfileCard> */}
        <div className="card-note">{children}</div>
      </div>
    </article>
  );
}

// Same idea as ProfileCard, but this version does NOT destructure props.
// React passes one object named props into this function.
function FullPropsCard(props) {
  return (
    <article className="full-props-card">
      <p className="eyebrow">FULL PROPS OBJECT: FullPropsCard</p>
      <h2>{props.name}</h2>
      <p>{props.age} years old</p>
      <p>{props.isOnline ? "Online" : "Offline"}</p>
      <p className="props-code">
        This component reads: props.name, props.age, props.isOnline
      </p>
    </article>
  );
}

function createSaleProduct(product, discount) {
  // Destructuring: extract price, keep all remaining keys in productDetails.
  const { price, ...productDetails } = product;

  // Spread: copy the remaining keys into a brand-new object.
  return {
    ...productDetails,
    price: price - discount,
  };
}

function ProductExample({ product, saleProduct }) {
  // Destructuring: take individual keys out of the product object.
  const { name, category, price } = product;

  return (
    <section className="spread-example">
      <p className="eyebrow">DESTRUCTURING + SPREAD OPERATOR</p>
      <h2>{name}</h2>
      <p>{category}</p>

      <div className="price-grid">
        <div>
          <small>Original object</small>
          <strong>{price.toLocaleString("vi-VN")} VND</strong>
        </div>
        <div>
          <small>Copied object with a new price</small>
          <strong>{saleProduct.price.toLocaleString("vi-VN")} VND</strong>
        </div>
      </div>

      <pre>{`function createSaleProduct(product, discount) {
  const { price, ...productDetails } = product;

  return {
    ...productDetails,
    price: price - discount,
  };
}`}</pre>
      <p className="spread-note">
        <code>...product</code> copies every key from <code>product</code>. The next <code>price</code> replaces only that key in the new object.
      </p>
    </section>
  );
}

function App() {
  const product = {
    name: "React Notebook",
    category: "Learning material",
    price: 500000,
  };

  // The function returns a new object; product itself stays unchanged.
  const saleProduct = createSaleProduct(product, 50000);

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

      {/* name, age và isOnline đều là props */}
      <ProfileCard name="Minh" age={22} isOnline={true}>
        <strong>children prop:</strong> Nội dung này được truyền từ App vào giữa
        hai thẻ ProfileCard.
      </ProfileCard>
      <ProfileCard name="Tuan" age={35} isOnline={true}>
        <strong>children prop:</strong> Nội dung này được truyền từ App vào giữa
        hai thẻ ProfileCard.
      </ProfileCard>

      <FullPropsCard name="Lan" age={28} isOnline={false} />

      <ProductExample product={product} saleProduct={saleProduct} />

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
            <code>onGreet=&#123;handleGreet&#125;</code>: function prop from App
            to ProfileCard
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
