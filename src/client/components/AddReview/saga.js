import {AddReviewConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AddReviewActions from './actions'
import PicturesActions from "../Pictures/actions"
import LoginActions from "../Login/actions";
import AppActions from "../App/actions";



function* submitReview(action){
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if(json.succeed){
            yield put(AddReviewActions.submitReviewSuccessAction());
            yield put(PicturesActions.cleanPicturesAction());
            yield put(AppActions.loadHotels());
        }
    } catch (e) {
        console.log("Adding review failed! - addReviewSaga");
        console.log(e)
    }
}

function* loadHotel(action) {
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if(json.succeed){
            yield put(AddReviewActions.loadHotelSuccessAction(json.hotel))
        }

    } catch (e) {
        // yield put(LoginActions.loginFailureAction(e.message));
    }
}

function* AddReviewSaga() {

    yield takeEvery(AddReviewConstants.LOAD_HOTEL_BY_ID, loadHotel);
    yield takeEvery(AddReviewConstants.SUBMIT_REVIEW, submitReview);

}

export default AddReviewSaga;
