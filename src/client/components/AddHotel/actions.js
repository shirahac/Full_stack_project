import { AddHotelConstants} from './constants.js';


function addNameAction(name){
    return {
        type: AddHotelConstants.ADD_NAME,
        payload: {name: name}
    }
  }

function addLocationAction(location){
    return {
        type: AddHotelConstants.ADD_LOCATION,
        payload: {location: location}
    }
}

function addLinkAction(link){
    return {
        type: AddHotelConstants.ADD_LINK,
        payload: {link: link}
    }
}

function addHotelAction(name, location, link, picture) {
    return {
        type: AddHotelConstants.ADD_HOTEL,
        uri: '/api/update/hotel',
        payload: {
            name: name,
            location: location,
            link: link,
            picture: picture
        }
    }
}

let addHotelActions  = {
    addNameAction,
    addLocationAction,
    addLinkAction,
    addHotelAction,
};

  export default addHotelActions