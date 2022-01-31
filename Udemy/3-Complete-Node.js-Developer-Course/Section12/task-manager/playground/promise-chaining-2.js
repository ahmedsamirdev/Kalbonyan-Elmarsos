require("../src/db/mongoose");
const Task = require("../src/models/task");

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("9f4c634780c92712127d4544")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
