import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Contaxtinfo } from '../context/Context'

export const PrivateRoute = ({children}) => {
const{islogin}=useContext(Contaxtinfo) 
console.log(islogin);
  return (
    islogin ? children : <Navigate to='/RelianceDigital/login'/>
  )
}
