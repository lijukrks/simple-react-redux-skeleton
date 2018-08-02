import * as types from '../constants'
const INITIAL_STATE = { data: {}, error: null, loading: false, status: null }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SIGNUP_FETCH:
            return {
                data: {},
                error: null,
                loading: true,
                status: null
            }
        case types.SIGNUP_SUCCESS:
            return {
                data: action.response.data,
                error: null,
                loading: false,
                status: action.response && action.response.status
            }
        case types.SIGNUP_FAILED:
            return {
                data: {},
                error: action.error,
                loading: false,
                status: null
            }
        default:
            return state;
    }

}