var mongoose = require('mongoose')
var NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    breaking: Boolean,
    image: String,
    news_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"news_categories",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    created_at: Date,
    updated_at: Date
 })
 exports.news = mongoose.model('New', NewsSchema)