import { AddHotelConstants } from "./constants";
import initialState from "../../initialState";


function AddHotelReducer(state = initialState.addHotel, action) {

  switch(action.type) {

    case AddHotelConstants.ADD_NAME:
      return {
        ...state,
        name : action.payload.name
      };

    case AddHotelConstants.ADD_LOCATION:
      return{
        ...state,
        location: action.payload.location
      };

    case AddHotelConstants.ADD_LINK:
      return{
        ...state,
        link: action.payload.link
      };

    default:
      return state;
  }
}

export default AddHotelReducer