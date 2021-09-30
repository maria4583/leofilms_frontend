import axios from 'axios'

const BASE_URL = '/api/users/'

class UserService {
    static async register(body) {
        const { data } = await axios.post(BASE_URL + 'register', body)
        return data
    }

    static async login(body) {
        const { data } = await axios.post(BASE_URL + 'login', body)
        return data
    }

    static async auth(token) {
        const { data } = await axios.get(BASE_URL + 'auth', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }

    static async addToFavorite(movieId, token) {
        const { data } = await axios.put(
            BASE_URL + 'favorite',
            { movie_id: movieId },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return data
    }

    static async addToWatchLater(movieId, token) {
        const { data } = await axios.put(
            BASE_URL + 'watchLater',
            { movie_id: movieId },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return data
    }

    static async saveTestResult(result, token) {
        const { data } = await axios.put(
            BASE_URL + 'testResult',
            { test_result: result },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return data
    }
}

export default UserService