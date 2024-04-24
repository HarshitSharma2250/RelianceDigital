import React from 'react'
import mobilesublist from './Mobile.module.css'
import { Link } from 'react-router-dom'

export const Mobiles = () => {
  return (
    <div className={mobilesublist.Mobiles}>
      <ul>
<li>
<Link className={mobilesublist.subheading} to={`/smartphones`}>smart phones</Link>
</li>
<li>
<Link className={mobilesublist.subheading} to={`/#`}>smart watches</Link>
<ul>
  <li>
    <Link to={`/commonbestdeals/applewatch`}>apple</Link>
  </li>
  <li>
    <Link to={`/commonbestdeals/#`}>samsung</Link>
  </li>
  <li>
    <Link to={`/commonbestdeals/#`}>Noise</Link>
  </li>
  <li>
    <Link to={`/commonbestdeals/#`}>Boat</Link>
  </li>
</ul>
</li>
<li>
  <Link className={mobilesublist.subheading} to={`/#`}>accessories</Link>
  <ul>
    <li>
      <Link>Tablet Accessories</Link>
    </li>
    <li>
      <Link>mobile accessories</Link>
      </li>
      <li>
      <Link>mobile grip & stands</Link>
      </li>
      <li>
      <Link to={`/commonbestdeals/storage`}>storage</Link>
      </li>
  </ul>
</li>
      </ul>
<ul>
<li>
  <Link className={mobilesublist.subheading} to="/commonbestdeals/audio accessories">head phones & headsets</Link>
</li>
<li>
  <Link className={mobilesublist.subheading} to="/#">tablets & eRaders</Link>
</li>
<li>
  <Link className={mobilesublist.subheading} to="/#">power banks</Link>
</li>
</ul>
<ul>
<li>
  <Link className={mobilesublist.subheading} to="/#">AI learning robots</Link>
</li>
</ul>
    </div>
  )
}
