import React, { useContext } from "react";
import { Link } from "react-router-dom";
import navbarmain from "./NavBar.module.css";
import { Logo } from "../components/logo/Logo";
import { SearchNavBar } from "../components/search/SearchNavBar";
import { PinCodeNavBar } from "../components/PincodeNavBar/PinCodeNavBar";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Contaxtinfo } from "../context/Context";
import { List } from "../components/LIst of products/List";
import { FaBars } from "react-icons/fa";
import { NavBarListitems } from "../components/NavBarListItems/NavBarListitems";


export const NavBar = () => {
const{islogin,setlogin}=useContext(Contaxtinfo)

function HandleLogin(){
localStorage.setItem('storedata',JSON.stringify(false))
setlogin(false)
}

  return (
    <>
    <div className={navbarmain.NavBar}>
      <div className={navbarmain.HeaderUpper}>
        <div>
          <Link to="/findstore">Find a store </Link> |
          <Link to="/buyingguides">buying guides</Link> |
          <Link to="/contactus">contact us</Link>
        </div>
      </div>
      <div className={navbarmain.loweheader}>
        <Link to="/">
          <Logo />
        </Link>
      <SearchNavBar />
        <div className={navbarmain.cart_login_link}>
          <PinCodeNavBar />  |
          <Link to="/cart">
            <IoMdCart /> Cart
          </Link>{" "}
           | 
           <div>
           {
            islogin ?  <p style={{cursor:'pointer'}} onClick={HandleLogin}> log out</p> : <Link to="/login"><FaUser /> log in </Link> 
           }
           </div>
        </div>
      </div>

      {/* when toogle bar will open   */}

  <div className={navbarmain.naviconContainer}>
<section className={navbarmain.firstsection}>
   {/* navbar------------------------------------------ */}
  <div className={navbarmain.minifirstdev}>
  <nav className={navbarmain.NavBarlist}>
      <input type="checkbox" id="check" className={navbarmain.check} />
      <label htmlFor="check" className={navbarmain.checkbtn}>
      <FaBars />
      </label>
<div className={navbarmain.allcontentNavBar}>
<div className={navbarmain.loginlink}>
           {
            islogin ?  <p style={{cursor:'pointer'}} onClick={HandleLogin}> log out</p> : <Link to="/login"><FaUser /> log in </Link> 
           }
    </div>
  
 <div className={navbarmain.listItems}>
<NavBarListitems/>
 </div>
</div>


      </nav>

      <Link to="/">
          <Logo />
        </Link>
  </div>

<Link to="/cart">
            <IoMdCart /> Cart
          </Link>
</section>

    <section>
    <SearchNavBar /> 
    </section>
         </div>
    </div>
    <List/>
    </>
  );
};
