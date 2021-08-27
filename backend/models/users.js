var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    dateOfBirth: Date,
    gender: String,
    phoneNumber: String,
    userType: [String],
    avatar: String,
    followers: [String]
 })
 exports.user = mongoose.model('User', UserSchema)