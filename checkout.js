const orderItems = document.getElementById("order-items");
const subtotalText = document.getElementById("subtotal");
const totalText = document.getElementById("total");

const products =
    JSON.parse(localStorage.getItem("checkout")) ||
    JSON.parse(localStorage.getItem("cart")) ||
    [];

let subtotal = 0;

products.forEach(product => {

    const price = parseFloat(product.price.replace("$", ""));
    subtotal += price * (product.quantity || 1);

    orderItems.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            </div>
        </div>
    `;
});

subtotalText.textContent = "$" + subtotal.toFixed(2);

const delivery = 3;

totalText.textContent = "$" + (subtotal + delivery).toFixed(2);