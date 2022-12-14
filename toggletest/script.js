const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");
const toggle2 = document.getElementById("toggle");
const refresh2 = document.getElementById("refresh");

/* verifica se o tema armazenado no localStorage é escuro se sim aplica o tema escuro ao body */
if (theme === "dark") document.body.classList.add("dark");

// event listener
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
});

refresh.addEventListener("click", () => {
  window.location.reload();
});