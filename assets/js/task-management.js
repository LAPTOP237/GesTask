document.addEventListener('DOMContentLoaded', function () {

    const taskListContainer = document.getElementById('taskList');
    const taskDetailsModal = document.getElementById('taskDetailsModal');
    const taskNameDetail = document.getElementById('taskNameDetail');
    const taskDeadlineDetail = document.getElementById('taskDeadlineDetail');


    

    // Fonction pour ouvrir la modal de création de tâches
    // function openNewTaskModal() {
        // newTaskModal.style.display = 'block';
        var newTaskModal = document.getElementById("newTaskModal");
        var btn = document.getElementById("newTaskModalBtn");
        var span = document.getElementsByClassName("close-btn")[0];
        btn.onclick = function() {
            newTaskModal.style.display = "block";
        }

        span.onclick = function() {
            newTaskModal.style.display = "none";
        }

        window.onclick = function(event) {
        if (event.target == newTaskModal) {
            newTaskModal.style.display = "none";
        }
        }
            // }


    // Fonction pour créer une carte de tâche
    function createTaskCard(name, description, deadline,registration, assignee) {
        const card = document.createElement('div');
        card.classList.add('task-card');
        const cardContent = `
            <h3>${name}</h3>
            <p>Date Limite: ${deadline}</p>
            <button class="showTaskDetailsBtn" id="details-" >Détails</button>
        `;

        card.innerHTML = cardContent;

        return card;
    }

    //creation de la tache
     function createTask() {
        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskDeadline = document.getElementById('taskDeadline').value;
        const taskRegistrationDate = document.getElementById('taskRegistrationDate').value;
        const taskAssignee = document.getElementById('taskAssignee').value;
        const taskCreationForm = document.getElementById('taskCreationForm');
    
        if (!taskName || !taskDeadline || !taskRegistrationDate || !taskAssignee) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }
    
        /// Créez la carte de tâche
        const newTaskCard = createTaskCard(taskName, taskDescription, taskDeadline, taskAssignee);

        // Ajoutez la nouvelle carte à la liste des tâches
        taskListContainer.appendChild(newTaskCard);

        // Effacez les champs du formulaire après la création
        taskCreationForm.reset();
     }

        var createTaskBtn = document.getElementById("createTaskBtn");
        createTaskBtn.onclick = function() {
            createTask();
        }
    
    // Fonction pour afficher les détails de la tâche dans la modal
    function showTaskDetails(Taskname, description, deadline, registration, assignee) {
        taskNameDetail.textContent = Taskname;
        taskDeadlineDetail.textContent = deadline;
        taskDescription.textContent = description;
        taskRegistrationDate.textContent = registration;
        taskAssignee.textContent = assignee;
        taskDetailsModal.style.display = 'block';
    }
    var span = document.getElementsByClassName("close-btn")[0];
    var details = document.getElementById("details-1");
    details.onclick = function() {
        showTaskDetails('Nom de la Tâche', 'Description de la tâche', 'Date Limite', 'Date Enregistrement', 'Responsable');
    }
    function closeTaskDetailsModal() {
        taskDetailsModal.style.display = 'none';
    }

    span.onclick = function() {
        taskDetailsModal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == taskDetailsModal) {
        taskDetailsModal.style.display = "none";
    }
    }

    // Fonction pour marquer la tâche comme effectuée
    function completeTask() {
        //code ici
        closeTaskDetailsModal();
    }

    // Fonction pour annuler la tâche
    function cancelTask() {
        //code ici
        closeTaskDetailsModal(); 
    }
});


// Fonction pour appliquer les filtres et le tri
function applyFilters() {
    const filterValue = document.getElementById('filter').value;
    const sortValue = document.getElementById('sort').value;
}