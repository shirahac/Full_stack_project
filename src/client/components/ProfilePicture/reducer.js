import ProfilePictureActions from "./actions"
import { ProfilePictureConstants } from "./constants";
import initialState from "../../initialState";


function ProfilePictureReducer(state = initialState.profilePicture, action) {

  switch(action.type) {
    case ProfilePictureConstants.SET_PICTURE:
      return{
        file: action.file,
      };

    default:
      return state;
  }
}


export default ProfilePictureReducer