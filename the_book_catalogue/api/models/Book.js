const mongoose = require("mongoose");
const Schema = mongoose.Schema

const BookSchema = new Schema(
    {
        title: String,
        description: String,
        author: String,
        isbn: String,
        publicationYear: String,
        pages: Number,
        category: String,
        rating: String,
        coverImg: String,
    }
);

const Book = mongoose.model("Book", BookSchema)
module.exports = Book