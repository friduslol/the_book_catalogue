const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
       email: String,
       userName: String,
       password: String,
       favourites: [{ type: Schema.Types.ObjectId, ref: "Book" }],
       WillRead: [{ type: Schema.Types.ObjectId, ref: "Book" }],
       HaveRead: [{ type: Schema.Types.ObjectId, ref: "Book" }]
    }
);

const User = mongoose.model("User", UserSchema)
module.exports = User