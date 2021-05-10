import { ProfilePictureConstants} from './constants.js';

function setPictureAction(file){  
    return {
        type: ProfilePictureConstants.SET_PICTURE,
        file: file
    }
}

let ProfilePictureActions  = {
    setPictureAction
};

export default ProfilePictureActions