import { UserContext } from "../contexts/UserContext"
import React, { useRef, useState, useContext } from "react"
import Styles from "../styles/CreateAcc.module.css"
import { useNavigate } from 'react-router-dom'

const CreateAcc = () => {
    const { createUser } = useContext(UserContext)
    const navigateHook = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const userNameRef = useRef()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(passwordConfirmRef.current.value !==  passwordRef.current.value) {
            return setError("The password doesen't match!")
        }

        setError(null)

        let userObj = {
            email: passwordRef.current.value,
            userName: userNameRef.current.value,
            password: passwordRef.current.value
        }

        setLoading(true)
        let createUserResult = await createUser(userObj)

        if(createUserResult.error) {
            setError(createUserResult.error)
            setLoading(false)
            return
        }

        if(createUserResult.success) {
            setLoading(false)
            setError(null)
            navigateHook(`/book/${createUserResult._id}`)
            return
        }
    }

    return(
        <div className={Styles.createAccContainer}>
            <form className={Styles.formWrapper} onSubmit={handleSubmit}>
                <h1 className={Styles.formHeader}>Create Account</h1>
                <input className={Styles.input} type="email" placeholder="Email" ref={emailRef} required/>
                <input className={Styles.input} type="username" placeholder="Username" ref={userNameRef} required/>
                <input className={Styles.input} type="password" placeholder="Password" ref={passwordRef} required/>
                <input className={Styles.input} type="password" placeholder="Confirm password" ref={passwordConfirmRef} required/>
                {error && <p>{error}</p>}
                <button disabled={loading} type="submit" className={Styles.createBtn}>Create</button>
            </form>
        </div>
    )
}

export default CreateAcc;