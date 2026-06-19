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
// products display
const items = document.querySelectorAll(".item");
const overlay = document.querySelector(".overlay");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");

items.forEach(item => {
    item.addEventListener("click", () => {
        const img = item.querySelector(".img-pro").src;
        const title = item.querySelector("h4").textContent;
        const price = item.querySelector("p").textContent;
        modalImg.src = img;
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        overlay.classList.add("show");
    });
});
overlay.addEventListener("click", (e) => {
    if(e.target === overlay){
        overlay.classList.remove("show");
    }
});