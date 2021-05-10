import PicturesActions from "./actions"
import { PicturesActionsConstants } from "./constants";

const initialState = {
  pictures: [],
  };


function PicturesReducer(state = initialState, action) {
    switch(action.type) {
      case PicturesActionsConstants.ADD_PICTURE:
        return{
          pictures: state.pictures.concat(action.pic),
        }
      case PicturesActionsConstants.REMOVE_PICTURE:
        return{
          pictures: state.pictures.filter(pic => pic.preview != action.pic.preview)
        }
      case PicturesActionsConstants.CLEAN_PICTURES:
        return initialState
      default:
        return state;
    }
  }


  export default PicturesReducer