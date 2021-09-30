import {
    registerUserStarted,
    registerUserSuccess,
    registerUserFailure,
    loginUserStarted,
    loginUserSuccess,
    loginUserFailure,
    logoutUser,
    addFavoriteMovieSuccess,
    addWatchLaterMovieSuccess,
    saveTestResultSuccess
} from '../actionCreators/users'

import UserService from '@/services/UserService'

export const register = body => {
    return async dispatch => {
        dispatch(registerUserStarted())

        try {
            const data = await UserService.register(body)

            dispatch(registerUserSuccess(data))
        } catch (error) {
            dispatch(registerUserFailure(error.message))
        }
    }
}

export const login = body => {
    return async dispatch => {
        dispatch(loginUserStarted())

        try {
            const data = await UserService.login(body)

            dispatch(loginUserSuccess(data))
            localStorage.setItem('token', data.token)
        } catch (error) {
            dispatch(loginUserFailure(error.message))
        }
    }
}

export const logout = () => {
    return async dispatch => {
        localStorage.removeItem('token')

        dispatch(logoutUser())
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || ''
            const data = await UserService.auth(token)
            dispatch(loginUserSuccess(data))
            localStorage.setItem('token', data.token)
        } catch (error) {
            localStorage.removeItem('token')
        }
    }
}

export const addToFavorite = (movieId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || ''
            const data = await UserService.addToFavorite(movieId, token)
            dispatch(addFavoriteMovieSuccess(data))
        } catch (error) {

        }
    }
}

export const addToWatchLater = (movieId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || ''
            const data = await UserService.addToWatchLater(movieId, token)
            dispatch(addWatchLaterMovieSuccess(data))
        } catch (error) {

        }
    }
}

export const saveTestResult = (result) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || ''
            const data = await UserService.saveTestResult(result, token)
            dispatch(saveTestResultSuccess(data))
        } catch (error) {

        }
    }
}