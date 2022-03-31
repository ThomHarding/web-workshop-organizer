import {
    checkAuth, 
    createParticipant, 
    getWorkshops, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.participant-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    e.preventDefault();
    let data = new FormData(form);
    let name = data.get('participant-name');
    let workshopId = data.get('workshop-id');
    let participant = { name: name, workshop_id: workshopId };
    await createParticipant(participant);
    form.reset();
    location.replace('../workshops/index.html');
});

window.addEventListener('load', async () => {
    const selector = document.querySelector('select');
    let workshops = await getWorkshops();
    for (let workshop of workshops) {
        let option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = workshop.name;
        selector.append(option);
    }
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
