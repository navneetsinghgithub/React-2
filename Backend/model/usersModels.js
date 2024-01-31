const mongoose = require("mongoose")
const usersSchema = new mongoose.Schema({
    name:
        { type: String },
    lastname:
        { type: String },
    email:
        { type: String },
    password:
        { type: String },
    contact:
        { type: Number },
    image:
        { type: String },
}, { timestamps: true })

const users = mongoose.model("users", usersSchema)
module.exports = users;