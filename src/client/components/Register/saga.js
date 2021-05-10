import {RegisterConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from "../App/actions";
import RegisterActions from "./actions";

function* addUser(action){

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
        if(!json.success){
            RegisterActions.registerFail(json.reason);
        }
        yield put(AppActions.addedUser(json))
    } catch (e) {
        console.log("in saga found error");
    }
}


function* RegisterSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(RegisterConstants.ADD_USER, addUser);
}

export default RegisterSaga;
