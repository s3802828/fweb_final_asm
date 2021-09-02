const { post } = require("../models/posts.js");

module.exports = app => {
    const posts = require("../controllers/posts.js");
  
    var router = require("express").Router();

 // Create a new post
router.post("/", posts.create);
  // Update a post with id
  router.put("/:id", posts.update);
   // Delete a post with id
   router.delete("/:id", posts.delete);

   app.use("/api/posts", router);
};