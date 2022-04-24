import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState()


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
            return result

        } catch(err) {
            return err
        }
    }

    const values = {
        createUser
    }

    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider