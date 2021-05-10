import { RegisterConstants} from './constants.js';

function addNameAction(name){
    return {
        type: RegisterConstants.ADD_NAME,
        payload: {
            name : name
        }
    }
}

function addUsernameAction(username){
    return {
        type: RegisterConstants.ADD_USERNAME,
        payload: {
            username : username
        }
    }
}

function addPasswordAction(password){
    return {
        type: RegisterConstants.ADD_PASSWORD,
        payload: {
            password : password
        }
    }
}

function addLocationAction(location){
    return {
        type: RegisterConstants.ADD_LOCATION,
        payload: {
            location: location
        }
    }
}

function addUserAction(name, username, password, picture, location) {
    return {
        type: RegisterConstants.ADD_USER,
        uri: '/api/add/user',
        payload:{
            name: name,
            username: username,
            password: password,
            picture: picture,
            location: location
        },
    };
}

function setupInput () {
    return {
        type: RegisterConstants.SETUP_INPUT,
    };
}

function registerFail (reason) {
    return {
        type: RegisterConstants.REGISTER_FAIL,
        payload: {reason: reason}
    }
}

let RegisterActions  = {

    addNameAction,
    addUsernameAction,
    addPasswordAction,
    addLocationAction,
    addUserAction,
    setupInput,
    registerFail,

};

export default RegisterActions