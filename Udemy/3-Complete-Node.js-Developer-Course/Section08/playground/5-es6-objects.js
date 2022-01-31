const name = "ahmed";
const userAge = 29;

const user = {
  name,
  age: userAge,
  location: "cario",
};

console.log(user);

const product = {
  label: "notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
