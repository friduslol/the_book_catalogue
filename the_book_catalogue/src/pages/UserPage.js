import Styles from "../styles/User.module.css"
import ListCard from "../components/ListCard"
import { useNavigate } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"

const UserPage = () => {
    const {
        logout,
        fetchFaves,
        user,
        faves,
        fetchHaveRead,
        fetchWillRead,
        haveRead,
        willRead,
    } = useContext(UserContext)
    const navigateHook = useNavigate()

    useEffect(() => {
        if(user) {
            fetchFaves(user._id)
            fetchHaveRead(user._id)
            fetchWillRead(user._id)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
       console.log("faves", faves)

    }, [faves])

    const handleLogout = async () => {
        await logout()
		navigateHook('/')
    }

    return(
        <div className={Styles.userContainer}>
            <div className={Styles.sectionWrapper}>
                <div className={Styles.userDataWrapper}>
                    <p className={Styles.userInfo}>Test Testsson</p>
                    <p className={Styles.userInfo}>testtestsson@hotmail.com</p>
                    <button className={Styles.logOutBtn} onClick={handleLogout}>Logout</button>
                </div>

                <button className={Styles.deleteAccBtn}>Delete Account</button>

            </div>

            <div className={Styles.bookListsContainer}>
                <div className={Styles.listTitleWrapper}>
                    <h2 className={Styles.listTitle}>Favourites</h2>
                    <img className={Styles.booksImg} src={process.env.PUBLIC_URL + '/icons8-books-60.png'} alt="stacked books"/>
                </div>
                {faves.length ? <ListCard data={faves[0].books} /> : <></>}
            </div>
            <div className={Styles.bookListsContainer}>
                <div className={Styles.listTitleWrapper}>
                    <h2 className={Styles.listTitle}>Will Read</h2>
                    <img className={Styles.booksImg} src={process.env.PUBLIC_URL + '/icons8-books-60.png'} alt="stacked books"/>
                </div>
                {willRead.length ? <ListCard data={willRead[0].books} /> : <></>}
            </div>
            <div className={Styles.bookListsContainer}>
                <div className={Styles.listTitleWrapper}>
                    <h2 className={Styles.listTitle}>Have Read</h2>
                    <img className={Styles.booksImg} src={process.env.PUBLIC_URL + '/icons8-books-60.png'} alt="stacked books"/>
                </div>
                {haveRead.length ? <ListCard data={haveRead[0].books} /> : <></>}
            </div>
        </div>
    )
}

export default UserPage