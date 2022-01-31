const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  const user = await User.findById("9f4c634780c92712127d4544");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
