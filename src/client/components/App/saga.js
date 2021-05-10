import {AppConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import AppActions from './actions'


function* loadDetails(action){
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if(action.type === AppConstants.LOAD_LOCATIONS)
            yield put(AppActions.loadLocationsSuccess(json));
        if(action.type === AppConstants.LOAD_USERS)
            yield put(AppActions.loadUsersSuccess(json));
        if(action.type === AppConstants.LOAD_HOTELS)
            yield  put(AppActions.loadHotelsSuccess(json))
    } catch (e) {}
}
 

function* AppSaga() {
    yield takeEvery(AppConstants.LOAD_LOCATIONS, loadDetails);
    yield takeEvery(AppConstants.LOAD_USERS, loadDetails);
    yield takeEvery(AppConstants.LOAD_HOTELS, loadDetails);
}

export default AppSaga;