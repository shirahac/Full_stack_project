import initialState from '../../initialState';
import {LoginConstants} from './constants.js';

const LoginReducer = (state = initialState.login, action) => {
    console.log('Login state=', state);
    console.log(action.type);
    switch (action.type){

        case LoginConstants.CHANGE_USERNAME:
            return {
                ...state,
                username: action.username
            };

        case LoginConstants.CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password
            };


        case LoginConstants.LOGIN_SUCCESS:
            alert("LOGIN_SUCCESS");
            return {
                ...state,
                password: "",
                username: "",
                errorMessage: ""
            };

        case LoginConstants.LOGIN_FAILURE:
            return {
                ...state,
                password: "",
                username: "",
                errorMessage: action.payload.errorMessage,
            };

        default:
            return state

    }
};

export default LoginReducer;