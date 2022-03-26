import Styles from "../styles/ListCard.module.css"
import {useEffect} from "react"

const ListCard = (props) => {

    useEffect(() => {
           console.log("listItem", props);
    }, [])

    return(
        <div className={Styles.cardContainer}>
            <div className={Styles.listTitleWrapper}>
                <h2 className={Styles.listTitle}>{props.listItem.list}</h2>
                <img className={Styles.booksImg} src={process.env.PUBLIC_URL + '/icons8-books-60.png'} alt="stacked books"/>
            </div>
            {props.listItem.books.map((book, i) => (
                <div className={Styles.bookWrapper} key={i}>
                    <p className={Styles.bookTitle}>{book.Title}</p>
                    <img className={Styles.removeBtn} src={process.env.PUBLIC_URL + '/icons8-remove-64.png'} alt="remove"/>
                </div>
            ))}
        </div>
    )
}

export default ListCard;