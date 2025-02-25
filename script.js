function generateGreeting() {
    const userName = document.getElementById("userName").value;

    if (userName.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    const greeting = `Hello, ${userName}! Welcome to our website!`;

    document.getElementById("greetingMessage").textContent = greeting;
}