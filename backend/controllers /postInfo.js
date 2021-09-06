const express = require('express')
const mongoose = require('mongoose')

var app = express()

app.use(express.json())
mongoose.connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true})

    var PostInfo = require("./models/posts")
    app.get('/posts/:id', function(req, res){
    PostInfo.post.findById(req.params.id,(err, result) =>{
        res.send(result)})
    })


