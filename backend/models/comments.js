const mongoose = require('mongoose')

let CommentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"posts"
    },
    content: String
 })
 exports.comment = mongoose.model('Comment', CommentSchema)