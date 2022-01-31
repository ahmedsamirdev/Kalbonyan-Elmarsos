const name = "ahmed";
const userAge = 29;

const user = {
  name,
  age: userAge,
  location: "cairo",
};

console.log(user);

const product = {
  label: "notebook",
  price: 33,
  stock: 100,
  salePrice: undefined,
  rating: 5,
};

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
