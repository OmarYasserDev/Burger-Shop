const form = document.getElementById("login");

function showMessage(message, color) {
    const box = document.getElementById("message-box");

    box.textContent = message;
    box.style.backgroundColor = color;
    box.style.color = "white";
    box.style.padding = "10px";
    box.style.marginTop = "15px";
    box.style.borderRadius = "5px";
    box.style.display = "block";

    setTimeout(() => {
        box.style.display = "none";
    }, 3000);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        showMessage("Please fill in all fields.", "#e74c3c");
        return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        showMessage("No account found. Please sign up first.", "#e74c3c");
        return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
        showMessage("Incorrect email or password.", "#e74c3c");
        return;
    }

    showMessage("Login Successful!", "#27ae60");

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1500);
});