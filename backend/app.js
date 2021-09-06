var app = require('express')()
require("dotenv").config();
var cors = require('cors')
var postCategoryJSON = require("./samplePostCategory.json")
var Post_category = require("./models/post_category")
var bodyParser = require('body-parser')
var auth = require('./routes/signUpLoginRoutes/auth')
var verifyEmail = require('./routes/signUpLoginRoutes/verifyEmail')
var newsCategoryJSON = require("./sampleNewsCategory.json")
var News_category = require("./models/news_category")

app.use(cors())
app.use(bodyParser.json())

//"mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb"
//"mongodb+srv://myuser:mypassword@cluster0.1lbnn.mongodb.net/testdb"
postCategoryJSON.map( async (element, index) => {
    var existedElement = await Post_category.post_category.findOne({name: element.name})
    if(!existedElement){
        Post_category.post_category.create({name: element.name}, function(error, data){
            if(error){
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})

newsCategoryJSON.map( async (element, index) => {
    var existedElement = await News_category.news_category.findOne({name: element.name})
    //console.log(element.name)
    if(!existedElement){
        News_category.news_category.create({name: element.name}, function(error, data){
            if(error){
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})

app.use('/auth', auth)
app.use('/', verifyEmail)

module.exports = app;
