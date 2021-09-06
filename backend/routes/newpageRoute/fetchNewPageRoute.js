var {fetchBreakingNews, fetchAllNewsCategory, categorizedNews} = require('../../controllers/newspage/fetchNewsPage')
var router = require('express').Router()
router.get('/breakingnews', fetchBreakingNews)
router.get('/newscategory', fetchAllNewsCategory)
router.get('/:news_category_id', categorizedNews)

module.exports = router