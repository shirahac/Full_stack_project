import initialState from '../../initialState';
import {AppConstants} from './constants.js';
import {List} from "immutable";


const AppReducer = (state = initialState.app, action) => {

    console.log("App state = ", state)

    switch (action.type){

        case AppConstants.LOAD_LOCATIONS_SUCCESS:
            return {
                ...state,
                locations: action.payload.locations,
            };

        case AppConstants.LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users
            };

        case AppConstants.LOAD_HOTELS_SUCCESS:
            return {
                ...state,
                hotels: action.payload.hotels
            };

        case AppConstants.ADDED_USER:
            return {
                ...state,
                users: action.payload.users
            };

        case AppConstants.LOGGED_IN_USER:
            alert("User logged in");
            return {
                ...state,
                isConnected: true,
                user: action.payload.user
            };

        case AppConstants.LOGOUT:
            return {
                ...state,
                isConnected: false,
                user: List()
            };

            //*********************************

        case AppConstants.LOGIN_USER:
            return {
                ...state,
                isConnected:true,
                user: action.payload.user

            };


            //*********************************

        default:
            return state;
    }
};

export default AppReducer
