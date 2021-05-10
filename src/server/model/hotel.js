let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let hotelSchema = new Schema({
    name: String,
    location: String,
    link: String,
    picture: String,
});


module.exports = mongoose.model('HotelModel', hotelSchema);