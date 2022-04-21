import React from 'react'
import Styles from "../styles/Start.module.css"

const BookCard = () => {
    return (
        <div>
            <img className={Styles.bookImg} src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449878132-9781781100264.jpg" alt="bookcover"/>
        </div>
    )
}
export default BookCard