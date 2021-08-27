var mongoose = require('mongoose')
var PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    post_category_id: String,
    user_id: String,
    vote: [String],
    created_at: Date,
    updated_at: Date
 })
 exports.post = mongoose.model('Post', PostSchema)