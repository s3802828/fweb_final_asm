import Posts from '../models/posts'


// Create and Save a new post
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a post
  const posts = new Posts({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    post_category_id: req.body.post_category_id,

  });

  // Save post in the database
  posts
    .save(posts)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
    });
};

//Update post with an ID
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Posts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update post with id=${id}.`
          });
        } else res.send({ message: "Post was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Post with id=" + id
        });
      });
  };
  //Delete post with a specific ID
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Posts.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete post with id=${id}.`
          });
        } else {
          res.send({
            message: "Post was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Post with id=" + id
        });
      });
  };