var router = require('express').Router()
const { model } = require('mongoose')
var {userFollow} = require('../controllers/user_follow.js')
var {checkFollow} = require('../middlewares/checkFollow.js')


router.put('/user/:id/follow',checkFollow, userFollow)



module.exports = router;