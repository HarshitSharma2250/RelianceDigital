import React from 'react'
import audioset from './Audioset.module.css'
import { Link } from 'react-router-dom'

export const Audio = () => {
  return (
    <div className={audioset.container}>
    
    <ul >
      <li>
      <Link className={audioset.directhead} to={`/#`}>Headphones & Headsets</Link>
      <ul>
        <li>
<Link to={`/RelianceDigital/commonbestdeals/appleaudoaccessories`} >True Wireless</Link>   
        </li>
<li>
<Link>Bluetooth Neckbands</Link>
</li>
<li>                                                   
<Link>Earphones</Link>
</li>
<li>
<Link>Bluetooth Headphones</Link>
</li>
      </ul>
      </li>
    </ul>
<ul>
<li>
  <Link  className={audioset.directhead}>Bluetooth Neckbands</Link>
  <ul>
    <li>
      <Link>Earphones</Link>
    </li>
    <li>
    <Link>Bluetooth Headphones</Link>
    </li>
    <li>
    <Link>Wired Headphones</Link>
    </li>
    <li>
    <Link to={`/RelianceDigital/commonbestdeals/boatsounders`}>Speakers & Soundbars</Link>
    </li>
    <li>
    <Link>Bluetooth Speakers</Link>
    </li>
    <li>
    <Link>Home Theatre Systems</Link>
    </li>
    <li>
    <Link>Specialty Speakers</Link>
    </li>
    <li>
    <Link>Gaming Headset</Link>
    </li>
  </ul>
</li>
</ul>
<ul>
<li>
    <Link className={audioset.directhead}> Musical Instruments</Link>
    <ul>
      <li>
        <Link>Microphones</Link>
      </li>
      <li>
        <Link>Musical Keyboards</Link>
      </li>
      </ul>
  </li>
</ul>
</div>
  )
}
