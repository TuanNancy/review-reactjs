function ProductExample({ product, saleProduct }) {
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

export default ProductExample;
