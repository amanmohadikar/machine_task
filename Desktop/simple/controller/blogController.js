const blogModel = require("../model/blogModel")
const authorModel = require("../model/authorModel")
const { default: mongoose } = require("mongoose")



const createBlog = async function (req, res) {
    let data = req.body
    let { title, body, authorId, category } = req.body
    if (!title || !body || !authorId || !category) return res.send({ msg: "mandatory field is  not present" })

    authorId = req.body.authorId
    let isAuthorPresent = await authorModel.findById(authorId)
    if (!mongoose.Types.ObjectId.isValid(isAuthorPresent)) return res.send({ msg: "authorId is not valid" })

    let newData1 = await blogModel.create(data)

    res.send({ status: true, msg: newData1 })
}



const updateBlog = async function (req, res) {
    data = req.body
    let { title, body, category, isPublished, tags, subcategory } = data

    if (Object.keys(data).length <= 0) return res.send({ msg: "please give some data" })

    let blogId = req.params.blogId
    let isBlogPresent = await blogModel.findById(blogId)
    if (!mongoose.Types.ObjectId.isValid(isBlogPresent)) return res.send({ msg: "blog id is not valid" })

    if (!isBlogPresent) return res.send({ msg: "blog id is not present" })

    if (isBlogPresent["isDeleted"] == true) return res.send({ msg: "data is already deleted" })

    let dateAndTime;
    req.body.isPublished ? dateAndTime = Date.now() : dateAndTime = null

    let newData2 = await blogModel.findOneAndUpdate({ _id: blogId }, { $set: { title, body, category, isPublished, publishedAt: dateAndTime }, $push: { tags: tags, subcategory: subcategory } }, { new: true })
    res.send({ status: true, msg: newData2 })

}



const getBlogs = async function (req, res) {
    const { authorId, category, tags, subcategory } = req.query

    let findObj = {
        isDeleted: false,
        isPublished: true
    }
    if (authorId) {
        findObj["authorId"] = authorId
    }
    if (category) {
        findObj["category"] = category
    }
    if (tags) {
        findObj["tags"] = tags
    }
    if (subcategory) {
        findObj["subcategory"] = subcategory
    }

    let data = await blogModel.find(findObj)

    if (data.length <= 0) return res.status(404).send({ status: false, message: 'No Data Found' })

    res.status(200).send({ status: true, AllDataAre: data.length, data: data })

}



const deleteBlog = async function (req, res) {
    let blogId = req.params.blogId
    if (!blogId) return res.send({ msg: "blog id is not present" })
    if (!blogId.isDeleted == true) return res.send({ msg: "data is already true" })

    let newData3 = await blogModel.findByIdAndUpdate({ _id: blogId, isDeleted: false }, { $set: { isDeleted: true } }, { new: true })
    res.send({ msg: newData3 })
}




module.exports = { createBlog, updateBlog, deleteBlog, getBlogs }
