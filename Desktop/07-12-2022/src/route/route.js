const express = require("express")
const router = express.Router()
const controller = require("../controller/coinController")


router.post("/get", controller.getbitCoin)
module.exports = router
