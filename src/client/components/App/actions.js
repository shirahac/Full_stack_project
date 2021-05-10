import {AppConstants} from './constants.js';


function loadLocations(){
    return {
        type: AppConstants.LOAD_LOCATIONS,
        uri: '/api/load/locations'
    }
}

function loadLocationsSuccess(locations){
    return {
        type: AppConstants.LOAD_LOCATIONS_SUCCESS,
        payload: {locations: locations}
    }
}

function loadUsers(){
    return {
        type: AppConstants.LOAD_USERS,
        uri: '/api/load/users'
    }
}

function loadUsersSuccess(users) {
    return {
        type: AppConstants.LOAD_USERS_SUCCESS,
        payload: {users: users}
    }
}

function loadHotels() {
    return {
        type: AppConstants.LOAD_HOTELS,
        uri: '/api/load/hotels'
    }
}

function loadHotelsSuccess(hotels) {
    return {
        type: AppConstants.LOAD_HOTELS_SUCCESS,
        payload: {hotels: hotels}
    }
}

function addedUser(users){
    return {
        type: AppConstants.ADDED_USER,
        payload: {users: users}
    }
}

function loggedInUser (user) {
    return {
        type: AppConstants.LOGGED_IN_USER,
        payload: {user: user}
    }
}

function loginAction(user) {
    return {
        type: AppConstants.LOGIN_USER,
        payload: {
            user: user,
        }

    }
}

function logout(){
    return {
        type: AppConstants.LOGOUT,
    }
}


let AppActions = {
    loadLocations,
    loadLocationsSuccess,
    loadUsers,
    loadUsersSuccess,
    loadHotels,
    loadHotelsSuccess,
    addedUser,
    logout,
    loggedInUser,

    loginAction,

};

export default AppActions
