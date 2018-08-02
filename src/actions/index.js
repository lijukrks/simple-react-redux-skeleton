import axios from 'axios'
import config from './config'
import * as types from '../constants'
import _ from 'lodash'
export const getAuth = () => {
    if (localStorage.getItem('token')) {
        return {
            "headers": {
                'auth': localStorage.getItem('token')
            }
        }
    }
    else {
        return null
    }
}

export const loginAction = (payload) => {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_FETCH,
        })
        axios.post(config.SERVER_API_URL + config.LOGIN_API, payload)
            .then(function (response) {
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: types.LOGIN_FAILED,
                    error
                })
            });
    };
}
export const signupAction = (payload) => {
    return (dispatch) => {
        dispatch({
            type: types.SIGNUP_FETCH,
        })
        axios.post(config.SERVER_API_URL + config.SIGNUP_API, payload)
            .then(function (response) {
                dispatch({
                    type: types.SIGNUP_SUCCESS,
                    response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: types.SIGNUP_FAILED,
                    error
                })
            });
    };
}
export const getMovieListAction = () => {
    return (dispatch) => {
        dispatch({
            type: types.GET_MOVIES_FETCH,
        })
        axios.get(config.SERVER_API_URL + config.GET_MOVIES)
            .then(function (response) {
                dispatch({
                    type: types.GET_MOVIES_SUCCESS,
                    response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: types.GET_MOVIES_FAILED,
                    error
                })
            });
    };
}
