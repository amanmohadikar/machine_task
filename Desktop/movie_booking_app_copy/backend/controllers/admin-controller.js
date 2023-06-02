const Admin = require("../models/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const addAdmin = async (req, res) => {
  const data = req.body
  const { email, password } = data

  if (!email && !password) return res.status(422).json({ message: "Invalid Inputs" });

  let existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) return res.status(400).json({ message: "Admin already exists" });

  const hashedPassword = bcrypt.hashSync(password);
  let admin = new Admin({ email, password: hashedPassword });
  admin = await admin.save();

  if (!admin) return res.status(500).json({ message: "Unable to store admin" });

  return res.status(201).json({ admin });
};



const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingAdmin) {
    return res.status(400).json({ message: "Admin not found" });
  }
  const isPasswordCorrect = bcrypt.compareSync(
    password,
    existingAdmin.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }

  const token = jwt.sign({ id: existingAdmin._id }, "aman222", {
    expiresIn: "7d",
  });

  return res
    .status(200)
    .json({ message: "Authentication Complete", token, id: existingAdmin._id });
};



const getAdmins = async (req, res, next) => {
  let admins;
  try {
    admins = await Admin.find();
  } catch (err) {
    return console.log(err);
  }
  if (!admins) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ admins });
};



const getAdminById = async (req, res, next) => {
  try {

    const id = req.params.id;

    let admin = await Admin.findById(id).populate("addedMovies");

    if (!admin) {
      return res.status(404).json({ message: "Cannot find Admin" });
    }
    return res.status(200).json({ admin });
  }
  catch (err) {
    return res.status(500).json({ message: err.message })
  }
};

module.exports = { addAdmin, adminLogin, getAdminById, getAdmins, }