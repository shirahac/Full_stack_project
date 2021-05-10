let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    location: String,
    picture: String,
});


module.exports = mongoose.model('UserModel', userSchema);