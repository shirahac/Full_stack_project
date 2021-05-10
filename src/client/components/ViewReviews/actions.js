import { ViewReviewsConstants} from './constants.js';

function saveHotelAction(hotel){
    return {
        type: ViewReviewsConstants.SAVE_HOTEL,
        hotel: hotel
    }

}

function loadReviewsAction(hotel){
    return{
        type: ViewReviewsConstants.LOAD_REVIEWS,
        uri: '/api/load/hotel/reviews',
        hotel: hotel
    }
}

function loadReviewsSuccessAction(reviews){
    return{
        type: ViewReviewsConstants.LOAD_REVIEWS_SUCCESS,
        reviews: reviews
    }
}

function changeFilterFlagAction(flag){
    return{
        type: ViewReviewsConstants.FILTER_FLAG,
        flag: flag,
    }
}

function setFilterByDateAction(flag){
    return{
        type: ViewReviewsConstants.FILTER_BY_DATE,
        flag: flag
    }
}

function setFilterByTopicAction(topic){
    return{
        type: ViewReviewsConstants.FILTER_BY_TOPIC,
        topic: topic
    }
}

function changeThresholdAction(threshold){
    return{
        type: ViewReviewsConstants.CHANGE_THRESHOLD,
        threshold: threshold
    }
}

function sortFromNewestAction(){
    return{
        type: ViewReviewsConstants.FROM_NEWEST
    }
}

function sortFromOldestAction(){
    return{
        type: ViewReviewsConstants.FROM_OLDEST
    }
}

function sortByTopicAction(){
    return{
        type: ViewReviewsConstants.BY_TOPIC
    }
}

function setSortTopicAction(topic){
    return{
        type: ViewReviewsConstants.SORT_BY_TOPIC,
        topic: topic
    }
}

let ViewReviewsAction  = {
    saveHotelAction,
    loadReviewsAction,
    loadReviewsSuccessAction,
    changeFilterFlagAction,
    setFilterByDateAction,
    setFilterByTopicAction,
    changeThresholdAction,
    sortByTopicAction,
    sortFromNewestAction,
    sortFromOldestAction,
    setSortTopicAction

};

export default ViewReviewsAction
