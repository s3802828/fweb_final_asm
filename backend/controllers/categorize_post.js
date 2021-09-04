var Posts = require('../models/posts').post
var News = require('../models/news').news
var Post_Category = require('../models/post_category').post_category
var News_Category = require('../models/news_category').news_category
const mongoose = require('mongoose')

//Categorize 

exports.categorize_by_posts = async (req, res) => {
    var category = await Post_Category.findOne({_id: req.params.category_id})
    console.log(category._id.toString())
    Posts.find({post_category_id: category._id}, function(err,posts){
        if(err){
            return res.send(err)
        }
        console.log(typeof posts.post_category_id)
        res.send(posts)
    })
}

exports.categorize_by_news = async (req, res) => {
    var category = await News_Category.findOne({_id: req.params.category_id})
    console.log(category._id.toString())
    News.find({news_category_id: category._id}, function(err,news){
        if(err){
            return res.send(err)
        }
        console.log(typeof news.news_category_id)
        res.send(news)
    })
}