const { List, Map } = require('immutable');

export default {

    app: {
        isConnected: false,
        user: List(),
        locations: List(),
        users: List(),
    },

    login: {
        username: "",
        password: "",
        errorMessage: "",
    },

    register: {
        name: "",
        username: "",
        password: "",
        location: "",
    },

    profilePicture: {
        file: List(),
    },

    addHotel: {
        name: "",
        location: "",
        link: ""
    },

    addReview: {
        username: "",
        hotel: "",
        staff: 0,
        comfort: 0,
        cleanliness: 0,
        freeWiFi: 0,
        facilities: 0,
        valueForMoney: 0,
        location: 0,
        pictures: List(),
    },

    viewReviews: {
        reviews:                [],
        displayReviews:         [],
        reviewsFilteredByDate:  [],
        reviewsFilteredByTopic: [],
        filterFlag:             false,
        filterByDate:           false,
        filterByTopic:          false,
        threshold:              3,
        fromNewest:             true,
        fromOldest:             false,
        byTopic:                false,
        flagChange:             false
    },

};
