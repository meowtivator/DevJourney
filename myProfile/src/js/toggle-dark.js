const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("toggleDarkmode");

toggleBtn.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
});
