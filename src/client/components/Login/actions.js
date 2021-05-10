import {LoginConstants} from './constants.js';


function changeDetails(name, newValue){
    if(name === "username"){
        return {
            type: LoginConstants.CHANGE_USERNAME,
            username: newValue
        }
    }
    else{
        return{
            type: LoginConstants.CHANGE_PASSWORD,
            password: newValue
        }
    }
}

function loginAction(username, password){
    return {
        type:       LoginConstants.LOGIN,
        uri:        '/api/load/login',
        payload:{
                    username: username,
                    password: password,
        }
    }
}

function loginSuccessAction() {
    return {
        type: LoginConstants.LOGIN_SUCCESS,
    }
}

function loginFailureAction (message) {
    return {
        type: LoginConstants.LOGIN_FAILURE,
        payload: {
            errorMessage: message,
        }
    }
}

let LoginActions  = {

    changeDetails,
    loginAction,
    loginSuccessAction,
    loginFailureAction,
};

export default LoginActions
