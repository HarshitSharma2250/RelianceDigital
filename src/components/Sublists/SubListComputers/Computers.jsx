import React from 'react'
import laptopsset from './Computersset.module.css'
import { Link } from 'react-router-dom'

export const Computers = () => {
  return (
    <div className={laptopsset.container}>
    
    <ul >
      <li>
      <Link className={laptopsset.directhead} to={`/#`}>Laptops</Link>
      <ul>
        <li>
<Link  >Basic use laptops</Link>   
        </li>
<li>
<Link>Student Laptops</Link>
</li>
<li>                                                   
<Link>Thin and light Laptops</Link>
</li>
<li>
<Link>Multi-Tasking Laptops</Link>
</li>
      </ul>
      </li>
      <li>
    <Link className={laptopsset.directhead} to="/RelianceDigital/commonbestdeals/aircoolar">Computer Monitors</Link>
  </li>
      <li>
        <Link className={laptopsset.directhead}>Desktops & All-In-Ones</Link>
      </li>
    </ul>


<ul>
<li>
  <Link  className={laptopsset.directhead}>Bluetooth & WiFi Speakers</Link>
  </li>
  <li>
<Link className={laptopsset.directhead}>Internet Connectivity Devices</Link>
  <ul>
    <li>
      <Link>Routers</Link>
    </li>
    <li>
    <Link>WiFi Range Extenders</Link>
    </li>
    <li>
    <Link>Wireless USB Adapters</Link>
    </li>
    <li>
    <Link>Printers & Inks</Link>
    </li>
    <li>
    <Link>Printers</Link>
    </li>
  </ul>
</li>
<li>
  <Link  className={laptopsset.directhead}>Data Storage Devices</Link>
  <ul>
    <li>
      <Link>Memory Cards</Link>
    </li>
    <li>
      <Link >Pen Drives & OTG Drives</Link>
    </li>
    <li>
      <Link >Hard Disks & SSD</Link>
    </li>
  </ul>
</li>
</ul>

<ul>
<li>
    <Link className={laptopsset.directhead}>Computer Accessories</Link>
    <ul>
      <li>
        <Link>Upto 72% Off, Only on Reliancedigital.in</Link>
      </li>
      <li>
        <Link>Computer Networking Cables</Link>
      </li>
      <li>
        <Link>Laptop Chargers & Adaptor</Link>
      </li>
      <li>
        <Link>Laptop Batteries</Link>
      </li>
      <li>
        <Link>Hubs & Docks</Link>
      </li>
      <li>
        <Link>Laptop Bags & Sleeves</Link>
      </li>
      <li>
        <Link>Laptop Cooling Pad</Link>
      </li>
      <li>
        <Link>Laptop Screen Protectors</Link>
      </li>
      <li>
        <Link>Laptop Tables & Stands</Link>
      </li>
      <li>
        <Link>Mouse Pads</Link>
      </li>
      </ul>
  </li>
  <li>
    <Link className={laptopsset.directhead}>Input Devices</Link>
    <ul>
      <li>
        <Link>Keyboards</Link>
      </li>
      <li>
        <Link>Computer Mouse</Link>
      </li>
      <li>
        <Link>Stylus Pens</Link>
      </li>
    </ul>
  </li>

</ul>
</div>
  )
}
