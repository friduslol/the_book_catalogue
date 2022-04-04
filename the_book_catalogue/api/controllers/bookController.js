const Book = require("../models/Book");

const addBook = async (req, res) => {
    try {
        let book = await Book.create(req.body);
        res.status(200).json(book)
    } catch(err) {
        res.status(400).json("Error, something went, wrong!");
        return;
    }
}

module.exports = {
    addBook
}