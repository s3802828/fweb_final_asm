var router = require('express').Router()
var {forumPost, fetchPostDetail, fetchPostCategories} = require('../../controllers/forumcontroller/forumPost')
var {userComment} = require('../../controllers/forumcontroller/userComment')

router.get("/:id/:user_id", userComment)
router.get("/posts/:id",fetchPostDetail)
router.get("/post_category", fetchPostCategories)
router.get("/posts", forumPost)

module.exports = router;