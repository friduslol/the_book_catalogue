import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const RequireUserAcc = (props) => {
    const { user } = useContext(UserContext)

    useEffect(() => {
        console.log("user in require", user)
    }, [user])

    useEffect(() => {
        console.log("children", props.children)
        console.log("redirect", props.redirectTo)
    }, [])

	return (
		user && user
			? props.children
			: <Navigate to={props.redirectTo} />
	)
}

export default RequireUserAcc
