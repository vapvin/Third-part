import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "54a2b44dca50bd3e2f179ac52ec5aeb3",
        language: "en-US"
    }
});

export default api;