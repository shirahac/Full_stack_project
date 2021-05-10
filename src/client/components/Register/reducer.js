import { RegisterConstants } from "./constants";
import initialState from '../../initialState';

function RegisterReducer(state = initialState.register, action) {

    switch(action.type) {

      case RegisterConstants.ADD_NAME:
        return {
          ...state,
          name : action.payload.name
        };


      case RegisterConstants.ADD_USERNAME:
        return {
          ...state,
          username : action.payload.username
        };

      case RegisterConstants.ADD_PASSWORD:
        return{
          ...state,
          password: action.payload.password
        };

      case RegisterConstants.ADD_LOCATION:
        return{
          ...state,
          location: action.payload.location
        };

      case RegisterConstants.SETUP_INPUT:
        return {
          name: "",
          username: "",
          password: "",
          picture: "",
          location: ""
        };

        case RegisterConstants.REGISTER_FAIL:
          return {
            failReason: action.payload.reason
          }

      default:
        return state;
    }
  }

  export default RegisterReducer