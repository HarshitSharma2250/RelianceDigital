import React from 'react'
import styles from './NavBarLocation.module.css'
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GettingPinCode } from '../../redux/Action';

export const DeleveryPinCodeNavBar = ({setToggle}) => {

  const [legendValue, setLegendValue] = useState('');
  const[text,settext]=useState(0)
const dispatch=useDispatch()

  const handleInputFocus = (e) => {
    setLegendValue('Enter Delivery Pincode');
    e.target.placeholder = ''
  };
const handleInputBlur=(e)=>{
  setLegendValue('')
  e.target.placeholder = 'Enter Delivery Pincode'
}

  function HandleCick(){
    setToggle(false)
  }
function HandleText(e){
  settext(e.target.value)
}
function HandleSearchLocation(){
  dispatch(GettingPinCode(text))
  setToggle(false)
}

  return (
    <>
<div className={styles.emptybox}></div>
   
        <div className={styles.content}>
          <p>choose your delivery location</p>
          <RxCross2  onClick={HandleCick} className={styles.cross}/>
        </div>

 <div className={styles.fieldset}>      
 <fieldset>
      <legend >{legendValue}</legend>
      <input
        type="number"
        placeholder="Enter Delivery Pincode"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={text}
        onChange={HandleText}
      />
    </fieldset>
      <button onClick={HandleSearchLocation} className={styles.pincodebutton}>Apply</button>
 </div>
      
    </>
  )
}
