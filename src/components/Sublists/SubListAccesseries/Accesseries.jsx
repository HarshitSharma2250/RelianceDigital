import React from 'react'
import accessoriesset from './Accessoriesset.module.css'
import { Link } from 'react-router-dom'

export const Accesseries = () => {
  return (
    <div className={accessoriesset.container}>
    
    <ul >
      <li>
      <Link className={accessoriesset.directhead} to={`/#`}>Bags, Cases & Sleeves</Link>
      </li>
      <li>
    <Link className={accessoriesset.directhead} >Smart Devices</Link>
  </li>
  <ul>
    <li>
      <Link>Smart Plugs</Link>
    </li>
    <li>
    <Link>Smart Cameras</Link>
    </li>
    <li>
    <Link>Smart Sensors</Link>
    </li>
  </ul>
      <li>
        <Link className={accessoriesset.directhead}>Batteries</Link>
      </li>
      <li>
        <Link className={accessoriesset.directhead}>Power Banks</Link>
      </li>
      <li>
        <Link className={accessoriesset.directhead}>Cables & Cords</Link>
      </li>
      <li>
        <Link className={accessoriesset.directhead}>Chargers & Adapters</Link>
      </li>
      <li>
        <Link className={accessoriesset.directhead}>Bluetooth & WiFi Speakers</Link>
      </li>
    </ul>


<ul>
<li>
  <Link  className={accessoriesset.directhead}>Reconnect Disney | Marvel Accessories</Link>
    </li>

<li>
  <Link  className={accessoriesset.directhead}>Data Storage Devices</Link>
  <ul>
    <li>
      <Link>Memory Cards</Link>
    </li>
    <li>
    <Link  to={`/RelianceDigital/commonbestdeals/storage`}>Pen Drives & OTG Drives</Link>
    </li>
    <li>
    <Link>Hard Disks & SSD</Link>
    </li>
  </ul>
</li>
<li>
  <Link  className={accessoriesset.directhead}>Mounts & Stands</Link>
  <ul>
    <li>Air Conditioner Stands</li>
    <li>Car Mobile Holders</li>
    <li>Mobile Grips & Stands</li>
  </ul>
</li>
<li>
  <Link className={accessoriesset.directhead}>Surge Protectors</Link>
</li>
<li>
  <Link className={accessoriesset.directhead}>Webcams</Link>
</li>
</ul>
<ul>
  <li>
    <Link className={accessoriesset.directhead}>Headphones & Headsets</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Cleaners & Protectors</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Computer Mouse</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Keyboards</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Indoor Lighting</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Office Electronics</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Laminators</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Tyre Inflators</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Routers</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Screen Guards & Protectors</Link>
  </li>
  <li>
    <Link className={accessoriesset.directhead}>Power Strips & Extension Cords</Link>
  </li>
</ul>
</div>
  )
}
