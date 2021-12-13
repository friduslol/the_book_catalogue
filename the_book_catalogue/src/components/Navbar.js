import { Link } from "react-router-dom";
import Styles from "../styles/Navbar.module.css"


const Navbar = () => {

    return(
        <div className={Styles.navbarContainer}>
            <div className={Styles.logoWrapper}>
                <img className={Styles.img} src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
            </div>
            <div className={Styles.linksWrapper}>
                <Link className={Styles.navLink} to="signIn">Sign in</Link>
                <Link className={Styles.navLink} to="createAccount">Create Account</Link>
            </div>
        </div>
    )
}
export default Navbar;