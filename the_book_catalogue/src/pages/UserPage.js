import Styles from "../styles/User.module.css"
import ListCard from "../components/ListCard";

const UserPage = () => {
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