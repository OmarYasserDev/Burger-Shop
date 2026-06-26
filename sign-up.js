const form = document.getElementById("signup-form");

function showMessage(message, color) {
    const box = document.getElementById("message-box");

    box.textContent = message;
    box.style.backgroundColor = color;
    box.style.display = "block";

    setTimeout(() => {
        box.style.display = "none";
    }, 3000);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if (
        name === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        showMessage("Please fill in all fields.", "#e74c3c");
        return;
    }
    if (password.length < 8) {
        showMessage("Password must be at least 8 characters long.", "#e74c3c");
        return;
    }
    if (!/\d/.test(password)) {
        showMessage("Password must contain at least one number.", "#e74c3c");
        return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
        showMessage("Password must contain at least one special character.", "#e74c3c");
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage("Please enter a valid email address.", "#e74c3c");
        return;
    }
    if (username.length < 4) {
        showMessage("Username must be at least 4 characters long.", "#e74c3c");
        return;
    }
    if (/\s/.test(username)) {
        showMessage("Username cannot contain spaces.", "#e74c3c");
        return;
    }
    if (name.length < 2) {
        showMessage("Name must be at least 2 characters long.", "#e74c3c");
        return;
    }
    if (name.length > 50) {
        showMessage("Name cannot be longer than 50 characters.", "#e74c3c");
        return;
    }
    if (username.length > 20) {
        showMessage("Username cannot be longer than 20 characters.", "#e74c3c");
        return;
    }
    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "#e74c3c");
        return;
    }
    const user = {
        name: name,
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    showMessage("Account created successfully! Please login", "#27ae60");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
});