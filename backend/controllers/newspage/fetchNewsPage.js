var newsModel = require('../../models/news').news
var newsCategoryModel = require('../../models/news_category').news_category

exports.fetchBreakingNews = (req, res) => {
    newsModel.find({breaking: "1"}, function(error, data){
        if(error){
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    }).sort({'createdAt': 'desc'}).limit(10)
}

exports.fetchAllNewsCategory = (req, res) => {
    newsCategoryModel.find({}, function(error, data){
        if(error){
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    })
}

exports.categorizedNews = (req, res) => {
    newsModel.find({news_category_id: req.params.news_category_id}, function(error, data){
        if(error){
            console.log(error)
            return res.send([])
        } else {
            return res.send(data)
        }
    }).sort({'createdAt': 'desc'})
}