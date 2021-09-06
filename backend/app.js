var app = require('express')()
 
var mongoose = require('mongoose')
var cors = require('cors')
app.use(cors())
 
var bodyParser = require('body-parser')
 
var auth = require('./routes/auth.js')
var verifyEmail = require('./routes/verifyEmail.js')

app.use(bodyParser.json())

// mongoose.connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb")
// .then(() => app.listen(9000, () => console.log("Succesfully connected!!!")))
// .catch((error) => console.log(error.message))

mongoose.connect("mongodb+srv://myuser:mypassword@cluster0.1lbnn.mongodb.net/testdb")
.then(() => app.listen(9000, () => console.log("Succesfully connected!!!")))
.catch((error) => console.log(error.message))

var postCategoryJSON = require("./samplePostCategory.json")
var Post_category = require("./models/post_category")
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

var newsCategoryJSON = require("./sampleNewsCategory.json")
var News_category = require("./models/news_category")
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