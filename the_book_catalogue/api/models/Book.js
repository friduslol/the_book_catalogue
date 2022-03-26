const mongoose = require("mongoose");

const BookSchema = new Schema(
    {
        bookid: {},
        title: {},
        description: {},
        author: {},
        isbn: {},
        publicationYear: {},
        pages: {},
        category: {},
        rating: {},
    }
);

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;