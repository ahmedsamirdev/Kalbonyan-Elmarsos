const todo = {
  id: "534245r5w4",
  text: "pay bills",
  completed: false,
};

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};
printTodo(todo);

const { text: todoText, completed, details = "No details", ...others } = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [29, 1, 20];
const [firstAge, ...otherAges] = age;

console.log(firstAge);
console.log(otherAges);
