const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/user-routes")
const adminRouter = require("./routes/admin-routes")
const movieRouter = require("./routes/movie-routes")
const bookingsRouter = require("./routes/booking-routes")
const cors = require("cors")
const app = express();


// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/movie", movieRouter);
app.use("/api/booking", bookingsRouter);

mongoose.connect("mongodb+srv://Aman_Mohadikar:V5FW1Y8X6b2pIiud@cluster0.gdww84s.mongodb.net/movie_booking_app")
    .then(() => app.listen(5000))
    .then(() => console.log("Connected TO Database and Listening TO Localhost 5000"))
    .catch((err) => console.log(err));