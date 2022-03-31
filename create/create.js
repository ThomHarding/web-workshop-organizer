import {
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.participant-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // get data, create participant from it
    form.reset();
    location.replace('../workshops/index.html');
});

window.addEventListener('load', async () => {
    //fill in workshop selector with workshops from supabase
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
