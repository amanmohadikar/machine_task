const authorModel = require("../model/authorModel")
const emailValidator = require("email-validator")
const jwt = require("jsonwebtoken")
const { mongo, default: mongoose } = require("mongoose")



const createAuthor = async function (req, res) {
    try {
        let data = req.body
        let { fname, lname, title, email, password } = req.body
        if (!fname || !lname || !title || !email || !password) return res.status(201).send({ msg: "mandatory field is not present" })

        email = req.body.email
        if (!email) return res.send({ msg: "email Id is not present" })
        if (!emailValidator.validate(email)) return res.send({ msg: "email id is not valid" })

        let newData = await authorModel.create(data)

        res.send({ status: true, msg: newData })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }

}



const loginAuthor = async function (req, res) {
    let email = req.body.email
    let password = req.body.password

    let isDataPresent = await authorModel.findOne({ email: email, password: password })
    if (!isDataPresent) return res.send({ msg: "password or email in not present" })
    if (!emailValidator.validate(email)) return res.send({ msg: "email id is  not valid" })

    let token = jwt.sign({ _id: isDataPresent._id.toString() }, "this is not meme")
    res.send({ msg: token })
}



module.exports.createAuthor = createAuthor
module.exports.loginAuthor = loginAuthor