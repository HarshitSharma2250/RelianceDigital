import React from 'react'
import footer from './Footer.module.css'
import { Link } from 'react-router-dom'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={footer.continer}>
       <div className={footer.topcontainer}>
       <section className={footer.linksection}>
<div className={footer.box}>
    <h2>product categories</h2>
    <nav>
        <Link to='/#'>smart phones</Link>
        <Link to='/#'>laptops</Link>
        <Link to='/#'>DSLR cameras</Link>
        <Link to='/#'>television</Link>
        <Link to='/commonbestdeals/airconditioners'>Air conditioners</Link>
        <Link to='/commonbestdeals/refrigerators'>refrigerators</Link>
        <Link to='/commonbestdeals/homeandkitchen'>kitchen appliences</Link>
        <Link to='/commonbestdeals/audio accessories'> accessories</Link>
        <Link to='/#'> presonal care and grooming</Link>
    </nav>
</div>
<div className={footer.box}>
    <h2>site info</h2>
    <nav>
      <Link to={`/#`}>about reliancedigital</Link>
      <Link to={`/#`}>resQ services</Link>
      <Link to={`/#`}>site map </Link>
      <Link to={`/#`}>giftcard </Link>
      <Link to={`/#`}>corporate enquires </Link>
      <Link to={`/#`}>contact us </Link>
    </nav>
</div>
<div className={footer.box}>
    <h2>resorce center</h2>
    <nav>
      <Link to={`/#`}>product reviews</Link>
      <Link to={`/#`}>buying guides</Link>
      <Link to={`/#`}>hoe Tos </Link>
      <Link to={`/#`}>features stories</Link>
      <Link to={`/#`}>evets and happenings</Link>
      <Link to={`/#`}>nearest store</Link>
    </nav>
</div>
<div className={footer.box}>
    <h2>polices</h2>
    <nav>
      <Link to={`/#`}>terms of use</Link>
      <Link to={`/#`}>FAQs</Link>
      <Link to={`/#`}>cencelation and return policy</Link>
      <Link to={`/#`}>pricing and payments policy</Link>
      <Link to={`/#`}>shiping and delivery policy</Link>
      <Link to={`/#`}>E waste recycling policy</Link>
      <Link to={`/#`}>EmI and additional cashbak T&C</Link>
      <Link to={`/#`}>relience one loyality programm T&C</Link>
      <Link to={`/#`}>coution notice</Link>
      
    </nav>
</div>
        </section>
        <section className={footer.mediasection}>
        <div>
            <h2>FOLLOW US</h2>
            <Link  to="http://www.facebook.com/pages/Reliance-Digital/123437217685421" href="" ><IoLogoFacebook /></Link>
            <Link to="http://www.twitter.com/reliancedigital" href="" ><FaTwitter /></Link>
            <Link to="https://www.youtube.com/reliancedigital" href="" ><FaYoutube /></Link>
            </div>  
            <div>
                <h2>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h2>
                <Link  to="https://play.google.com/store/apps/details?id=in.digital.reliance" href="" ><img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="" /></Link>
                <Link  to="https://apps.apple.com/in/app/reliance-digital-shopping-app/id1513379107" href="" ><img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" /></Link>
                </div>  
        </section>
        </div>
        <section className={footer.disclaimer}>
<h3>disclaimer</h3>
<p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
<div></div>
<p> © 2024 Reliance Digital. All Rights Reserved.</p>
        </section>
       
    </div>
  )
}
