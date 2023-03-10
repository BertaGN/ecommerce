import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../Context/UserContext/UserContext'

export const ProtectedRoute = ({children}) => {
    const {isLogged} = useContext(UserContext)
     if (!isLogged){
      return <Navigate to="/login" replace={true}/>
     }else {
        return children
     }
  
}
