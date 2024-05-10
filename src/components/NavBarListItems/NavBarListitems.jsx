import React from 'react'
import navbarlistitems from './NavBarListitems.module.css'
import { FaMobile } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PiTelevisionSimpleThin } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { TbToolsKitchen } from "react-icons/tb";
import { IoMdCart } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineExclamation } from "react-icons/ai";

export const NavBarListitems = () => {
  return (
    <>
    <div className={navbarlistitems.accordion_tab}>
    <div className={navbarlistitems.categories}>categories</div>
<input type="checkbox" id='checkeditem' className={navbarlistitems.checkeditem} />
<label htmlFor='checkeditem' className={navbarlistitems.headingitem}>
    <p><FaMobile /> mobile & tablets</p>
<p className={navbarlistitems.iconrotate}><FaChevronDown /></p>
    </label>
<ul className={navbarlistitems.sublistitems}>
<li className={navbarlistitems.directchildlist}><Link to={`/RelianceDigital/smartphones`}>smart phones</Link></li>
<li >
<Link className={navbarlistitems.directchildlist} to={`/#`}>smart watches</Link> 
 <ul className={navbarlistitems.subchildul}>
    <li>
   <Link to={`/RelianceDigital/commonbestdeals/applewatch`}>Apple</Link>  
    </li>
    <li>
<Link to={`/#`}>Samsung</Link>
    </li>
    <li>
<Link to={`/#`}>Fireboltt</Link>
    </li>
    <li>
<Link to={`/#`}>Noise</Link>
    </li>
    <li>
<Link to={`/#`}>Boat</Link>
    </li>
 </ul>
</li>

<li>
 <Link className={navbarlistitems.directchildlist} to={`/#`}>Accessories </Link> 
 <ul className={navbarlistitems.sublistitems}>
    <li>
<Link to={`/#`}>Tablet Accessories</Link>
    </li>
    <li>
<Link to={`/#`}>Mobile Accessories</Link>
    </li>
    <li>
<Link to={`/#`}>mobile grip and stands</Link>
    </li>
    <li>
<Link to={`/#`}>car mobile holders</Link>
    </li>
    <li>
<Link  to={`/RelianceDigital/commonbestdeals/storage`}> memory cards</Link>
    </li>
 </ul>
  
</li>

<li className={navbarlistitems.directchildlist}>
<Link to={`/#`}>Headphones & Headsets</Link>
</li>
<li className={navbarlistitems.directchildlist}>
<Link to={`/#`}>Power & banks</Link>    
</li>
</ul>
    </div>

    <div className={navbarlistitems.accordion_tab}>
<input type="checkbox" id='checkeditem2' className={navbarlistitems.checkeditem} />
<label htmlFor='checkeditem2' className={navbarlistitems.headingitem}>
    <p><PiTelevisionSimpleThin /> television</p>
<p className={navbarlistitems.iconrotate}><FaChevronDown /></p>
    </label>
<ul className={navbarlistitems.sublistitems}>
<li>
<Link className={navbarlistitems.directchildlist} to={`/RelianceDigital/commonbestdeals/bigscreentv`}>
    Television</Link>
<ul  className={navbarlistitems.subchildul}>
    <li>
<Link to={`/#`}>smart TV's</Link>
    </li>
    <li>
<Link to={`/#`}>32 inch TV's</Link>
    </li>
    <li>
<Link to={`/#`}>43 inch TV's</Link>
    </li>
</ul>
</li>
</ul>
</div>


<div className={navbarlistitems.accordion_tab}>
<input type="checkbox" id='checkeditem3' className={navbarlistitems.checkeditem} />
<label htmlFor='checkeditem3' className={navbarlistitems.headingitem}>
    <p><FaHeadphones /> Audio</p>
<p className={navbarlistitems.iconrotate}><FaChevronDown /></p>
    </label>
<ul className={navbarlistitems.sublistitems}>
<li  className={navbarlistitems.directchildlist}>
<Link  to={`/RelianceDigital/commonbestdeals/appleaudoaccessories`}>headphones & headsets</Link>
</li>
<li  className={navbarlistitems.directchildlist}>
<Link to={`/RelianceDigital/commonbestdeals/boatsounders`}>speakers & soundbars</Link>
</li>
</ul>
</div>


<div className={navbarlistitems.accordion_tab}>
<input type="checkbox" id='checkeditem4' className={navbarlistitems.checkeditem} />
<label htmlFor='checkeditem4' className={navbarlistitems.headingitem}>
    <p><FaPlug /> home appliances</p>
<p className={navbarlistitems.iconrotate}><FaChevronDown /></p>
    </label>
<ul className={navbarlistitems.sublistitems}>
<li  className={navbarlistitems.directchildlist}>
    <Link to="/RelianceDigital/commonbestdeals/airconditioners">Air Conditiors</Link>
</li>
<li  className={navbarlistitems.directchildlist}>
    <Link  to="/RelianceDigital/commonbestdeals/aircoolar">Air Coolers</Link>
</li>
<li  className={navbarlistitems.directchildlist}>
    <Link to={`/RelianceDigital/commonbestdeals/refrigerators`}>refrigerators</Link>
</li>
</ul>
</div>


<div className={navbarlistitems.accordion_tab}>
<input type="checkbox" id='checkeditem5' className={navbarlistitems.checkeditem} />
<label htmlFor='checkeditem5' className={navbarlistitems.headingitem}>
    <p><TbToolsKitchen /> litchen appliances</p>
<p className={navbarlistitems.iconrotate}><FaChevronDown /></p>
    </label>
<ul className={navbarlistitems.sublistitems}>
<li  className={navbarlistitems.directchildlist}>
<Link to={`/RelianceDigital/commonbestdeals/homeandkitchen`}>kitchen appliances</Link>
</li>
</ul>
</div>

<div className={navbarlistitems.accordion_tab}>
    <div className={navbarlistitems.categories}>help section</div>

<p className={navbarlistitems.helpitem}>
<label htmlFor='checkeditem' className={navbarlistitems.headingitem}>
    <Link to="/RelianceDigital/findstore"> <CiLocationOn /> Find a store </Link> 
    </label>
    <label htmlFor='checkeditem' className={navbarlistitems.headingitem}>
    <Link to="/RelianceDigital/buyingguides"><AiOutlineExclamation /> buying guides</Link>
    </label>
    <label htmlFor='checkeditem' className={navbarlistitems.headingitem}>
    <Link to="/RelianceDigital/contactus"><FaPhone /> contact us</Link>     
    </label>
    <label htmlFor='checkeditem' className={navbarlistitems.headingitem}>
    <Link to="/RelianceDigital/cart">  <IoMdCart /> Cart</Link> 
    </label>
</p>


    
 


</div>
    </>
  )
}
