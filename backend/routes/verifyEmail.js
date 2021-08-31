var router = require('express').Router()
var User = require('../models/users').user
var Token = require('../models/verifyToken').verifyToken;

router.get("/user/verify/:id/:token", async function(req, res){
    const user = await User.findOne({_id:req.params.id})
    console.log(user)
    console.log(req.url)
    if (!user) return res.status(400).send("Invalid link");
    const token = await Token.findOne({
       userId: user._id,
       token: req.params.token,
     });
   if (!token) return res.status(400).send("Invalid link");
   await User.findOneAndUpdate({_id: user._id}, {emailVerified: true});
   await Token.findByIdAndRemove(token._id);
   res.send("email verified sucessfully");
})

module.exports = router