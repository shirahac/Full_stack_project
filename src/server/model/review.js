let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let reviewSchema = new Schema({
    username: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }, 
    hotel: String,
    hotelId:  { type: Schema.Types.ObjectId, ref: 'Hotel' },
    creationDate: Date,
    staff:          Number,
    comfort:        Number,
    cleanliness:    Number,
    freeWiFi:       Number,
    facilities:     Number,
    valueForMoney:  Number,
    location:       Number,
    pictures:       [String],
});


module.exports = mongoose.model('ReviewModel', reviewSchema);

