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
    const response = await client 
        .from('workshops')
        .select(`*, participants (*)`);
    return checkError(response);
}

export async function createParticipant(participant) {
    const response = await client 
        .from('participants')
        .insert(participant);
    return checkError(response);
}

export async function deleteParticipant(id) {
    const response = await client 
        .from('participants')
        .delete()
        .match({ id: id })
        .single();
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
