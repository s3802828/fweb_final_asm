var router = require('express').Router()
var {profile} = require('../../controllers/forumcontroller/userProfile')
router.get("/:id", profile)

module.exports = router;