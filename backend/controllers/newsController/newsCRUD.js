var News = require('../../models/news').news;
var { uploadFile, deleteFile } = require('../s3')

const bucketName = "covi-away-app/newsUploads"

const fs = require('fs')


exports.getArticle = function (req, res) {
    News.find({}, (err, result) => {
        res.send(result)
    })
}

exports.getArticleDetails = function (req, res) {
    News.findById(req.params.id, (err, result) => {
        res.send(result)
    })
}


exports.addArticle = async function (req, res) {

    // console.log(req)
    // console.log(req.file)
    // console.log(req.image)

    const file = req.file
    console.log(file)
    const result = await uploadFile(file, bucketName)
    console.log(result)

    News.create({
        title: req.body.title,
        content: req.body.content,
        breaking: req.body.breaking,
        image: result.Key,
        news_category_id: req.body.news_category_id,
        user_id: req.body.user_id
    }, function (err, result) {

        res.send(result)

    })

    fs.unlink('./../frontend/public/newsUploads/' + file.filename, (err) => {
        if (err) {
            console.error(err)
            return
        }

        //file removed
    })

}

exports.deleteArticle = function (req, res) {



    News.findOneAndDelete({ _id: req.body._id }, function (err, result) {
        res.send(result)

        deleteFile(result.image, bucketName)
        // console.log(result)
        // fs.unlink('./../frontend/public/newsUploads/' + result.image, (err) => {
        //     if (err) {
        //         console.error(err)
        //         return
        //     }

        //     //file removed
        // })
    })
}

exports.updateArticle = async function (req, res) {
    //Find current image and remove it from the source folder
    if (req.file) {

        const s3Result = await uploadFile(req.file, bucketName)

        // fs.unlink('./../frontend/public/newsUploads/' + result.image, (err) => {
        //     if (err) {
        //         console.error(err)
        //         // return
        //     }
        //     //file removed
        // })

        News.findOne({ _id: req.body.id }, (err, result) => {
            console.log(result)
            if (result) {
                deleteFile(result.image, bucketName)

                News.findOneAndUpdate({ _id: result._id }, {
                    title: req.body.title,
                    content: req.body.content,
                    breaking: req.body.breaking,
                    image: s3Result.Key,
                    news_category_id: req.body.news_category_id,
                }
                    , function (err, result) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(result)
                        }
                    })
            }
        })



    } else {
        News.findOneAndUpdate({ _id: req.body.id }, {
            title: req.body.title,
            content: req.body.content,
            breaking: req.body.breaking,
            news_category_id: req.body.news_category_id,
        }
            , function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(result)
                }
            })
    }
}