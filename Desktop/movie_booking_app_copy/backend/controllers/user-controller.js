const User = require("../models/User")
const bcrypt = require("bcryptjs")
const Bookings = require("../models/Bookings")



const singup = async (req, res) => {
  try {
    let data = req.body
    let { name, email, password } = data
    if (!name && name.trim() === "" && !email && email.trim() === "" && !password && password.trim() === "") return res.status(400).send({ message: "all field mandatory" })

    const hashedPassword = bcrypt.hashSync(password);

    let user = new User( {name, email, password : hashedPassword} )
    user = await user.save()

    return res.status(201).json({ id: user._id });
  }
  catch (err) {
    return res.status(500).send({ message: err.message })
  }
}


// const singup = async (req, res, next) => {
//   const { name, email, password } = req.body;
//   if (
//     !name &&
//     name.trim() === "" &&
//     !email &&
//     email.trim() === "" &&
//     !password &&
//     password.trim() === ""
//   ) {
//     return res.status(422).json({ message: "Invalid Inputs" });
//   }
//   const hashedPassword = bcrypt.hashSync(password);
//   let user;
//   try {
//     user = new User({ name, email, password: hashedPassword });
//     user = await user.save();
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!user) {
//     return res.status(500).json({ message: "Unexpected Error Occured" });
//   }
//   return res.status(201).json({ id: user._id });
// };



const login = async (req, res) => {
  try {
    const data = req.body
    const { email, password } = data
    if (!email && !password) { return res.status(400).json({ message: "Invalid Inputs" }); }

    let isEmailPresent = await User.findOne({ email });

    if (!isEmailPresent) { return res.status(404).json({ message: "Unable to find user from this ID" }); }

    const isPasswordCorrect = bcrypt.compareSync(password, isEmailPresent.password);

    if (!isPasswordCorrect) { return res.status(400).json({ message: "Incorrect Password" }) }

    return res.status(200).json({ message: "Login Successfull", id: isEmailPresent._id });
  }
  catch (err) {
    return res.status(500).json({ message: err.message })
  }
};



// const login = async (req, res, next) => {
//   const { email, password } = req.body;
//   if (!email && email.trim() === "" && !password && password.trim() === "") {
//     return res.status(422).json({ message: "Invalid Inputs" });
//   }
//   let existingUser;
//   try {
//     existingUser = await User.findOne({ email });
//   } catch (err) {
//     return console.log(err);
//   }

//   if (!existingUser) {
//     return res
//       .status(404)
//       .json({ message: "Unable to find user from this ID" });
//   }

//   const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

//   if (!isPasswordCorrect) {
//     return res.status(400).json({ message: "Incorrect Password" });
//   }

//   return res
//     .status(200)
//     .json({ message: "Login Successfull", id: existingUser._id });
// };



const getAllUsers = async (req, res) => {
  try {
    let users = await User.find()
    if (!users) return res.status(404).json({ message: "No user exist" })

    return res.status(200).json({ users })
  }
  catch (err) {
    return res.status(500).json({ message: err.message })
  }
}


// const getAllUsers = async (req, res, next) => {
//   let users;
//   try {
//     users = await User.find();
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!users) {
//     return res.status(500).json({ message: "Unexpected Error Occured" });
//   }
//   return res.status(200).json({ users });
// };


const updateUser = async (req, res) => {
  try {
    let id = req.params.id
    let data = req.body
    let { name, email } = data


    let updatedUser = await User.findOneAndUpdate(id, { $set: { name, email } })
    return res.status(201).json({ message: "User SuccessFully Updated", data: updatedUser })
  }
  catch (err) {
    return res.status(500).json({ message: err.message })
  }
}


// const updateUser = async (req, res, next) => {
//   const id = req.params.id;
//   const { name, email, password } = req.body;
//   if (
//     !name &&
//     name.trim() === "" &&
//     !email &&
//     email.trim() === "" &&
//     !password &&
//     password.trim() === ""
//   ) {
//     return res.status(422).json({ message: "Invalid Inputs" });
//   }
//   const hashedPassword = bcrypt.hashSync(password, 10);

//   let user;
//   try {
//     user = await User.findByIdAndUpdate(id, {
//       name,
//       email,
//       password: hashedPassword,
//     });
//   } catch (errr) {
//     return console.log(errr);
//   }
//   if (!user) {
//     return res.status(500).json({ message: "Something went wrong" });
//   }
//   res.status(200).json({ message: "Updated Sucessfully" });
// };




const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    let user = await User.findByIdAndRemove(id);

    if (!user) return res.status(404).json({ message: "Something went wrong" });
    return res.status(200).json({ message: "Deleted Successfully" });
  }
  catch (err) {
    return res.status(500).json({ message: err.message })
  }
};



// const deleteUser = async (req, res, next) => {
//   const id = req.params.id;
//   let user;
//   try {
//     user = await User.findByIdAndRemove(id);
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!user) {
//     return res.status(500).json({ message: "Something went wrong" });
//   }
//   return res.status(200).json({ message: "Deleted Successfully" });
// };



const getBookingsOfUser = async (req, res) => {
  const id = req.params.id;
  let bookings;
  try {
    bookings = await Bookings.find({ user: id })
      .populate("movie")
      .populate("user");
  } catch (err) {
    return console.log(err);
  }
  if (!bookings) {
    return res.status(500).json({ message: "Unable to get Bookings" });
  }
  return res.status(200).json({ bookings });
};


// const getUserById = async (req, res) => {
//   try {
//     let id = req.params.id
//     let isIdPresent = await User.findById(id)
//     if (!isIdPresent) return res.status(404).json({ message: "Id not exist" })
//     return res.status(200).json({ User: isIdPresent })
//   }
//   catch (err) {
//     return res.status(500).json({ message: err.message })
//   }
// }



const getUserById = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ user });
};


module.exports = { deleteUser, getAllUsers, getBookingsOfUser, getUserById, login, singup, updateUser }