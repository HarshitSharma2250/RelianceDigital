import React from 'react'
import { useState } from 'react'
import { Loading } from '../../components/loding-error/Loading'
import { ErrerDataa } from '../../components/loding-error/ErrerDataa'
import login from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LoadingData } from '../../redux/Action'
import { ErrorData } from '../../redux/Action'
import { TaskDone } from '../../redux/Action'
import axios from 'axios'
import { useContext } from 'react'
import { Contaxtinfo } from '../../context/Context'

export const Login = () => {

const[text,settext]=useState({email:'',password:''})
const data=useSelector((state)=>state.PinCode)
const Navigate=useNavigate()
const{setlogin}=useContext(Contaxtinfo)


function HandleChange(e){
  settext({
    ...text,
    [e.target.name]:e.target.value
  })
}

async function HandleSubmit(e){
  e.preventDefault()
 LoadingData()
try {
  let res=await axios.post(`https://reqres.in/api/login`,text)
if(res.data.token){
  localStorage.setItem('storedata',JSON.stringify(true))
  setlogin(true)
  Navigate('/RelianceDigital/')
}
 TaskDone()
} catch (error) {
  ErrorData()
}
}

if(data.isloading){
  return <Loading/>
}
if(data.iserror){
  return <ErrerDataa/>
}



  return (
    <>
    
   <section className={login.loginform}>
    <div className={login.loginimg}>
      <img src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg" alt="" />
    </div>
   <form onSubmit={HandleSubmit}>
   <h1>login form </h1>
      <label htmlFor="">Email : </label>
      <input type="email" name='email' value={text.email} onChange={HandleChange} placeholder='enter email' required />
      <br /><br />
      <label htmlFor="">password : </label>
      <input type="password"name='password' value={text.password} onChange={HandleChange}  required minLength={6}/>
      <br /><br />
<input type="submit" className={login.submitform} />
    </form>
   </section>
    </>
  )
}
