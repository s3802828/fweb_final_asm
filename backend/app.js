var app = require('express')()
require("dotenv").config();
require("./config/database").connect();
var cors = require('cors')
var postCategoryJSON = require("./samplePostCategory.json")
var Post_category = require("./models/post_category")
var bodyParser = require('body-parser')
var auth = require('./routes/signUpLogin/auth')
var verifyEmail = require('./routes/signUpLogin/verifyEmail')
var newsCategoryJSON = require("./sampleNewsCategory.json")
var News_category = require("./models/news_category")

app.use(cors())
app.use(bodyParser.json())

// mongoose.connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb")
// .then(() => app.listen(9000, () => console.log("Succesfully connected!!!")))
// .catch((error) => console.log(error.message))

// mongoose.connect("mongodb+srv://myuser:mypassword@cluster0.1lbnn.mongodb.net/testdb")
// .then(() => app.listen(9000, () => console.log("Succesfully connected!!!")))
// .catch((error) => console.log(error.message))

// Post_category.post_category.insertMany(postCategoryJSON, function(error, data){
//     if(error){
//         console.log("Post Category has already been populated!")
//     } else {
//         console.log("Post Category has successfully been populated!")
//     }
// })
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


// News_category.news_category.insertMany(newsCategoryJSON, function(error, data){
//     if(error){
//         console.log("News Category has already been populated!")
//     } else {
//         console.log("News Category has successfully been populated!")
//     }
// })

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