import React from 'react'
import homeset from './HomeAppliencesset.module.css'
import { Link } from 'react-router-dom'

export const HomeAppliences = () => {
  return (
    <div className={homeset.container}>
    
    <ul >
      <li>
      <Link className={homeset.directhead} to={`/#`}>Air Conditioners</Link>
      <ul>
        <li>
<Link to="/RelianceDigital/commonbestdeals/airconditioners" >Split Air Conditioners</Link>   
        </li>
<li>
<Link>Window Air Conditioners</Link>
</li>
<li>                                                   
<Link>Smart Air Conditioners</Link>
</li>
<li>
<Link>Energy Efficient Air Conditioners</Link>
</li>
      </ul>
      </li>
      <li>
    <Link className={homeset.directhead} to="/RelianceDigital/commonbestdeals/aircoolar">Air Coolers</Link>
  </li>
      <li>
        <Link className={homeset.directhead}>Air Purifiers</Link>
      </li>
    </ul>


<ul>
<li>
  <Link  className={homeset.directhead}>Washing Machines</Link>
  <ul>
    <li>
      <Link>Fully Automatic Front Load</Link>
    </li>
    <li>
    <Link>Fully Automatic Top Load</Link>
    </li>
    <li>
    <Link>Semi-Automatic Top Load</Link>
    </li>
  </ul>
</li>
<li>
  <Link  className={homeset.directhead}>Refrigerators</Link>
  <ul>
    <li>
      <Link>Single Door</Link>
    </li>
    <li>
      <Link to={`/RelianceDigital/commonbestdeals/refrigerators`}>Double Door</Link>
    </li>
  </ul>
</li>
</ul>

<ul>
<li>
    <Link className={homeset.directhead}> Vacuum Cleaners</Link>
    <ul>
      <li>
        <Link>Robotic Vacuum Cleaners</Link>
      </li>
      </ul>
  </li>
  <li>
    <Link className={homeset.directhead}>Radiators</Link>
  </li>
  <li>
    <Link className={homeset.directhead}>Dishwashers</Link>
  </li>
  <li>
    <Link className={homeset.directhead}>Fans</Link>
  </li>
  <li>
    <Link className={homeset.directhead}>Cloth Dryers</Link>
  </li>
</ul>
</div>
  )
}
