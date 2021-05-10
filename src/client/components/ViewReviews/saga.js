import {ViewReviewsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import ViewReviewsActions from './actions'


function* loadReviews(action){

    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action)
            });

        const json = yield call([res, 'json']); //retrieve body of response

        yield put(ViewReviewsActions.loadReviewsSuccessAction(json));
    } catch (e) {
    }
}


function* ViewReviewsSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(ViewReviewsConstants.LOAD_REVIEWS, loadReviews);
}

export default ViewReviewsSaga;
