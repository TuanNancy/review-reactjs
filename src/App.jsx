import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">TRANG CHỦ: URL LÀ /</p>
      <h2>React Router đang hiển thị HomePage</h2>
      <p>
        Đây là route con mặc định. Nó được render vào vị trí <code>Outlet</code>{" "}
        trong <code>Layout</code>.
      </p>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">TRANG GIỚI THIỆU: URL LÀ /about</p>
      <h2>React Router đang hiển thị AboutPage</h2>
      <p>
        Đây cũng là route con của <code>Layout</code>. Header và menu vẫn giữ
        nguyên, chỉ nội dung trong <code>Outlet</code> đổi từ{" "}
        <code>HomePage</code> sang <code>AboutPage</code>.
      </p>
    </section>
  );
}

function VehiclesHomePage() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">TRANG XE CỘ: URL LÀ /vehicles</p>
      <h2>React Router đang hiển thị VehiclesHomePage</h2>
      <p>
        Đây là index route của <code>VehiclesLayout</code>. Hãy chọn Bike hoặc
        Car ở menu ngay phía trên để mở route con.
      </p>
    </section>
  );
}

function BikePage() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">URL LÀ /vehicles/bike</p>
      <h2>BikePage xuất hiện trong Outlet thứ hai</h2>
      <p>
        <code>bike</code> là path con của <code>vehicles</code>, nên URL hoàn
        chỉnh là <code>/vehicles/bike</code>.
      </p>
    </section>
  );
}

function CarPage() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">URL LÀ /vehicles/car</p>
      <h2>CarPage xuất hiện trong Outlet thứ hai</h2>
      <p>
        <code>car</code> là path con của <code>vehicles</code>, nên URL hoàn
        chỉnh là <code>/vehicles/car</code>.
      </p>
    </section>
  );
}

function VehiclesLayout() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">ROUTE CHA CẤP 2: /vehicles</p>
      <h2>VehiclesLayout có Outlet riêng</h2>
      <p>
        <code>VehiclesLayout</code> đã được render vào <code>Outlet</code> của{" "}
        <code>Layout</code>. Bây giờ Bike hoặc Car sẽ được render vào{" "}
        <code>Outlet</code> bên dưới.
      </p>

      <nav className="basic-router-nav" aria-label="Điều hướng xe cộ">
        <Link to="/vehicles">Tổng quan</Link>
        <Link to="/vehicles/bike">Bike</Link>
        <Link to="/vehicles/car">Car</Link>
      </nav>

      <Outlet />
    </section>
  );
}

function Layout() {
  return (
    <main className="basic-router">
      <header>
        <p className="eyebrow">REACT ROUTER: BÀI 2</p>
        <h1>Nested Routes và Outlet</h1>
        <p className="intro">
          <code>Layout</code> là route cha. Các trang bên dưới là route con.
        </p>
      </header>

      <nav className="basic-router-nav" aria-label="Điều hướng chính">
        <Link to="/">Trang chủ</Link>
        <Link to="/about">Giới thiệu</Link>
        <Link to="/vehicles">Xe cộ</Link>
      </nav>

      <section className="basic-router-card">
        <p className="eyebrow">ROUTE CHA: /</p>
        <h2>
          <code>Outlet</code> là vị trí của route con
        </h2>
        <p>
          Mọi thứ phía trên <code>Outlet</code>, như header và menu, thuộc
          <code>Layout</code> nên luôn hiện ở cả hai URL.
        </p>
        <pre className="basic-router-code">
          {
            '<Route path="/" element={<Layout />}>\n  <Route index element={<HomePage />} />\n  <Route path="about" element={<AboutPage />} />\n  <Route path="vehicles" element={<VehiclesLayout />}>\n    <Route index element={<VehiclesHomePage />} />\n    <Route path="bike" element={<BikePage />} />\n    <Route path="car" element={<CarPage />} />\n  </Route>\n</Route>'
          }
        </pre>
      </section>

      <Outlet />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vehicles" element={<VehiclesLayout />}>
            <Route index element={<VehiclesHomePage />} />
            <Route path="bike" element={<BikePage />} />
            <Route path="car" element={<CarPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
