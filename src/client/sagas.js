import { all } from 'redux-saga/effects'
import AppSaga from './components/App/saga'
import LoginSaga from "./components/Login/saga";
import RegisterSaga from "./components/Register/saga";
import AddHotelSaga from "./components/AddHotel/saga";
import AddReviewSaga from "./components/AddReview/saga";
import ViewReviewsSaga from "./components/ViewReviews/saga";


export default function* Sagas() {
    yield all([
        AppSaga(),
        LoginSaga(),
        RegisterSaga(),
        AddHotelSaga(),
        AddReviewSaga(),
        ViewReviewsSaga()
    ])
}
