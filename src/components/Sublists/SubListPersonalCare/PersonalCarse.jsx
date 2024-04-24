import React from 'react'
import personalcareset from './Personalcareset.module.css'
import { Link } from 'react-router-dom'

export const PersonalCarse = () => {
  return (
    <div className={personalcareset.container}>
    
    <ul >
      <li>
      <Link className={personalcareset.directhead} to={`/#`}>Shavers & Trimmers</Link>
      </li>
      <li>
    <Link className={personalcareset.directhead} >Epilators</Link>
  </li>
      <li>
        <Link className={personalcareset.directhead}>Hair Dryers & Stylers</Link>
      </li>
      <li>
        <Link className={personalcareset.directhead}>Weighing Scales</Link>
      </li>
      <li>
        <Link className={personalcareset.directhead}>Irons</Link>
      </li>
    </ul>


<ul>
<li>
  <Link  className={personalcareset.directhead}>Hygiene & Personal Care</Link>
  <ul>
    <li>
      <Link>Digital Thermometers</Link>
    </li>
    <li>
    <Link>Massagers</Link>
    </li>
    <li>
    <Link>Misc. Care Devices</Link>
    </li>
  </ul>
</li>
<li>
  <Link  className={personalcareset.directhead}>Garment Steamers</Link>
</li>

</ul>
</div>
  )
}
