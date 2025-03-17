document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;


if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}


toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

});
