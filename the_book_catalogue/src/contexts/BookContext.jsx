import { createContext, useState, useEffect } from "react"

export const BookContext = createContext()

const BookContextProvider = (props) => {

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
        console.log("isbn in context", ISBN)
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



    const values = {
        addBook,
        removeBook
    }

    return(
        <BookContext.Provider value={values}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider