import Styles from "../styles/User.module.css"
import ListCard from "../components/ListCard"
import { useNavigate } from "react-router-dom"
import React, { useRef, useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const UserPage = () => {
    const { logout } = useContext(UserContext)
    const navigateHook = useNavigate()

    const handleLogout = async () => {
        await logout()
		navigateHook('/')
    }

    const arr = [
        {
            "list": "Favourites",
            "books": [
                {"Title": "Harry Potter prisoner of Azkaban"},
                {"Title": "Harry Potter prisoner of Azkaban"},
                {"Title": "Harry Potter prisoner of Azkaban"},
            ]
        },
        {
            "list": "Will Read",
            "books": [
                {"Title": "Harry Potter prisoner of Azkaban"},
                {"Title": "Harry Potter prisoner of Azkaban"},
                {"Title": "Harry Potter prisoner of Azkaban"},
            ]
        },
        {
            "list": "Have Read",
            "books": [
                {"Title": "Harry Potter prisoner of Azkaban"},
                {"Title": "Harry Potter prisoner of Azkaban"},
                {"Title": "Harry Potter prisoner of Azkaban"},
            ]
        },
    ]


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
                {arr.map((listItem, i) => (
                    <ListCard listItem={listItem} key={i} />
                ))}

            </div>
        </div>
    )
}

export default UserPage;