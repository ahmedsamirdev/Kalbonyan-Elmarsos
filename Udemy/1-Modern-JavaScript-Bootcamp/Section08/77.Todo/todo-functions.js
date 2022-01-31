const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

const generateTodoDOM = function (todo) {
  const todoEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoText = document.createElement("span");
  const removeButton = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  removeButton.textContent = "x";
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
