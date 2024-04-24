import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Contaxtinfo=createContext()

export const Context = ({children}) => {
  const storedToken = JSON.parse(localStorage.getItem('storedata'));
const[islogin,setlogin]=useState(storedToken||false)

  return (
   <Contaxtinfo.Provider value={{islogin,setlogin}}>
    {children}
   </Contaxtinfo.Provider>
  )
}
