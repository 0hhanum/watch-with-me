import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "a1deeefe53bf8423c601e18f6e912870",
        language: "en-US"
    }
})

api.get("tv/popular") // 제일 앞에 / 넣으면 절대경로가 됨. baseURL 사용하려면 상대경로 사용.

export default api;