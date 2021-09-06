var User_comment = require("../../models/comments")
    exports.userComment = function(req, res){
        User_comment.comment.find({
            post_id: req.params.id,
            user_id: req.params.user_id},(err, result) =>{
        res.send(result)})
    }
