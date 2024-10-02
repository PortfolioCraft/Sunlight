// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Replace these values with the actual login details
    const correctUsername = "admin";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {
        // Successful login, redirect to the admin dashboard or show dashboard content
        window.location.href = "dashboard.html"; // This could be a real admin page
    } else {
        // Display an error message
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    }
});

document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
