import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    COACH_SIGNUP_SUCCESS,
    COACH_SIGNUP_ERROR,
    PASSWORD_RESET_EMAIL_SUCCESS,
    PASSWORD_RESET_EMAIL_ERROR
} from '../../constants/types'

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case LOGIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case SIGNOUT_SUCCESS:
            console.log('signout success')
            return state;

        case SIGNUP_SUCCESS:
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case SIGNUP_ERROR:
            console.log('signup error', action.err.message);
            return {
                ...state,
                authError: action.err.message
            }
        case COACH_SIGNUP_SUCCESS:
            console.log('coach signup success');
            return {
                ...state,
                authError: null
            }
        case COACH_SIGNUP_ERROR:
            console.log('coach signup error');
            return {
                ...state,
                authError: action.err.message
            }
        case PASSWORD_RESET_EMAIL_SUCCESS:
            console.log('password reset email success');
            return {
                ...state,
                authError: null
            }
        case PASSWORD_RESET_EMAIL_ERROR:
            console.log('password reset email error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer