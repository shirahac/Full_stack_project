import { AddReviewConstants } from "./constants";
import {TopicConstants } from "./topicConstants"
import initialState from "../../initialState";

function AddReviewReducer(state = initialState.addReview, action) {

  switch(action.type) {

    case AddReviewConstants.LOAD_HOTEL_SUCCESS:
      return {
        ...state,
        hotel: action.payload.hotel
      };

    case AddReviewConstants.CHANGE_RATING:
      switch(action.payload.topic){
        case TopicConstants.staff:
          return{
            ...state,
            staff: action.payload.rating
          };
        case TopicConstants.comfort:
          return{
            ...state,
            comfort: action.payload.rating
          };
        case TopicConstants.cleanliness:
          return{
            ...state,
            cleanliness: action.payload.rating
          };
        case TopicConstants.freeWiFi:
          return{
            ...state,
            freeWiFi: action.payload.rating
          };
        case TopicConstants.facilities:
          return {
            ...state,
            facilities: action.payload.rating
          };
        case TopicConstants.valueForMoney:
          return{
            ...state,
            valueForMoney: action.payload.rating
          };
        case TopicConstants.location:
          return{
            ...state,
            location: action.payload.rating
          };
      }

    case AddReviewConstants.SUBMIT_REVIEW_SUCCESS:
      return initialState.addReview;
    default:
      return state;
  }
}


export default AddReviewReducer