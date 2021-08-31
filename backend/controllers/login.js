var jwt = require("jsonwebtoken")
var User = require('../models/users').user;
var bcrypt = require('bcryptjs')

exports.login = (req, res) => {
    User.findOne({ username: req.body.username }, function (error, user) {
        if (error) {
            return res.send(error)
        }
        if (user) {
            if (user.emailVerified) {
                console.log('hello')
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    return res.send("Invalid password")
                } else {
                    console.log("gm")
                    let jwtToken = jwt.sign({ id: user._id }, "furtherweb_private_key", {
                        expiresIn: 10800
                    })
                    let authenticatedUser = {
                        id: user._id,
                        userTypes: user.userTypes,
                        accessToken: jwtToken
                    }
                    return res.send({ authenticatedUser })
                }
            } else {
                return res.send("Your email has not been verified. Please check again!")
            }
        } else {
            return res.send("User is not existed")
        }
    })
}