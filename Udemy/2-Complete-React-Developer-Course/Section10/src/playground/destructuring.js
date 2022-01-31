const person = {
  name: "ahmed",
  age: 29,
  location: {
    city: "cairo",
    temp: 25,
  },
};

const { name: firstName = "anonymous", age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`its ${temperature} in ${city}`);
}

const book = {
  title: "ego is the enemy",
  author: "ryan holiday",
  publisher: {
    name: "penguin",
  },
};

const { name: publisherName = "self published" } = book.publisher;

console.log(publisherName);

const address = ["20 s juniper street", "alex", "cairo", "29"];
const [, city, state = "new york"] = address;
console.log(`you are in ${city} ${state}`);

const item = ["coffee", "$3.00", "$3.50", "$3.75"];
const [itemName, , mediumPrice] = item;

console.log(`a medium ${itemName} costs ${mediumPrice}`);
