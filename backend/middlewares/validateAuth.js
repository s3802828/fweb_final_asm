var User = require("../models/users").user
var bcrypt = require('bcryptjs')

const checkDuplicateUsername = (req, res, next) => {
    User.findOne({username: req.body.username}, function(error, user){
        if(error){
            return res.send(error);
        }
        if(user){
            return res.send("Username is already existed.")
        }
        next();
    })
}
const checkDuplicateEmail = (req, res, next) => {
    User.findOne({email: req.body.email}, function(error, user){
        if(error){
            return res.send(error)
            
        }
        if(user){
            return res.send("Email is already existed.")
        }
        next();
    })
}


module.exports = {checkDuplicateEmail, checkDuplicateUsername}