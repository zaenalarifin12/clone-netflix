import axios from "axios"
import { APIKey, URL } from "../utils/constants"

const MovieAPI = {
    all: async () => {
        const result = await axios.get(`${URL}/discover/movie?api_key=${APIKey}&language=en-US&include_video=false`)
        return result
    },
    get: async (movieId) => {
        const result = await axios.get(`${URL}/movie/${movieId}?api_key=${APIKey}&language=en-US`)
        return result
    },
    videos: async (movieId) => {
        const result = axios.get(`${URL}/movie/${movieId}/videos?api_key=${APIKey}&language=en-US`)
        return result
    },
    genres: async () => {
        const result = await axios.get(`${URL}genre/movie/list?api_key=${APIKey}&language=en-US`)
        return result
    },
    byGenre: async (genreId) => {
        const result = await axios.get(`${URL}discover/movie?api_key=${APIKey}&with_genres=${genreId}`)
        return result
    }
}

export default MovieAPI