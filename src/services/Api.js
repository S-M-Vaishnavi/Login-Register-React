//We can send  Api request by using fetch used by javascipt
//but we are using axios in react for installing axios type npm install axios --save
import axios from "axios";
import { getUserData } from "./Storage";

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = 'AIzaSyBxSR2_eV8n05my_xdAdIDGfVTBH_HnOxw';
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`
const USERDEATILS_URL = `/accounts:lookup?key=${API_KEY}`

export const RegisterApi = (inputs) => {
    let data = {displayname:inputs.name,email:inputs.email,password:inputs.password}
    return axios.post(REGISTER_URL,data);
}

export const LoginApi = (inputs) => {
    let data = {email:inputs.email,password:inputs.password}
    return axios.post(LOGIN_URL,data);
}

export const UserDetailsApi = () => {
    let data = {idToken:getUserData()}
    return axios.post(USERDEATILS_URL,data)
}