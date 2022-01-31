let convertF2C = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let temp = convertF2C(32);

console.log(temp);
