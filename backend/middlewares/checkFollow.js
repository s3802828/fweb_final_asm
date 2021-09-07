var User = require("../models/users").user

exports.checkFollow = async(req, res, next) => {
  User.findOne({_id: req.body.id}, function(error, user){
    if(error){
        return res.send(error);
    }
    if(user){
        let followersArray = []
        followersArray = user.followers
        for(index = 0; index < followersArray.length; index++) {
          if(followersArray[index] == req.params.id) {
            return res.send("Already followed this account")
          }
        }       
    }
    next()
    
  })
}