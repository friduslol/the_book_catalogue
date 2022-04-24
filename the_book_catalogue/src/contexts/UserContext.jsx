import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState()

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

    const values = {
        createUser,
        getCookie
    }

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider