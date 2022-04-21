import Styles from "../styles/Start.module.css"
import { useState, useEffect, useRef, useContext } from "react"
import {  BookContext } from "../contexts/BookContext"

const StartPage = () => {
    const { getAllBooks, books } = useContext(BookContext)

    useEffect(() => {
        getAllBooks()

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log("books", books)
    }, [books])

    return(
        <div className={Styles.startContainer}>
            <div className={Styles.heroWrapper}>
                <div className={Styles.inputWrapper}>
                    <form className={Styles.searchForm}>
                        <input className={Styles.input} type="text" value="Book, Year, Author..."/>
                        <img className={Styles.searchBtn} src={process.env.PUBLIC_URL + '/icons8-magnifying-glass-64.png'} alt="search"/>
                    </form>
                </div>
            </div>
            <h1 className={Styles.header}>In the spotlight right now...</h1>

            <div className={Styles.booksContainer}>

                    <img className={Styles.bookImg} src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449878132-9781781100264.jpg" alt="bookcover"/>


                    <img className={Styles.bookImg} src="https://anylang.net/sites/default/files/covers/harry-potter-and-order-phoenix.jpg" alt="bookcover"/>

                    <img className={Styles.bookImg} src="https://external-preview.redd.it/BDZ6JTzWKRJne-Wx_fc4EXGK2fTririg82LMajaFUEE.jpg?auto=webp&s=52c3658f85a4d7edf0ba3b3b48dd63d96fad20df" alt="bookcover"/>

                    <img className={Styles.bookImg} src="https://anylang.net/sites/default/files/covers/harry-potter-and-order-phoenix.jpg" alt="bookcover"/>

                    <img className={Styles.bookImg} src="https://www.glorify.com/wp-content/uploads/2020/12/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg" alt="bookcover"/>

                    <img className={Styles.bookImg} src="https://anylang.net/sites/default/files/covers/harry-potter-and-order-phoenix.jpg" alt="bookcover"/>

                    <img className={Styles.bookImg} src="https://i.pinimg.com/236x/40/c6/c0/40c6c08c356ccab3d429e704b27511a4--the-keys-fantasy.jpg" alt="bookcover"/>

                    <img className={Styles.bookImg} src="https://anylang.net/sites/default/files/covers/harry-potter-and-order-phoenix.jpg" alt="bookcover"/>

                    <img className={Styles.bookImg} src="https://anylang.net/sites/default/files/covers/harry-potter-and-order-phoenix.jpg" alt="bookcover"/>
            </div>
        </div>
    )
}
export default StartPage;
