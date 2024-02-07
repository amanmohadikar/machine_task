
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminName: {type: String, required: true},
    email: {type: String, required: true}
}, {new : true})

const adminModel = mongoose.model('machinetestAdmins', adminSchema);

export default adminModel;
// module.exports = adminModel;