import React from 'react'
import kitchenset from './Kitchenappliancesset.module.css'
import { Link } from 'react-router-dom'

export const KitchenAppliences = () => {
  return (
    <div className={kitchenset.container}>
    
    <ul >
      <li>
      <Link className={kitchenset.directhead} to={`/#`}>Mixers</Link>
      <ul>
        <li>
<Link  >2 Jar</Link>   
        </li>
<li>
<Link>3 Jar</Link>
</li>
<li>                                                   
<Link>4 Jar</Link>
</li>

      </ul>
      </li>
      <li>
    <Link className={kitchenset.directhead} to="/RelianceDigital/commonbestdeals/aircoolar">Water Purifiers</Link>
  </li>
      <li>
        <Link className={kitchenset.directhead}>Electric Kettle</Link>
      </li>
      <li>
        <Link>Microwaves Oven</Link>
        <ul>
          <li>
            <Link>Convection</Link>
          </li>
          <li>
            <Link>Solo & Grill</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link>OTG</Link>
      </li>
      <li>
        <Link>Air Fryer</Link>
      </li>
      <li>
        <Link>Food Processor</Link>
      </li>
    </ul>


<ul>
<li>
  <Link  className={kitchenset.directhead}>Cooktops</Link>
  <ul>
    <li>
      <Link>1 Burner</Link>
    </li>
    <li>
    <Link>2 Burner</Link>
    </li>
    <li>
    <Link>3 Burner</Link>
    </li>
  </ul>
</li>
<li>
  <Link  className={kitchenset.directhead}>Induction Cooktops</Link>
</li>
<li>
  <Link className={kitchenset.directhead}>Rice Cooker</Link>
</li>
<li>
  <Link className={kitchenset.directhead}>Hobs</Link>
</li>
<li>
  <Link className={kitchenset.directhead}>Hoods/Chimneys</Link>
</li>
<li>
  <Link className={kitchenset.directhead}>Cookware</Link>
</li>
</ul>

<ul>
<li>
    <Link className={kitchenset.directhead}> Juicer</Link>
    <ul>
      <li>
        <Link>1 Jar</Link>
      </li>
      <li>
        <Link>2 Jar</Link>
      </li>
      <li>
        <Link>3 Jar</Link>
      </li>
      </ul>
  </li>
  <li>
    <Link className={kitchenset.directhead}>Hand Blender</Link>
  </li>
  <li>
    <Link className={kitchenset.directhead}>Hand Mixer</Link>
  </li>
  <li>
    <Link className={kitchenset.directhead}>Wet Grinder</Link>
  </li>
  <li>
    <Link className={kitchenset.directhead}>Coffee/Tea Makers</Link>
  </li>
  <li>
    <Link className={kitchenset.directhead}>Pop up Toasters</Link>
  </li>
  <li>
    <Link className={kitchenset.directhead}>Sandwich Makers</Link>
  </li>
</ul>
</div>
  )
}
