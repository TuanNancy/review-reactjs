import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";

const vehicles = [
  { slug: "bike", name: "Bike", type: "Xe đạp" },
  { slug: "car", name: "Car", type: "Ô tô" },
  { slug: "truck", name: "Truck", type: "Xe tải" },
];

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
        Đây là index route của <code>VehiclesLayout</code>. Hãy chọn Bike, Car
        hoặc Truck ở menu ngay phía trên để truyền một URL parameter.
      </p>
    </section>
  );
}

function VehicleDetailPage() {
  const { vehicleName } = useParams();
  const vehicle = vehicles.find((item) => item.slug === vehicleName);

  if (!vehicle) {
    return (
      <section className="basic-router-card">
        <p className="eyebrow">URL PARAMETER: {vehicleName}</p>
        <h2>Route khớp, nhưng không có dữ liệu xe</h2>
        <p>
          Route <code>:vehicleName</code> vẫn khớp URL này. Tuy nhiên, dữ liệu
          không có xe với slug <code>{vehicleName}</code>. Ứng dụng thật thường
          hiển thị trang 404 hoặc nút quay lại ở trường hợp này.
        </p>
      </section>
    );
  }

  return (
    <section className="basic-router-card">
      <p className="eyebrow">URL PARAMETER: vehicleName = {vehicleName}</p>
      <h2>{vehicle.name} được render bởi VehicleDetailPage</h2>
      <p>
        Một component này xử lý cả Bike, Car và Truck. Giá trị{" "}
        <code>{vehicleName}</code> từ URL được dùng để tìm dữ liệu xe:{" "}
        <strong>{vehicle.type}</strong>.
      </p>
      <pre className="basic-router-code">
        {
          "const { vehicleName } = useParams();\nconst vehicle = vehicles.find((item) => item.slug === vehicleName);"
        }
      </pre>
    </section>
  );
}

function navLinkClassName({ isActive }) {
  return `basic-router-link${isActive ? " is-active" : ""}`;
}

function VehiclesLayout() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">ROUTE CHA CẤP 2: /vehicles</p>
      <h2>VehiclesLayout có Outlet riêng</h2>
      <p>
        <code>VehiclesLayout</code> đã được render vào <code>Outlet</code> của{" "}
        <code>Layout</code>. Bây giờ VehicleDetailPage sẽ được render vào{" "}
        <code>Outlet</code> bên dưới.
      </p>

      <nav className="basic-router-nav" aria-label="Điều hướng xe cộ">
        <NavLink className={navLinkClassName} end to="/vehicles">
          Tổng quan
        </NavLink>
        <NavLink className={navLinkClassName} end to="/vehicles/bike">
          Bike
        </NavLink>
        <NavLink className={navLinkClassName} end to="/vehicles/car">
          Car
        </NavLink>
        <NavLink className={navLinkClassName} end to="/vehicles/truck">
          Truck
        </NavLink>
        <NavLink className={navLinkClassName} end to="/vehicles/plane">
          Không có dữ liệu
        </NavLink>
      </nav>

      <Outlet />
    </section>
  );
}

function Layout() {
  return (
    <main className="basic-router">
      <header>
        <p className="eyebrow">REACT ROUTER: BÀI 3</p>
        <h1>URL Parameters với Nested Routes</h1>
        <p className="intro">
          <code>Layout</code> là route cha. Các trang bên dưới là route con.
        </p>
      </header>

      <nav className="basic-router-nav" aria-label="Điều hướng chính">
        <NavLink className={navLinkClassName} end to="/">
          Trang chủ
        </NavLink>
        <NavLink className={navLinkClassName} end to="/about">
          Giới thiệu
        </NavLink>
        <NavLink className={navLinkClassName} end to="/vehicles">
          Xe cộ
        </NavLink>
      </nav>
      <p className="basic-router-active-note">
        Link có nền tím là <code>NavLink</code> đang active, vì URL hiện tại
        khớp với giá trị <code>to</code> của nó.
      </p>

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
            '<Route path="/" element={<Layout />}>\n  <Route index element={<HomePage />} />\n  <Route path="about" element={<AboutPage />} />\n  <Route path="vehicles" element={<VehiclesLayout />}>\n    <Route index element={<VehiclesHomePage />} />\n    <Route path=":vehicleName" element={<VehicleDetailPage />} />\n  </Route>\n</Route>'
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
            <Route path=":vehicleName" element={<VehicleDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
