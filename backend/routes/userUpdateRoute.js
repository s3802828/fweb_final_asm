var router = require('express').Router()
const { model } = require('mongoose')
var {userUpdate} = require('../controllers/user_update.js')
var validateAuth = require('../middlewares/validateAuth')

router.put('/user/:id/update',[validateAuth.checkDuplicateEmail, validateAuth.checkDuplicateUsername], userUpdate)



module.exports = router;