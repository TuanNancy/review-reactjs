export function createSaleProduct(product, discount) {
  const { price, ...productDetails } = product;

  return {
    ...productDetails,
    price: price - discount,
  };
}
