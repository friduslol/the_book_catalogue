import React from 'react'
import Styles from "../styles/Start.module.css"

const BookCard = (props) => {
    return (
        <div>
            <img className={Styles.bookImg} src={props.data.coverImg} alt="bookcover"/>
        </div>
    )
}
export default BookCard