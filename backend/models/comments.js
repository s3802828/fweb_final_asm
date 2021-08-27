var mongoose = require('mongoose')
var CommentSchema = new mongoose.Schema({
    user_id: String,
    post_id: String,
    content: String
 })
 exports.comment = mongoose.model('Comment', CommentSchema)