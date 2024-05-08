import React from 'react'
import { useEffect } from 'react'
import logo from './Logo.module.css'

export const Logo = () => {
    useEffect(() => {
        document.title = 'relianceDigital';
      }, []);
      
  return (
    <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" className={logo.pic}/>
  )
}
