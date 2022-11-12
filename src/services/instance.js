import axios from 'axios'
const token = localStorage.getItem("user-info")

const obj = JSON.parse(token)
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+obj.access_token}
});



export default instance