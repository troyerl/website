import actionTypes from '../actions/types'

const initState = {
    authError: null,
    loginError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.auth.CREATE_ACCOUNT:
            return state;
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: action.err.message
            };
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return{
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};

export default authReducer