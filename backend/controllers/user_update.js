var Users = require('../models/users').user
var bcrypt = require('bcryptjs')

exports.userUpdate = async (req,res) => {
  //hit the update button
  await Users.findByIdAndUpdate({_id: req.params.id}, {
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    gender: req.body.gender,
    address: req.body.address,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber
  }, function(err, result) {
    if(err){
      return res.send(err)
    }
    res.send(result)
  })
}