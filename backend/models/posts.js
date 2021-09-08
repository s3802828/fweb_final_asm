const mongoose = require("mongoose");

let PostSchema = new mongoose.Schema({
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
  }]
}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema);
