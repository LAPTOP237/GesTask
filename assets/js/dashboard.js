function navigateTo(page) {
    console.log(`Navigating to ${page} page`);
    switch (page) {
        case 'home':
            window.location.href = 'home.html'; 
            break;
        case 'account':
            window.location.href = 'account.html'; 
            break;
        case 'tasks':
            window.location.href = 'task-management.html'; 
            break;
        default:
            window.location.href = 'home.html';
            break;
    }
}
