const mongoose = require("mongoose");

const BookSchema = new Schema(
    {
        bookid: String,
        title: String,
        description: String,
        author: String,
        isbn: String,
        publicationYear: Number,
        pages: Number,
        category: String,
        rating: Number,
        coverImg: String
    }
);

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;