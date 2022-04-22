const Book = require("../models/Book");

const addBook = async (req, res) => {
    try {
        let book = await Book.create(req.body);
        res.status(200).json({  success: "Book added!", book })
        return
    } catch(err) {
        res.status(400).json({ error: err })
        return
    }
}

const removeBook = async (req, res) => {
    try {
        let book = await Book.findOneAndDelete(req.params.isbn).exec()
        res.status(200).json({ success: `The Book ${book.title} with isbn ${book.isbn} was removed!`})
        return
    } catch(err) {
        res.status(400).json({ error: err })
        return
    }
}

const getAllBooks = async (req, res) => {
    try {
        let books = await Book.find().exec()
        if (books.length === 0) {
            res.json({ error: "No books found!" })
            return
        }
        res.status(200).json(books)
        return
    } catch(err) {
        res.status(400).json({ error: err })
        return
    }
}

const getBookById = async (req, res) => {
    try {
        Book.findById(req.params.bookId).exec((err, book) => {
            if(err) {
                res.status(404).json({ error: err })
                return
            }
            res.status(200).json(book)
            return
        })
    } catch(err) {
        res.status(400).json({ error: err })
        return
    }
}

module.exports = {
    addBook,
    removeBook,
    getAllBooks,
    getBookById
}