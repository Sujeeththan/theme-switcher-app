const themeSelector = document.getElementById("theme");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.className = savedTheme;
  themeSelector.value = savedTheme;
} else {
  document.body.className = "light";
}

themeSelector.addEventListener("change", function () {
  document.body.className = this.value;
  localStorage.setItem("theme", this.value);
});
