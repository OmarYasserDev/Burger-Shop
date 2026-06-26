// navbar active buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});
// search box
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("show");
});
// modal
const items = document.querySelectorAll(".item");
const overlay = document.querySelector(".overlay");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");
const addCartBtn = document.querySelector(".add-cart");
let selectedProduct = {};
items.forEach(item => {
    item.addEventListener("click", () => {
        const img = item.querySelector(".img-pro").src;
        const title = item.querySelector("h4").textContent;
        const price = item.querySelector("p").textContent;
        modalImg.src = img;
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        selectedProduct = {
            name: title,
            price: price,
            image: img,
            quantity: 1
        };
        overlay.classList.add("show");
    });
});

// close modal
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("show");
    }
});
// add to cart
addCartBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
    toast.classList.remove("show");
    }, 2000);
    overlay.classList.remove("show");
});
// menu filter
const tabs = document.querySelectorAll(".menu-tabs a");
tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        const category = tab.dataset.category;
        console.log(category);
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        items.forEach(item => {
            console.log(item.dataset.category);
            if (category === "all" || item.dataset.category === category) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});
const purchaseBtn = document.querySelector(".purchase");
purchaseBtn.addEventListener("click", () => {
    localStorage.setItem(
        "checkout",
        JSON.stringify([selectedProduct])
    );
    window.location.href = "checkout.html";
});

