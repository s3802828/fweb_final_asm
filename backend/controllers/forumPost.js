const express = require('express')
const mongoose = require('mongoose')

var app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true})

    var Posts = require("./models/posts")
    app.get('/posts', function(req, res){
    Posts.post.find({},(err, result) =>{
        res.send(result)})
    })


