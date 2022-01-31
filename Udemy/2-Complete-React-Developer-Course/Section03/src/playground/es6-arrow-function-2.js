const add = (a, b) => {
  return a + b;
};
console.log(add(731, 2, 5740));



const user = {
  name: "ahmed",
  cities: ["cairo", "alex", "giza"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " lived in " + city);
  },
};

console.log(user.printPlacesLived());



const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
