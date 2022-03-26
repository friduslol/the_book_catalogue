import Styles from "../styles/CreateAcc.module.css"

const CreateAcc = () => {
    return(
        <div className={Styles.createAccContainer}>
            <form className={Styles.formWrapper}>
                <h1 className={Styles.formHeader}>Create Account</h1>
                <input className={Styles.input} type="email" placeholder="Email" />
                <input className={Styles.input} type="username" placeholder="Username" />
                <input className={Styles.input} type="password" placeholder="Password"/>
                <button className={Styles.createBtn}>Create</button>
            </form>
        </div>
    )
}

export default CreateAcc;