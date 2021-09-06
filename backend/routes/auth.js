var router = require('express').Router()
var {publicAccess, userAccess, reporterAccess, adminAccess} = require('../controllers/getRole')
var {login} = require('../controllers/login')
var {signup} = require('../controllers/signup')
var {verifyToken, isReporter, isAdmin} = require('../middlewares/authJWT')
var validateAuth = require('../middlewares/validateAuth')
const { user } = require('../models/users')

router.get('/public', publicAccess)
router.get('/user', [verifyToken], userAccess)
router.get('/reporter', [verifyToken, isReporter], reporterAccess)
router.get('/admin', [verifyToken, isAdmin], adminAccess)

router.post('/signup', [validateAuth.checkDuplicateEmail, validateAuth.checkDuplicateUsername, validateAuth.deleteVerifyToken], signup)
router.post('/login', login)

module.exports = router;