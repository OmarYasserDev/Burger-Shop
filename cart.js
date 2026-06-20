const cartContainer = document.querySelector(".cart-items");
const totalElement = document.getElementById("total");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;
cart.forEach((product, index) => {
    const price = Number(product.price.replace("$", ""));
    total += price * product.quantity;
    cartContainer.innerHTML += `
    <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="item-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
        <div class="quantity">
            <span>Qty: ${product.quantity}</span>
        </div>
        <button class="remove-btn" data-index="${index}">
            Remove
        </button>
    </div>
    `;
});

totalElement.textContent = `Total: $${total}`;
// Remove Product //
document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const index = btn.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    });
});