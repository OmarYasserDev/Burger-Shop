const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("show");
});