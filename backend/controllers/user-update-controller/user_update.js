var Users = require('../../models/users').user
 

exports.userUpdate = async (req,res) => {
  //hit the update button
  await Users.findByIdAndUpdate({_id: req.params.id}, {
    username: req.body.username,
    email: req.body.email,
    gender: req.body.gender,
    address: req.body.address,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth
  
  }, function(err, result) {
    if(err){
      return res.send(err)
    }
    res.send(result)
  })
}