import Styles from "../styles/Book.module.css"
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Book = () => {
    const [rating, setRating] = useState(0)
     // Catch Rating value
//   const handleRating = (rate: rating) => {
//     setRating(rate)
//     // other logic
//   }
    return(
        <div className={Styles.bookContainer}>
            <div className={Styles.bookCoverWrapper}>
                <img className={Styles.bookImg} src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449878132-9781781100264.jpg" alt="bookcover"/>
            </div>
            <div className={Styles.contentWrapper}>
                <div className={Styles.InfoWrapper}>
                    <h1 className={Styles.heading}>Book Title</h1>
                    <span className={Styles.text}>Year of puplication</span>
                    <span className={Styles.text}>Author: Name</span>
                    <div className={Styles.ratingWrapper}>
                        <Rating ratingValue={rating} /* Available Props */ />
                    </div>
                </div>
                <div className={Styles.aboutWrapper}>
                    <h2 className={Styles.smallHeading}>About the book</h2>
                    <p className={Styles.aboutText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className={Styles.detailsWrapper}>
                    <h2 className={Styles.smallHeading}>List of details</h2>
                    <span className={Styles.text}>Author: Name</span>
                    <span className={Styles.text}>ISBN: 12345678</span>
                    <span className={Styles.text}>Year of publication: 2020-02-02</span>
                    <span className={Styles.text}>Pages: 600</span>
                    <span className={Styles.text}>Category: Fantasy</span>
                </div>
            </div>
        </div>
    )
}

export default Book;