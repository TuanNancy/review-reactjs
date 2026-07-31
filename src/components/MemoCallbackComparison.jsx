import { memo, useCallback, useMemo, useState } from "react";

// Khai báo ngoài component để mảng này có cùng tham chiếu ở mọi lần render.
// Nhờ vậy, useMemo chỉ tính lại khi keyword đổi.
const products = [
  { id: 1, name: "Áo React" },
  { id: 2, name: "Sách JavaScript" },
  { id: 3, name: "Khóa học React" },
  { id: 4, name: "Bàn phím" },
];

// memo chỉ render lại SearchBox nếu props của nó thay đổi theo Object.is.
const SearchBox = memo(function SearchBox({ onSearch }) {
  return (
    <div className="memo-search-box">
      <label htmlFor="product-keyword">Tìm sản phẩm</label>
      <input
        id="product-keyword"
        placeholder="Ví dụ: react"
        onChange={(event) => onSearch(event.target.value)}
      />
      <small>Được bọc bằng React.memo để nhận biết prop onSearch có đổi hay không.</small>
    </div>
  );
});

function MemoCallbackComparison() {
  const [keyword, setKeyword] = useState("");
  const [theme, setTheme] = useState("light");
  const [renderTick, setRenderTick] = useState(0);

  // useMemo lưu giá trị trả về của callback này: chính là filteredProducts.
  const filteredProducts = useMemo(() => {
    console.log("useMemo: đang lọc sản phẩm");

    return products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  // useCallback lưu bản thân hàm. setKeyword ổn định, nên deps có thể là [].
  const handleSearch = useCallback((newKeyword) => {
    setKeyword(newKeyword);
  }, []);

  return (
    <section className="memo-callback-example">
      <p className="eyebrow">useMemo và useCallback</p>
      <h2>Cùng cơ chế nhớ, khác thứ được nhớ</h2>
      <p>
        Mở Console để thấy <code>useMemo</code> chỉ lọc lại khi bạn đổi từ khóa.
        Bấm đổi giao diện để buộc component cha render lại nhưng không lọc lại và
        <code> SearchBox</code> cũng không render lại.
      </p>

      <div className="memo-status" aria-live="polite">
        <span>Đã tạo render mới: <strong>{renderTick}</strong> lần</span>
        <span>Khóa cache useMemo: <strong>{keyword || "(rỗng)"}</strong></span>
        <span>Giao diện: <strong>{theme}</strong></span>
      </div>

      <button
        className="secondary-button"
        onClick={() => {
          setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
          setRenderTick((currentTick) => currentTick + 1);
        }}
      >
        Đổi giao diện (chỉ để tạo render mới)
      </button>

      <SearchBox onSearch={handleSearch} />

      <div className="memo-result">
        <p>
          <strong>Giá trị do useMemo nhớ:</strong> <code>filteredProducts</code>
        </p>
        <ul>
          {filteredProducts.map((product) => <li key={product.id}>{product.name}</li>)}
        </ul>
      </div>

      <div className="memo-comparison-grid">
        <article>
          <h3>1. useMemo: nhớ kết quả</h3>
          <pre>{"const filteredProducts = useMemo(() => {\n  return products.filter((product) =>\n    product.name.includes(keyword)\n  );\n}, [keyword]);"}</pre>
          <ol>
            <li><code>useMemo</code> nhận một hàm tính toán.</li>
            <li>Hàm đó chạy lần đầu và trả về một <strong>mảng sản phẩm đã lọc</strong>.</li>
            <li>React cất mảng kết quả này cùng dependency <code>keyword</code>.</li>
            <li>Nếu render lại nhưng <code>keyword</code> không đổi, React trả lại mảng cũ; hàm lọc không chạy.</li>
            <li>Khi <code>keyword</code> đổi, React chạy lọc lại và nhớ mảng kết quả mới.</li>
          </ol>
        </article>

        <article>
          <h3>2. useCallback: nhớ hàm</h3>
          <pre>{"const handleSearch = useCallback((newKeyword) => {\n  setKeyword(newKeyword);\n}, []);"}</pre>
          <ol>
            <li><code>useCallback</code> nhận một <strong>hàm cần dùng lại</strong>.</li>
            <li>React giữ cùng tham chiếu <code>handleSearch</code> giữa các render.</li>
            <li><code>[]</code> nghĩa là hàm không đọc biến nào có thể thay đổi từ render hiện tại.</li>
            <li><code>SearchBox</code> được bọc bằng <code>memo</code>, nên prop <code>onSearch</code> không đổi thì nó bỏ qua render.</li>
            <li>Gõ vào ô tìm kiếm gọi hàm đã nhớ; hàm cập nhật <code>keyword</code>, từ đó kích hoạt useMemo lọc lại.</li>
          </ol>
        </article>
      </div>

      <p className="memo-equivalence">
        Về bản chất: <code>useCallback(fn, deps)</code> tương đương với{" "}
        <code>useMemo(() =&gt; fn, deps)</code>. Dòng đầu trả về <em>hàm</em>;
        dòng sau cũng trả về <em>hàm</em>, vì callback của useMemo trả về <code>fn</code>.
      </p>
    </section>
  );
}

export default MemoCallbackComparison;
