import { AddReviewConstants} from './constants.js';

function loadHotelAction(hotelId) {
    return {
        type: AddReviewConstants.LOAD_HOTEL_BY_ID,
        uri: '/api/load/hotel_by_id',
        payload: { hotelId: hotelId }
    }
}

function loadHotelSuccessAction(hotel) {
    return {
        type: AddReviewConstants.LOAD_HOTEL_SUCCESS,
        payload: { hotel: hotel }
    }
}

function changeRatingAction(topic, rating){
    return {
        type: AddReviewConstants.CHANGE_RATING,
        payload: {
            topic: topic,
            rating: rating
        }
    }
}

function submitReviewAction(user, hotelId, ratings, pictures){
    let d = new Date();
    let n = d.getDate();

    return {
        type: AddReviewConstants.SUBMIT_REVIEW,
        uri: '/api/add/review',
        payload: {
            user: user,
            hotelId: hotelId,
            creationDate: d, //'2018-09-28',
            ratings: ratings,
            pictures: pictures.map(picObj => picObj.value),
        },
    }
}

function submitReviewSuccessAction(){
    return {
        type: AddReviewConstants.SUBMIT_REVIEW_SUCCESS
    }
}

let AddReviewActions  = {
    loadHotelAction,
    loadHotelSuccessAction,
    changeRatingAction,
    submitReviewAction,
    submitReviewSuccessAction,
};

export default AddReviewActions