var nameVar = "ahmed";
var nameVar = "samir";
console.log("nameVar", nameVar);

let nameLet = "mohamed";
nameLet = "omar";
console.log("nameLet", nameLet);

const nameConst = "osama";
console.log("nameConst", nameConst);

const fullName = "ahmed samir";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
