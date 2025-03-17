const toggleButton = document.getElementById("lightModeToggle");
const body = document.body;


if (localStorage.getItem("lightMode") === "enabled") {
    body.classList.add("light-mode");
}


toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");

});
