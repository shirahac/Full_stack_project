import { PicturesActionsConstants} from './constants.js';

function addPictureAction(pic){  
    return {
        type: PicturesActionsConstants.ADD_PICTURE,
        pic: pic
    }

}

function removePictureAction(pic){
    return{
        type: PicturesActionsConstants.REMOVE_PICTURE,
        pic: pic
    }
}

function cleanPicturesAction(){
    return {
        type: PicturesActionsConstants.CLEAN_PICTURES,
    }
}


let PicturesActions  = {
    addPictureAction,
    removePictureAction,
    cleanPicturesAction,
};

  export default PicturesActions