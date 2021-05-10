import {ViewReviewsConstants} from "./constants"
import initialState from "../../initialState";


function ViewReviewsReducer(state = initialState.viewReviews, action) {

    switch(action.type) {
      case ViewReviewsConstants.SAVE_HOTEL:
        return{
            ...state,
            hotel: action.hotel
        }
      case ViewReviewsConstants.LOAD_REVIEWS_SUCCESS:
        return{
          ...state,
          reviews: action.reviews.sort(function(h1, h2){
            return h1.creationDate > h2.creationDate ? -1 : 1}),
          displayReviews: action.reviews.sort(function(h1, h2){
            return h1.creationDate > h2.creationDate ? -1 : 1}),
        }
      case ViewReviewsConstants.FILTER_FLAG:
        return{
          ...state,
          filterFlag: !action.flag,
          filterByDate: false,
          filterByTopic: false,
          displayReviews: state.reviews
        }

      case ViewReviewsConstants.FILTER_BY_DATE:

        if(action.flag == "None" && !state.filterByTopic){
          console.log("topic off date none")
          return{
            ...state,
            displayReviews: state.reviews,
            filterByDate: false
          }
        }
        else if(action.flag == "None" && state.filterByTopic){
          console.log("topic on date none")
          return{
            ...state,
            displayReviews: state.reviewsFilteredByTopic,
            filterByDate: false
          }
        }

        var today = new Date();
        var startDate;

        switch(action.flag){
          case "since last week":
            console.log("since last week")
            startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            break
          case "since last month":
            console.log("since last month")
            startDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
            break
          case "since last year":
            console.log("since last year")
            startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
            break
        }

        if(state.filterByTopic){
          console.log("topic on date on")

        
          return{
            ...state,
            filterByDate: true,
            displayReviews: state.reviewsFilteredByTopic
                  .filter(r => new Date(r.creationDate) > startDate),
            reviewsFilteredByDate: state.reviewsFilteredByTopic
                  .filter(r => new Date(r.creationDate) > startDate),
          }
        }
        console.log("topic off date on")

        return{
          ...state,
          filterByDate: true,
          displayReviews: state.reviews.filter(r => new Date(r.creationDate) > startDate),
          reviewsFilteredByDate: state.reviews.filter(r => new Date(r.creationDate) > startDate),
        }
      case ViewReviewsConstants.FILTER_BY_TOPIC:

        if(action.topic == "None" && !state.filterByDate) {
          console.log("topic none date off")
          return{
            ...state,
            threshold: 3,
            displayReviews: state.reviews,
            filterByTopic: false,
          }
        } 
        else if(action.topic == "None" && state.filterByDate){
          console.log("topic none date on")
          return{
            ...state,
            threshold: 3,
            filterByTopic: false,
            displayReviews: state.reviewsFilteredByDate,

          }
        }
        else if(state.filterByDate){
          console.log("topic on date on")
          return{
            ...state,
            filterByTopic: true,
            displayReviews: state.reviewsFilteredByDate
              .filter(r => r[action.topic] >= state.threshold),
            reviewsFilteredByTopic: state.reviewsFilteredByDate
              .filter(r => r[action.topic] >= state.threshold),
          }  
        }
        console.log("topic on date off")
        return{
          ...state,
          filterByTopic: true,
          displayReviews: state.reviews
            .filter(r => r[action.topic] >= state.threshold),
          reviewsFilteredByTopic: state.reviews
            .filter(r => r[action.topic] >= state.threshold),
        }  
      case ViewReviewsConstants.CHANGE_THRESHOLD:
        return{
          ...state,
          threshold: action.threshold
        }
        case ViewReviewsConstants.FROM_NEWEST:
          return{
            ...state,
            fromNewest: true,
            fromOldest: false,
            byTopic: false,
            reviews: state.reviews.sort(function(r1, r2){
              return r1.creationDate > r2.creationDate ? -1 : 1})
          }
        case ViewReviewsConstants.FROM_OLDEST:
          return{
            ...state,
            fromNewest: false,
            fromOldest: true,
            byTopic: false,
            reviews: state.reviews.sort(function(r1, r2){
              return r1.creationDate < r2.creationDate ? -1 : 1})
          }
        case ViewReviewsConstants.BY_TOPIC:
          return{
            ...state,
            fromNewest: false,
            fromOldest: false,
            byTopic: true,
          }

        case ViewReviewsConstants.SORT_BY_TOPIC:
          if(action.topic == "None")
            return{
              ...state,
              flagChange: !state.flagChange
            }

          return{
            ...state,
            reviews: state.reviews.sort(function(r1, r2){
              return r1[action.topic] > r2[action.topic] ? -1 : 1}),
            displayReviews: state.displayReviews.sort(function(r1, r2){
              return r1[action.topic] > r2[action.topic] ? -1 : 1}),
            reviewsFilteredByDate: state.reviewsFilteredByDate.sort(function(r1, r2){
              return r1[action.topic] > r2[action.topic] ? -1 : 1}),
            reviewsFilteredByTopic: state.reviewsFilteredByTopic.sort(function(r1, r2){
              return r1[action.topic] > r2[action.topic] ? -1 : 1}),
            flagChange: !state.flagChange
          }
      default:
        return state;
    }
  }


  export default ViewReviewsReducer