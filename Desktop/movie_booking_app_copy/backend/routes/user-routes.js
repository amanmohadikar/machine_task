const express = require("express")

let  {deleteUser,getAllUsers,getBookingsOfUser,getUserById,login,singup,updateUser } = require("../controllers/user-controller")

const userRouter = express.Router();


userRouter.post("/signup", singup); // call
userRouter.post("/login", login); // call
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById); // callbut not conform
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/bookings/:id", getBookingsOfUser); // call

module.exports = userRouter;