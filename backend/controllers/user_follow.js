var Users = require('../models/users').user

exports.userFollow = async(req, res) => {
  await Users.findByIdAndUpdate({_id: req.body.id}, {
    $push: {followers: req.params.id}
  }, function(err, result) {
    if(err){
      return res.send(err)
    }
    res.send(result)
  })
}