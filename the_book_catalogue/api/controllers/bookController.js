const Book = require("../models/Book");

const addBook = async (req, res) => {
    try {
        let book = await Book.create(req.body);
        res.status(200).json({  success: "Book added!", book })
        return
    } catch(err) {
        res.status(400).json({ error: err });
        return;
    }
}

module.exports = {
    addBook
}