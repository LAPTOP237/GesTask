// Fonctions pour ouvrir et fermer les modals
function openEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'block';
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'none';
}

function openChangePasswordModal() {
    document.getElementById('changePasswordModal').style.display = 'block';
}

function closeChangePasswordModal() {
    document.getElementById('changePasswordModal').style.display = 'none';
}

// Fonction pour sauvegarder les modifications du profil
function saveProfileChanges() {
    
    closeEditProfileModal();
}

// Fonction pour changer le mot de passe
function changePassword() {
    
    closeChangePasswordModal();
}

// Ajout des gestionnaires d'événements aux boutons dans profil
document.getElementById('editProfileBtn').addEventListener('click', openEditProfileModal);
document.getElementById('changePasswordBtn').addEventListener('click', openChangePasswordModal);
