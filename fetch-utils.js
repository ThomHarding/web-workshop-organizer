const SUPABASE_URL = '';
const SUPABASE_KEY = '';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function getWorkshops() {
    //select all workshops
}

export async function createParticipant(participant) {
    //insert participant into supabase, attached to a workshop
}

export async function deleteParticipant(id) {
    //delete from participants id = id
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
