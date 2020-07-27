import axios from "axios";

const AUTH_API_URI = process.env.REACT_APP_AUTH_API_URI;
const LOGIN_ENDPOINT = "/login";
// const VERIFY_ENDPOINT = "/verify";

async function login(username, password) {
    try {
        return await axios.post(`${AUTH_API_URI}${LOGIN_ENDPOINT}`, {username, password});
    } catch (e) {
        throw(e);
    }
}

export { login };