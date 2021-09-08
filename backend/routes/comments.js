const router = require("express").Router();
const Comment = require("../models/comments");

//CREATE COMMENT
router.post("/", async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE COMMENT
router.put("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
      try {
        const updatedComment = await comment.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedComment);
      } catch (err) {
        res.status(500).json(err);
      }

  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE COMMENT
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
      try {
        await comment.delete();
        res.status(200).json("Comment has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET COMMENT
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;