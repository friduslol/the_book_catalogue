import Styles from "../styles/Book.module.css"
import React, { useState, useEffect, useContext } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useParams } from "react-router-dom"
import { BookContext } from "../contexts/BookContext"

const Book = (props) => {
    const { getBookById, book, addRating } = useContext(BookContext)
    const [rating, setRating] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        getBookById(id)
    }, [])

    useEffect(() => {
        console.log("book", book)
    }, [book])


     //Catch Rating value
    const handleRating = async (newRating) => {

        let ratingObj = {
            rating: newRating,
            id: book._id
        }
        let addRatingResult = await addRating(ratingObj)
        console.log("Rating result", addRatingResult)
    }

    return(
        <div>
            {book ? <div className={Styles.bookContainer}>
                        <div className={Styles.bookCoverWrapper}>
                            <img className={Styles.bookImg} src={book.coverImg} alt="book cover"/>
                        </div>
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.InfoWrapper}>
                                <h1 className={Styles.heading}>{book.title}</h1>
                                <span className={Styles.text}>Year of puplication: {book.publicationYear}</span>
                                <span className={Styles.text}>Author: {book.author}</span>
                                <div className={Styles.ratingWrapper}>
                                    <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
                                    {rating > 0 ?
                                     (<p>Your rating is {rating} aout off 100%</p>)
                                    : <></>}
                                </div>
                            </div>
                            <div className={Styles.aboutWrapper}>
                                <h2 className={Styles.smallHeading}>About the book</h2>
                                <p className={Styles.aboutText}>{book.description}</p>
                            </div>
                            <div className={Styles.detailsWrapper}>
                                <h2 className={Styles.smallHeading}>List of details</h2>
                                <span className={Styles.text}>Author: {book.author}</span>
                                <span className={Styles.text}>ISBN: {book.isbn}</span>
                                <span className={Styles.text}>Year of publication: {book.publicationYear}</span>
                                <span className={Styles.text}>Pages: {book.pages}</span>
                                <span className={Styles.text}>Category: {book.category}</span>
                            </div>
                        </div>
                    </div>
            : <></>}
        </div>
    )
}

export default Book;