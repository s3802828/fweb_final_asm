const jwt = require('jsonwebtoken');
const { user } = require('../models/users');
exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if(!token){
        return res.send('No token provided')
    }
    jwt.verify(token, "furtherweb_private_key", (error, decoded) => {
        if(error){
            return res.send("Unauthorized")
        }
        req.user = decoded;
        next();
    })
}
exports.isAdmin = (req,res,next) => {
    user.findById(req.user.id, function(error, user){
        if(error){
            return res.send(error)
        }
        if (user.userType.includes('admin')){
            next()
        }
        else{
            return res.send('No admin')
        }
    })
}
exports.isReporter = (req,res,next) => {
    user.findById(req.user.id, function(error, user){
        if(error){
            return res.send(error)
        }
        if (user.userType.includes('reporter')){
            next()
        }
        else{
            return res.send('No reporter')
        }
    })
}