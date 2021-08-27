var mongoose = require('mongoose')
var NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    breaking: Boolean,
    image: String,
    news_category_id: String,
    user_id: String,
    created_at: Date,
    updated_at: Date
 })
 exports.news = mongoose.model('New', NewsSchema)