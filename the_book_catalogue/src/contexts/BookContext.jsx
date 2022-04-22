import { createContext, useState, useEffect } from "react"

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(null);

    const addBook = async (bookObj) => {
        try {
            let result = await fetch("/api/v1/books", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(bookObj),
            })
            result = await result.json()
            return result
        } catch(err) {
            return err
        }
    }

    const removeBook = async (ISBN) => {
        try {
            let result = await fetch(`/api/v1/books/delete/${ISBN}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                }})
            result = await result.json()
            return result
        } catch(err) {
            return err
        }
    }

    const getAllBooks = async () => {
        try {
            let result = await fetch("/api/v1/books")
            result = await result.json()
            if(result.length === 0) {
                console.log("No books in database!")
            }
            setBooks(result)
        } catch(err) {
            return err
        }
    }

    const getBookById = async (bookId) => {
        try {
            let result = await fetch(`/api/v1/books/${bookId}`)
            result = await result.json()
            setBook(result)
        } catch(err) {
            return err
        }
    }

    const values = {
        addBook,
        removeBook,
        getAllBooks,
        books,
        getBookById,
        book,
    }

    return(
        <BookContext.Provider value={values}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider