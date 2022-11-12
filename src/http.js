import axios from "axios";

const token = localStorage.getItem("user-info")

const obj = JSON.parse(token)

export default axios.create({
    baseUrl: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+obj.access_token
    }
})