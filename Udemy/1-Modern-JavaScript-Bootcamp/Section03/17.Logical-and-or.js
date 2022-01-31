let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer up vegan");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("offer some vegan");
} else {
  console.log("Offer anything");
}
