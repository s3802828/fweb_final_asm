var mongoose = require('mongoose')
var PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    post_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"post_categories"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    vote: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    created_at: Date,
    updated_at: Date
 })
 exports.post = mongoose.model('Post', PostSchema)