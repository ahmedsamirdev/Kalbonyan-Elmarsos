const tasks = {
  tasks: [
    {
      text: "shopping",
      completed: true,
    },
    {
      text: "clean room",
      completed: false,
    },
    {
      text: "course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getTasksToDo());
