import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

async function fetchAndDisplayWorkshops() {
    let workshops = getWorkshops();
    for (let workshop of workshops) {
        //create a div for it to go into
        //div containing name of workshop
        //div to contain participants
        for (let participant of workshop.participants) {
            //make participant div
            //add name
            //on click event
                //delete participant
                //fetchAndDisplayWorkshops();
            //add to workshop div
        }
        //add participants and name div to container div
        //add container div to containerer div
    }
}

logoutButton.addEventListener('click', () => {
    logout();
});
