import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsDisplay = document.getElementById('workshops-container');

async function fetchAndDisplayWorkshops() {
    let workshops = await getWorkshops();
    workshopsDisplay.innerHTML = '';
    for (let workshop of workshops) {
        let workshopDiv = document.createElement('div');
        let workshopNameHolder = document.createElement('h3');
        let participantsDiv = document.createElement('div');
        for (let participant of workshop.participants) {
            let participantDiv = document.createElement('div');
            participantDiv.textContent = participant.name;
            participantDiv.addEventListener('click', async () => {
                await deleteParticipant(participant.id);
                await fetchAndDisplayWorkshops();
            });
            participantsDiv.append(participantDiv);
        }
        workshopDiv.append(participantsDiv, workshopNameHolder);
        workshopsDisplay.append(workshopDiv);
    }
}

window.addEventListener('load', async () => {
    await fetchAndDisplayWorkshops();
});

logoutButton.addEventListener('click', () => {
    logout();
});
