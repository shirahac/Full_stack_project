import { combineReducers } from 'redux';
import AppReducer from './components/App/reducer';
import LoginReducer from "./components/Login/reducer";
import RegisterReducer from "./components/Register/reducer";
import ProfilePictureReducer from "./components/ProfilePicture/reducer";
import AddHotelReducer from "./components/AddHotel/reducer";
import AddReviewReducer from "./components/AddReview/reducer";
import ViewReviewsReducer from "./components/ViewReviews/reducer";
import PicturesReducer from "./components/Pictures/reducer";


export default combineReducers({
  app: AppReducer,
  login: LoginReducer,
  register: RegisterReducer,
  profilePicture: ProfilePictureReducer,
  addHotel: AddHotelReducer,
  addReview: AddReviewReducer,
  viewReviews: ViewReviewsReducer,
  pictures: PicturesReducer,
});
