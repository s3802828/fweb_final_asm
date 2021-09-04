var router = require('express').Router()
var {categorize, categorize_by_posts, categorize_by_news} = require('../controllers/categorize_post')
router.get('/categorize_post/:category_id',categorize_by_posts)
router.get('/categorize_new/:category_id',categorize_by_news)

module.exports = router