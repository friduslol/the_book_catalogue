import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCookie()
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log("logged in user:", user)
    }, [user])

    const getCookie = async () => {
        try {
            let result = await fetch("/api/v1/user/getCookie")
            result = await result.json()
            setUser(result)
            setLoading(false)
            return result
        } catch(err) {
            return err
        }
    }

    const createUser = async (userObj) => {
        try {
            let result = await fetch("/api/v1/user/create", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userObj),
            })
            result = await result.json()
            getCookie()
            return result
        } catch(err) {
            return err
        }
    }

    const logout = async () => {
        try {
            let result = await fetch("/api/v1/user/logout")
            await result.json()
            await getCookie()
            return result
        } catch(err) {
            return err
        }
    }

    const login = async (userObj) => {
        try {
            let result = await fetch("/api/v1/user/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userObj),
            })
            result = await result.json()
            await getCookie()
            return result
        } catch(err) {
            return err
        }
    }

    const addToLibrary = async (optionObj) => {
        try {
            let result = await fetch("/api/v1/user/addToLibrary", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(optionObj),
            })
            result = await result.json()
            return result
        } catch(err) {
            return err
        }
    }

    const values = {
        createUser,
        getCookie,
        user,
        logout,
        login,
        addToLibrary
    }

    return(
        <UserContext.Provider value={values}>
            {!loading && props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider