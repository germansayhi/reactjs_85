import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        "content-type": "application/json"
    },
});

export let api = (method, endpoint, payload) => {
    return axiosClient(endpoint, { method: method, data: payload })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}