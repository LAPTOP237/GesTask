function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (email === "" || password === "") {
        errorMessage.textContent = "Veuillez remplir tous les champs.";
    } else {
        errorMessage.textContent = "";
        window.location.href = '../home.html';
    }
}
