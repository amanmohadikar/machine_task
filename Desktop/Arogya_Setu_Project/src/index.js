const express = require("express")
const route = require("./route/route.js")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://Aman_Mohadikar:V5FW1Y8X6b2pIiud@cluster0.gdww84s.mongodb.net/Aarogya_Setu_Project", {
    useNewUrlParser: true
})
    .then(() => console.log("mongoDB is connected"))
    .catch((err => console.log(err)))


app.use("/", route)

app.listen(3000, function () {
    console.log("express app is running on port" + (3000))
})