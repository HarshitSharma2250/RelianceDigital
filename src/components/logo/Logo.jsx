import React from 'react'
import { useEffect } from 'react'

export const Logo = () => {
    useEffect(() => {
        document.title = 'relianceDigital';
      }, []);
      
  return (
    <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" />
  )
}
