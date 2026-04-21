let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

// Load tasks from localStorage when page loads
window.addEventListener("DOMContentLoaded", loadTasks);

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  let taskText = input.value.trim();
  addTaskToDOM(taskText);
  saveTask(taskText);

  input.value = "";
});

// Function to create task in UI
function addTaskToDOM(taskText) {
  let li = document.createElement("li");
  li.style.margin = "10px";
  li.textContent = taskText;

  let deleteBtn = document.createElement("button");
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
    removeTask(taskText);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// Save task to localStorage
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task));
}

// Remove task from localStorage
function removeTask(taskToDelete) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== taskToDelete);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
