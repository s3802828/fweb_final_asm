var app = require('express')()
 
var mongoose = require('mongoose')
 
var bodyParser = require('body-parser')
 
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb")
.then(() => app.listen(9000, () => console.log("Succesfully connected!!!")))
.catch((error) => console.log(error.message))


var postCategoryJSON = require("./samplePostCategory.json")
var Post_category = require("./models/post_category")
Post_category.post_category.insertMany(postCategoryJSON, function(error, data){
    if(error){
        console.log("Post Category has already been populated!")
    } else {
        console.log("Post Category has successfully been populated!")
    }
})

var newsCategoryJSON = require("./sampleNewsCategory.json")
var News_category = require("./models/news_category")
News_category.news_category.insertMany(newsCategoryJSON, function(error, data){
    if(error){
        console.log("News Category has already been populated!")
    } else {
        console.log("News Category has successfully been populated!")
    }
})