const Book = require("../models/Book");
const { param } = require("../routes/userRoutes");

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

const inputSearch = async (req, res) => {
    try {

        let searchString =  new RegExp(`${req.body.search}`, 'gi')
        console.log("search string in controller", searchString)

        let result = await Book.find({$or:
            [
                { "title": {$in: searchString} },
                { "author": {$in: searchString} },
                { "publicationYear": {$in: searchString} },
            ]
        }).exec()
        console.log("res", result)
        res.status(200).json(result)
        return

    } catch(err) {
        res.status(400).json({ error: err })
        return
    }
}

const addRating = async (req, res) => {
    try {
        let exists = await Book.exists({ _id: req.body.id })
        if(exists) {
          Book.updateOne(
              { _id: req.body.id },
              { rating: req.body.rating }
          ).exec()
        }
        res.status(200).json({ success: "Rating updated!" })
        return
    } catch(err) {
        res.status(400).json({ error: err })
        return
    }
}

module.exports = {
    addBook,
    removeBook,
    getAllBooks,
    getBookById,
    inputSearch,
    addRating
}