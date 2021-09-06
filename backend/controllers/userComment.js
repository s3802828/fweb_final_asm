const express = require('express')
const mongoose = require('mongoose')
var app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true})
    
    var User_comment = require("./models/comments")
    app.get('/comments', function(req, res){
        res.send('Listening')
    })

    app.get('/posts/:post_id/:user_id', function(req, res){
        User_comment.comments.find({
            post_id: req.params.id,
            user_id: req.params.user_id},(err, result) =>{
        res.send(result)})
    })
