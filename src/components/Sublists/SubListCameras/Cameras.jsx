import React from 'react'
import cameraset from './Cameraset.module.css'
import { Link } from 'react-router-dom'

export const Cameras = () => {
  return (
    <div className={cameraset.container}>
    
    <ul >
      <li>
      <Link className={cameraset.directhead} to={`/#`}>DSLR Cameras</Link>
      </li>
      <li>
      <Link className={cameraset.directhead} to={`/#`}> Mirrorless Cameras</Link>
      </li>
      <li>
      <Link className={cameraset.directhead} to={`/#`}>Point & Shoot  Cameras</Link>
      </li>
      <li>
      <Link className={cameraset.directhead} to={`/#`}>ProSumer Cameras</Link>
      </li>
      <li>
      <Link className={cameraset.directhead} to={`/#`}>Action Cameras</Link>
      </li>
<li>
  <Link  className={cameraset.directhead}>Photo Storage Devices</Link>
  <ul>
    <li>
      <Link>Memory Cards</Link>
    </li>
    <li>
    <Link>Pen Drives</Link>
    </li>
  </ul>
</li>
<li>
  <Link>projectors</Link>
</li>
<li>
  <Link>streaming devices</Link>
</li>
</ul>
<ul>
  <li>
    <Link className={cameraset.directhead}>Binoculars</Link>
  </li>
  <li>
    <Link className={cameraset.directhead}>Camera Lens</Link>
    </li>
    <li>
    <Link className={cameraset.directhead}>Digital Camera Accessoriess</Link>
    <ul>
      <li>
        <Link>Camera Batteries & Chargers</Link>
      </li>
      <li>
        <Link>Camera bags & cases</Link>
      </li>
      <li>
        <Link>Tripods & Monopods</Link>
      </li>
      <li>
        <Link>Action Camera Accessories</Link>
      </li>
      </ul>
  </li>
</ul>
</div>
  )
}
