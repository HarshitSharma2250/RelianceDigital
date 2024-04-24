import React from 'react'
import styles from './PinCodeNavBar.module.css'
import { useState } from 'react'
import { DeleveryPinCodeNavBar } from '../delevaryLocationnavbar/DeleveryPinCodeNavBar'
import { useSelector } from 'react-redux'

export const PinCodeNavBar = () => {
    const[toggle,setToggle]=useState(false)
    const data=useSelector((state)=>state.PinCode)
   
  return (
    <div className={styles.pincodenavbar}>
       <p onClick={()=>setToggle(true)}>{data.pincode.length>0 ? <><span>{data.pincode[0].address.state }</span>-<span>{data.pincode[0].address.postcode }</span></> : 'select your pincode'}</p> 
      

       {toggle && <>
          <div className={styles.overlay}></div>
          <div className={styles.modal}>
            <DeleveryPinCodeNavBar setToggle={setToggle} />
          </div>
          </>
      }

    </div>
  )
}
