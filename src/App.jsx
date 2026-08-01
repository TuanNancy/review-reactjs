import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <section className="basic-router-card">
      <p className="eyebrow">TRANG CHỦ: URL LÀ /</p>
      <h2>React Router đang hiển thị HomePage</h2>
      <p>
        Hãy bấm liên kết <code>Giới thiệu</code> ở trên. URL sẽ đổi thành
        <code>/about</code>, rồi React Router sẽ hiển thị component khác.
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
        Trang này xuất hiện vì URL <code>/about</code> khớp với một
        <code>Route</code> trong <code>Routes</code>.
      </p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main className="basic-router">
        <header>
          <p className="eyebrow">REACT ROUTER: BÀI 1</p>
          <h1>Link, Route và Routes</h1>
          <p className="intro">
            Chỉ cần hiểu ba thành phần này trước khi học route động hay nested routes.
          </p>
        </header>

        <nav className="basic-router-nav" aria-label="Điều hướng chính">
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
        </nav>

        <section className="basic-router-card">
          <h2>Ba khái niệm</h2>
          <ol className="basic-router-list">
            <li><code>Link</code>: liên kết để đổi URL mà không reload cả trang.</li>
            <li><code>Route</code>: quy tắc: URL nào thì hiện component nào.</li>
            <li><code>Routes</code>: nơi React Router tìm <code>Route</code> khớp URL hiện tại.</li>
          </ol>
        </section>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
