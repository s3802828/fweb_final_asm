var User = require('../models/users').user;
var Token = require('../models/verifyToken').verifyToken;
var bcrypt = require('bcryptjs')
const crypto = require('crypto');
const sendEmail = require('./sendEmailVerification');

exports.signup = async (req,res) => {
    var user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        userType: req.body.userType
    }).save()
    var newToken = {
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex")
    }
    let savedToken = await new Token(newToken).save()
    const verifyLink = `localhost:9000/user/verify/${user._id}/${savedToken.token}`
    sendEmail.sendEmail(user.email, verifyLink)
    res.send("Verification email has been sent to you. Please verify your email to continue!")
}