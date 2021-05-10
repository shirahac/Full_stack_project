import {LoginConstants} from "./constants";
import LoginActions from "./actions";
import {call, put, takeEvery } from 'redux-saga/effects'
import AppActions from "../App/actions";

function* loginUser(action) {

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
            alert("user logged in saga")
            // yield put(AppActions.loggedInUser(json.user))
            yield put(AppActions.loggedInUser(json.user))
        }
        else
            yield put(LoginActions.loginFailureAction(json.message))

    } catch (e) {
        // yield put(LoginActions.loginFailureAction(e.message));
    }
}

function* LoginSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(LoginConstants.LOGIN, loginUser);
}

export default LoginSaga;