var Users = require('../../models/users').user

const fs = require('fs')
var { uploadFile, deleteFile } = require('../s3')

const bucketName = "covi-away-app/userUploads"

exports.userUpdate = (req, res) => {
  //hit the update button
  Users.findByIdAndUpdate({ _id: req.params.id }, {
    username: req.body.username,
    email: req.body.email,
    gender: req.body.gender,
    address: req.body.address,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender

  }, function (err, result) {
    if (err) {
      return res.send(err)
    }
    res.send(result)
  })
}

exports.updateAvatar = (req, res) => {
  Users.findById({ _id: req.params.id }, async (error, result) => {
    if (result) {
      if (result.avatar) {
        //delete old image
        console.log("Deleting old image")
        deleteFile(result.avatar, bucketName)

        fs.unlink('./../frontend/public/userUploads/' + result.avatar, (err) => {
          if (err) {
            console.error(err)
            return
          }

        })

        //Add new image
        console.log("UPLOAD new image after delete")
        console.log(req.file)
        const newImage = await uploadFile(req.file, bucketName)
        console.log(newImage)

        Users.findByIdAndUpdate({ _id: req.params.id }, {
          avatar: newImage.Key
        }, (error, result) => {
          if (error) {
            console.log(error)
          } else {
            res.send(result)
          }
        })
      } else {
        //Add new image
        console.log("UPLOAD new image")
        console.log(req.file)
        const newImage = await uploadFile(req.file, bucketName)
        console.log(newImage)

        Users.findByIdAndUpdate({ _id: req.params.id }, {
          avatar: newImage.Key
        }, (error, result) => {
          if (error) {
            console.log(error)
          } else {
            res.send(result)
          }
        })
      }
    }
  })


}