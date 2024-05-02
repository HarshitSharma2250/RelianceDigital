import React, { useContext } from 'react'
import navbarall from './NavBarAllPages.module.css'
import { Link } from 'react-router-dom'
import { LuBus } from "react-icons/lu";
import { Logo } from '../../components/logo/Logo';
import { SearchNavBar } from '../../components/search/SearchNavBar';
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { List } from '../../components/LIst of products/List';
import { PinCodeNavBar } from '../../components/PincodeNavBar/PinCodeNavBar';
import { Contaxtinfo } from '../../context/Context';


export const NavBarAllPages = () => {
  const{islogin,setlogin}=useContext(Contaxtinfo)


  function HandleLogin(){
    localStorage.setItem('storedata',JSON.stringify(false))
    setlogin(false)
    }







  return (
    <>
    <div className={navbarall.NavBarAllPages}>
          <div className={navbarall.HeaderUpper}>

<table className={navbarall.eachLinkitem}>
  <thead>
    <tr>
      <th>Our Brand Promise</th>
      <th><Link to='./easyreturn'>Easy to Return</Link></th>
      <th><LuBus /> Next day delivery</th>
      <th><Link to='./service guarantee'>Qservice Guarantee</Link></th>
      <th><LuBus />Unmatched Network</th>
      <th><Link to='./findstore'>Find the store </Link></th>
      <th><Link to='./contactus'>Contact Us</Link></th>
    </tr>
  </thead>
</table>
<div className={navbarall.loweheader}>
<Link to="/RelianceDigital/">
          <Logo />
        </Link>
        <SearchNavBar />
        <div className={navbarall.cart_login_link}>
        <Link><PinCodeNavBar /> </Link>
        <span> |</span>
          <Link to="/cart">
            <IoMdCart /> Cart
          </Link>{" "}
          <span> | </span>
          <div>
           {
            islogin ?  <p style={{cursor:'pointer'}} onClick={HandleLogin}> log out</p> : <Link to="/login"><FaUser /> log in </Link> 
           }
           </div>
        </div>
</div>

          </div>
    </div>
    <List/>
    </>
  )
}
