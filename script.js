const input = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskList.textContent = "";
  tasks.forEach((x) => {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = x.title;

    if (x.completed === true) {
      taskText.style.textDecoration = "line-through";
    }

    li.appendChild(taskText);

    taskList.append(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
      tasks = tasks.filter((y) => y.id !== x.id);
      render();
      e.stopPropagation();
    });

    li.addEventListener("click", () => {
      x.completed = !x.completed;
      render();
    });
  });
}

addBtn.addEventListener("click", () => {
  const userInput = input.value.trim();
  if (userInput === "") return;

  const taskObject = {
    id: Date.now(),
    title: userInput,
    completed: false,
  };

  tasks.push(taskObject);
  render();
  input.value = "";
});

render();
