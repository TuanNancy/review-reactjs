import { memo, useCallback, useMemo, useState } from "react";

const products = [
  { id: 1, name: "Áo React" },
  { id: 2, name: "Sách JavaScript" },
  { id: 3, name: "Khóa học React" },
  { id: 4, name: "Bàn phím" },
];

function UseMemoExample() {
  const [keyword, setKeyword] = useState("");
  const [theme, setTheme] = useState("light");
  const [renderTick, setRenderTick] = useState(0);

  // useMemo ghi nhớ GIÁ TRỊ được return: mảng filteredProducts.
  const filteredProducts = useMemo(() => {
    console.log("useMemo: đang lọc sản phẩm");

    return products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  return (
    <section className="memo-callback-example">
      <p className="eyebrow">Ví dụ riêng: useMemo</p>
      <h2>useMemo ghi nhớ kết quả lọc</h2>
      <p>
        <code>filteredProducts</code> là một mảng kết quả. React chỉ tạo lại
        mảng này khi <code>keyword</code> thay đổi.
      </p>

      <div className="memo-search-box">
        <label htmlFor="memo-product-keyword">Tìm sản phẩm</label>
        <input
          id="memo-product-keyword"
          value={keyword}
          placeholder="Ví dụ: react"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <small>
          Từ khóa hiện tại: <strong>{keyword || "(rỗng)"}</strong>
        </small>
      </div>

      <button
        className="secondary-button"
        onClick={() => {
          setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
          setRenderTick((currentTick) => currentTick + 1);
        }}
      >
        Tạo render khác: {renderTick} ({theme})
      </button>

      <div className="memo-result">
        <p>
          <strong>Kết quả useMemo trả về:</strong> <code>filteredProducts</code>
        </p>
        <ul>
          {filteredProducts.map((product) => <li key={product.id}>{product.name}</li>)}
        </ul>
      </div>

      <pre>{"const filteredProducts = useMemo(() => {\n  console.log(\"Đang lọc\");\n\n  return products.filter((product) =>\n    product.name.toLowerCase().includes(keyword.toLowerCase())\n  );\n}, [keyword]);"}</pre>

      <ol className="memo-steps">
        <li><code>useMemo</code> nhận một hàm tính toán ở đối số thứ nhất.</li>
        <li>Hàm lọc chạy và <code>return</code> một mảng mới. Mảng đó trở thành <code>filteredProducts</code>.</li>
        <li>React nhớ mảng này cùng giá trị <code>keyword</code> trong <code>[keyword]</code>.</li>
        <li>Gõ từ khóa khác: <code>keyword</code> đổi, nên React chạy lọc lại.</li>
        <li>Bấm “Tạo render khác”: component render lại nhưng <code>keyword</code> không đổi; React trả lại mảng cũ và không log lọc mới.</li>
      </ol>
    </section>
  );
}

const SearchBox = memo(function SearchBox({ onSearch }) {
  console.log("SearchBox render");

  return (
    <div className="memo-search-box">
      <label htmlFor="callback-keyword">Gửi từ khóa tìm kiếm</label>
      <input
        id="callback-keyword"
        placeholder="Ví dụ: react"
        onChange={(event) => onSearch(event.target.value)}
      />
      <small>Hãy nhìn Console: “SearchBox render”.</small>
    </div>
  );
});

function UseCallbackExample() {
  const [theme, setTheme] = useState("light");
  const [lastSearch, setLastSearch] = useState("(chưa có)");

  // useCallback ghi nhớ HÀM handleSearch, không ghi nhớ kết quả của hàm.
  const handleSearch = useCallback((newKeyword) => {
    setLastSearch(newKeyword || "(rỗng)");
  }, []);

  return (
    <section className="memo-callback-example">
      <p className="eyebrow">Ví dụ riêng: useCallback</p>
      <h2>useCallback ghi nhớ chính hàm xử lý</h2>
      <p>
        <code>handleSearch</code> được truyền xuống <code>SearchBox</code> dưới
        tên prop <code>onSearch</code>.
      </p>

      <button
        className="secondary-button"
        onClick={() => setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")}
      >
        Đổi giao diện component cha: {theme}
      </button>

      <SearchBox onSearch={handleSearch} />

      <div className="memo-result">
        <p>
          Component cha nhận được: <strong>{lastSearch}</strong>
        </p>
      </div>

      <pre>{"const handleSearch = useCallback((newKeyword) => {\n  setLastSearch(newKeyword);\n}, []);\n\nreturn <SearchBox onSearch={handleSearch} />;"}</pre>

      <ol className="memo-steps">
        <li><code>handleSearch</code> là một hàm, và <code>useCallback</code> giữ cùng tham chiếu của hàm này.</li>
        <li><code>[]</code> cho biết hàm không dùng giá trị nào thay đổi theo từng render.</li>
        <li><code>SearchBox</code> dùng <code>memo</code>, nên chỉ render lại khi props đổi.</li>
        <li>Bấm đổi giao diện: component cha render lại, nhưng <code>handleSearch</code> vẫn là hàm cũ. Prop <code>onSearch</code> không đổi, nên <code>SearchBox</code> được bỏ qua.</li>
        <li>Không có <code>useCallback</code>, một hàm mới được tạo mỗi render; <code>memo</code> sẽ thấy prop khác và SearchBox render lại.</li>
      </ol>
    </section>
  );
}

function MemoCallbackComparison() {
  return (
    <>
      <UseMemoExample />
      <UseCallbackExample />
    </>
  );
}

export default MemoCallbackComparison;
