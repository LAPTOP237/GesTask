document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const errorMessage = document.getElementById('error-message');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (/[\{\}\(\)]/.test(fullName)) {
            errorMessage.textContent = 'Le nom ne doit pas contenir d\'accolades, de parenthèses ou de guillemets.';
            return;
        }

        if (!/^(62|68|67|65|69)\d{7}$/.test(phoneNumber)) {
            errorMessage.textContent = 'Le numéro de téléphone doit commencer par 62, 68, 67, 65 ou 69 et avoir 9 chiffres au total.';
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/.test(password)) {
            errorMessage.textContent = 'Le mot de passe doit avoir au moins 5 caractères, une majuscule, une minuscule et un chiffre.';
            return;
        }

      
        if (password !== confirmPassword) {
            errorMessage.textContent = 'Les mots de passe ne correspondent pas.';
            return;
        }

        errorMessage.textContent = '';
        registrationForm.submit();
        window.location.href = 'login.html';
    });
});
