import Styles from "../styles/SignIn.module.css"

const SignIn = () => {
    return(
        <div className={Styles.signInContainer}>
            <form className={Styles.formWrapper}>
                <h1 className={Styles.formHeader} >Sign In</h1>
                <input className={Styles.input} type="email" placeholder="Email" />
                <input className={Styles.input} type="password" placeholder="Password"/>
                <button className={Styles.signInBtn}>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;