const express = require('express');
const router = express.Router();

const blogController = require("../controller/blogController")

const authorController = require("../controller/authorController")

const {authorisation , authentication} = require('../middleware/middleware');
const blogModel = require('../model/blogModel');


router.get("/testMe", function(req, res){ res.status(200).send("All Done")})

router.post("/authors", authorController.createAuthor)

router.post("/blog",blogController.createBlog)

router.put("/blogs/:blogId", blogController.updateBlog)

router.delete("/blogs/:blogId", blogController.deleteBlog)

router.post("/login",authorController.loginAuthor)

router.get("/blogs", blogController.getBlogs)

module.exports = router

