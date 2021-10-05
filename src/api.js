import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "a1deeefe53bf8423c601e18f6e912870",
        language: "ko"
    }
})

// api.get("tv/popular") // 제일 앞에 / 넣으면 절대경로가 됨. baseURL 사용하려면 상대경로 사용.

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            // query: encodeURIComponent(term)
            // 검색 시 공백 등을 encoding 해줌. axios 는 자동.
            query: term
        }
    })
}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            query: term
        }
    })
}