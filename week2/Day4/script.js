const toggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = document.getElementById("icon");

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  toggle.checked = savedTheme === "dark";
  updateThemeUI(savedTheme);
} else {
  body.classList.add("light");
}

toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "dark" : "light";
  body.classList.replace(toggle.checked ? "light" : "dark", theme);
  localStorage.setItem("theme", theme);
  updateThemeUI(theme);
});

function updateThemeUI(theme) {
  icon.textContent = theme === "dark" ? "🌙" : "☀️";
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = renderTasks;

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = document.getElementById("task-input").value;
  const dueDate = document.getElementById("due-date").value;

  if (!text) return alert("Enter task");

  tasks.push({
    id: Date.now(),
    text,
    dueDate,
    completed: false
  });

  saveTasks();
  renderTasks();

  document.getElementById("task-input").value = "";
  document.getElementById("due-date").value = "";
}

function renderTasks() {
  const pending = document.getElementById("pending-list");
  const completed = document.getElementById("completed-list");

  pending.innerHTML = "";
  completed.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">
        ${task.text} ${task.dueDate ? `(Due: ${task.dueDate})` : ""}
      </span>
      <button onclick="toggleTask(${task.id})">
        ${task.completed ? "Undo" : "Done"}
      </button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;

    task.completed ? completed.appendChild(li) : pending.appendChild(li);
  });
}

function toggleTask(id) {
  tasks = tasks.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}