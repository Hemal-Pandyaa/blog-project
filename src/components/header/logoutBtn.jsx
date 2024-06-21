import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn({
  type = "button",
  className = "",
  children = "Logout",
  padding = "5px 30px",
  fontSize = 20,
  bgColor = "#A9A9A9",
  borderColor = "black",
}) {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
            type={type}
            className={`button ${className}`}
            style={{ padding, backgroundColor: bgColor, fontSize, borderColor }}
            onClick={logoutHandler}
        >
            {children}
        </button>
  )
}

export default LogoutBtn