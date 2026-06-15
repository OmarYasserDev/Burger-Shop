const form= document.getElementById("login");
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
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

     if (
        email === "" || password === "") {
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

});