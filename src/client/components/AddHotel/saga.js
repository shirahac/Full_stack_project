import {AddHotelConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from "../App/actions";



function* AddHotel(action){
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
        if(json.succeed === true)
            yield  put(AppActions.loadHotelsSuccess(json.hotels))
    } catch (e) {
        console.log(e)
    }
}

function* AddHotelSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(AddHotelConstants.ADD_HOTEL, AddHotel);
}

export default AddHotelSaga;
