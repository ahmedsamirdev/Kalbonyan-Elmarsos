let convert = function (degree) {
  return {
    degree: degree,
    kelvin: (degree + 459.67) * (5 / 9),
    celsius: (degree - 32) * (5 / 9),
  };
};

let temps = convert(74);
console.log(temps);
