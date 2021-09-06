const express = require('express')
const mongoose = require('mongoose')

var app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true})

app.get('/', (req,res) => {
    res.send('Welcome to mongodb Api')
})

var userProfile = require("./models/users")
app.get('/users', function(req, res){
    userProfile.user.find({},(err, result) =>{
        res.send(result)})
})






