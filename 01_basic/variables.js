let product = {
  name: "apple",
  price: 999.87,
  discount: 12,
};

let finalPrices = product.price - product.price * (product.discount / 100);

console.log(
  `The product ${product.name} originally costs $${
    product.price
  }, but after a ${product.discount}% discount, it is now $${finalPrices.toFixed(
    2
  )}.`
);
