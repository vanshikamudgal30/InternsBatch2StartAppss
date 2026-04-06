const toggle = document.getElementById("theme-toggle");
const body = document.body;
const statusText = document.getElementById("theme-status");
const icon = document.getElementById("icon");

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  toggle.checked = savedTheme === "dark";
  updateUI(savedTheme);
} else {
  body.classList.add("light");
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    updateUI("dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    updateUI("light");
  }
});

function updateUI(theme) {
  if (theme === "dark") {
    statusText.textContent = "Dark Mode";
    icon.textContent = "🌙";
  } else {
    statusText.textContent = "Light Mode";
    icon.textContent = "☀️";
  }
}