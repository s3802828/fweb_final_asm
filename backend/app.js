var app = require('express')()
console.log("hello")
require("dotenv").config();
//const db = require("./config/database").connect();
console.log("hello 2")
var cors = require('cors')
var bodyParser = require('body-parser')
var auth = require('./routes/signUpLoginRoutes/auth')
var verifyEmail = require('./routes/signUpLoginRoutes/verifyEmail')
var newsPageRoute = require('./routes/newpageRoute/fetchNewPageRoute')


app.use(cors())
app.use(bodyParser.json())

//"mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb"
//"mongodb+srv://myuser:mypassword@cluster0.1lbnn.mongodb.net/testdb"

app.use('/news', newsPageRoute)
app.use('/auth', auth)
app.use('/', verifyEmail)

module.exports = app;