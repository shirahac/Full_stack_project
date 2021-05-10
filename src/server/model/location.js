let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let locationSchema = new Schema({
    name: String,
    distanceFromTelAviv: Number,
    distanceFromEilat: Number,
    distanceFromRehovot: Number,
    distanceFromAshdod: Number,
    distanceFromNazareth: Number,
    distanceFromHaifa: Number,   
});


module.exports = mongoose.model('LocationModel', locationSchema);


