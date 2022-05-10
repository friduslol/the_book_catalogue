import Styles from "../styles/ListCard.module.css"
import { useNavigate } from "react-router-dom"

const ListCard = (props) => {
    const navigateHook = useNavigate()

    const handleClick = (id) => {
        navigateHook(`/book/${id}`)
    }
    return(
        <div className={Styles.cardContainer}>
            {props.data.map((book, i) => (
                <div className={Styles.bookWrapper} key={i}>
                    <p className={Styles.bookTitle} onClick={() => handleClick(book._id)}>{book.title}</p>
                    <img className={Styles.removeBtn} src={process.env.PUBLIC_URL + '/icons8-remove-64.png'} alt="remove"/>
                </div>
            ))}
        </div>
    )
}

export default ListCard;