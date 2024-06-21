import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authenticationRequired = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand
        
        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authenticationRequired && authStatus !== authenticationRequired){
            navigate("/login")
        } else if(!authenticationRequired && authStatus !== authenticationRequired){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authenticationRequired])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
