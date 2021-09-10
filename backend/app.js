var app = require('express')()
console.log("hello")
require("dotenv").config();

var cors = require('cors')
var bodyParser = require('body-parser')
var auth = require('./routes/signUpLoginRoutes/auth')
var verifyEmail = require('./routes/signUpLoginRoutes/verifyEmail')

var newsPageRoute = require('./routes/newpageRoute/fetchNewPageRoute')
var forumPosts = require("./routes/forums/forumsRoute")
var profileUser = require("./routes/profile/profileRoutes")
var voteRoute = require('./routes/forums/voteRoute')
var categorizeRoute = require ('./routes/forums/categorizeRoute')




app.use(cors())
app.use(bodyParser.json())

//"mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb"
//"mongodb+srv://myuser:mypassword@cluster0.1lbnn.mongodb.net/testdb"

app.use('/news', newsPageRoute)
app.use('/auth', auth)
app.use('/', verifyEmail)
app.use('/profile', profileUser)
app.use('/forums', forumPosts)

app.use('/vote', voteRoute)
app.use('/categorize', categorizeRoute)
module.exports = app;
