import React from 'react'
import televisionset from './Televisionset.module.css'
import { Link } from 'react-router-dom'
export const Televisions = () => {
  return (
    <div className={televisionset.container}>
    
    <ul >
      <li>
      <Link className={televisionset.directhead} to={`/#`}>television</Link>
      <ul>
        <li>
<Link to={`/RelianceDigital/commonbestdeals/bigscreentv`} >smart TV's</Link>   
        </li>
<li>
<Link>32 Inch</Link>
</li>
<li>
<Link>42 Inch</Link>
</li>
<li>
<Link>55 Inch</Link>
</li>
      </ul>
      </li>
    </ul>
<ul>
<li>
  <Link  className={televisionset.directhead}>Gaming</Link>
  <ul>
    <li>
      <Link>gaming console</Link>
    </li>
    <li>
    <Link>gamig accessories</Link>
    </li>
    <li>
    <Link>gaming titles</Link>
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
    <Link className={televisionset.directhead}> reconect disny-marvel audio collection</Link>
  </li>
  <li>
    <Link className={televisionset.directhead}>Tv and audio collections</Link>
    <ul>
      <li>
        <Link>virtual reality headsets</Link>
      </li>
      <li>
        <Link>stablizers and search projecters</Link>
      </li>
      </ul>
  </li>
</ul>
</div>
  )
}
