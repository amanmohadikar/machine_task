const express = require("express")
let {addAdmin,adminLogin,getAdminById,getAdmins,} = require("../controllers/admin-controller")

const adminRouter = express.Router();


adminRouter.post("/signup", addAdmin); // call
adminRouter.post("/login", adminLogin);// call
adminRouter.get("/", getAdmins);
adminRouter.get("/:id", getAdminById); // call

module.exports = adminRouter;