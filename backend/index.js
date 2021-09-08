const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use("frontend/public", express.static(path.join(__dirname, "frontend/public")));
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb+srv://giangle:mypassword@cluster0.sfxdv.mongodb.net/furtherweb", {
    useNewUrlParser: true, 
  } )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "frontend/public");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/posts", postRoute);
app.use("api/comments", commentRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend." });
});
