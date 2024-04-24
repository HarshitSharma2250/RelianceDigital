import React from 'react'
import { CommonCarocial } from '../../../Common swipper carocial/CommonCarocial'
import bestaudio from './BestSellingAudio.module.css'
import { Link } from 'react-router-dom'
export const BestSellingAudoAccess = () => {

let data=[
    {
        pic:`https://www.reliancedigital.in/medias/Apple-Airpods-pro-492571631-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTAyNnxpbWFnZS9qcGVnfGltYWdlcy9oZjgvaDg3Lzk4MjU2MDg2NjMwNzAuanBnfGRlN2MxYjQxYWMyMmU1MzFlY2E0NzkxNGQ4ZjNmNTJhZGExZjIxODQ4MTZkMjA5ZmE2YWU1N2FmNmJhOWJkYjM`,
        description:'Apple MLWK3HN/A Airpods Pro with Magsafe Charging Case, IPX4 Water and Sweat Resistant, Active Noise Cancellation, White',
        price:21990,
        company:'Apple',
        id:1
    },
    {
        pic:`https://www.reliancedigital.in/medias/Noise-Three-Wireless-Headphone-494249951-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTA1MnxpbWFnZS9qcGVnfGltYWdlcy9oY2QvaGJlLzEwMDg1MTUxNjA0NzY2LmpwZ3w2YWQxMWNkYjBlZmViZTc1Zjk1NGJmMzk5OTU1OTVmN2U3MWYyYjgyZjJhMGQ0MTNiM2JmZTZiNjc2YjBiMDUz`,
        description:'Noise Three Wireless Headphone, Upto 70 hrs of playtime, Dual Device Pairing, Gaming Mode, Foldable, 40mm driver, IPX5 Water Resistance, Blutooth v5.3, Charging Indicator, Jet Black',
        price:1999,
        company:'Noise',
        id:2
    },
    {
        pic:`https://www.reliancedigital.in/medias/Apple-Wired-EarPods-with-Lightning-Connector-White-491277319-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzUyMnxpbWFnZS9qcGVnfGltYWdlcy9oMmQvaDcwLzg5MzI3MTk3MjI1MjYuanBnfDk3MmQ1OWQyNTk2MjJmYjQyOWY0MGJkYzYyM2M0MGVhZTFlMjVhZjU5ZjVhODNkYzgxMWJkMGQzZTdhNTdmZjY`,
        description:'Apple EarPods with Lightning Connector, Protection from sweat and water, Built-in Remote and Mic',
        price:1599,
        company:'Apple',
        id:3
    },
    {
        pic:`https://www.reliancedigital.in/medias/boAt-Nirvana-Ion-Earbud-494249958-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjk2NHxpbWFnZS9qcGVnfGltYWdlcy9oNmMvaGQ5LzEwMDkyNTIyNjM1Mjk0LmpwZ3xiZmE4NmE5ZjZkZTYzYjM1ZTc3ZmUyMGFmMzQyZTNhNGE2Yjg0NzY2NzQxMjYwYzUwMjgyZmJlNGJmMDdiYmQ0`,
        description:'boAt Nirvana Ion ANC True Wireless Earbuds with Upto 120 Hours of Total Playback, Beast Mode, Dual EQ Modes, ANC with ENx Technology, Bluetooth v5.2, Crystal Black',
        price:2299,
        company:'boAt',
        id:4
    },
    {
        pic:`https://www.reliancedigital.in/medias/Sony-XB910N-Headphones-492796750-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDY1MXxpbWFnZS9qcGVnfGltYWdlcy9oOTgvaDBiLzk4MDkxMjI4MjAxMjYuanBnfDNjMzIxNmZkZWM3M2FiZjg2ZGZiNjJjZTQzZWYzZjNmMGEyZTI3NjVhMDU4MWExNmNiMDUxNDk1NDAxODI2OWQ`,
        description:'Sony XB910N Wireless Bluetooth Headphone with Extra Bass, Upto 30 hrs of playtime, Multipoint connection, Voice assistant,&nbsp; Noise cancellation, Extra Bass sound, Built-In Alexa , Black',
        price:10895,
        company:'Sony',
        id:5
    },
    {
        pic:`https://www.reliancedigital.in/medias/Boat-Rockerz-410-Headphone-491598555-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDg1M3xpbWFnZS9qcGVnfGltYWdlcy9oMmQvaGE4Lzk3NjU0MDYyNDQ4OTQuanBnfDNiYmEyNjQzOTQ5ZWU1NGFhNTNkMTBmMjNhY2M4NmZkMmMzMWMyOWQ5NmQ0NTZkNGQ1YzAwOWQ4NDQ1ZmZiMzg`,
        description:'boAt Rockerz 410 Bluetooth Headphone with Mic, Super Extra Bass, Up to 8H Playtime, Bluetooth v5.0, Dual Connectivity Modes, Foldable Ear cups and Lightweight Design, 300 mAh batterywith 1 year warranty, Black',
        price:1099,
        company:'boAt',
        id:6
    },
    {
        pic:`https://www.reliancedigital.in/medias/Apple-Airpods-Pro-2nd-Gen-493839243-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMDE0N3xpbWFnZS9qcGVnfGltYWdlcy9oNjcvaDI5LzEwMDUwNzMxNDA5NDM4LmpwZ3w1MGE2NjQxZWU0M2Y5ZmNkY2Y3YzYwNmMzNzc2YTRmZmQ3NDhhZGQ3MzY4MDU5NzhjYTdhMzhlODM1Zjk4NTQw`,
        description:'Apple Airpods Pro (2nd Gen-USB-C type) with MagSafe Charging Case True Wireless, with Active Noise Cancellation, Touch control, IP54 Dust, Sweat and water resistant, Bluetooth v5.3, Upto 30 hrs of playtime, White',
        price:23590,
        company:'Apple',
        id:7
    },
    {
        pic:`https://www.reliancedigital.in/medias/Apple-Airpods-Pro-493177748-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMDEzOXxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDFjLzk4OTA3NTEwMjEwODYuanBnfGEwYjAwMzA4NmMyOGZhMTFhY2NlOTRkMzJmNWI5NWNhMmJmMzZkNzBjZmUyMjFlOWNlNzE2ZDYwZDJlY2ZlOWM`,
        description:'Apple Airpods Pro (2nd Gen) with MagSafe Charging Case, Active Noise Cancellation, Touch control, IPX4 Sweat and water resistant, Bluetooth v5.3, Upto 30 hrs of playtime, White',
        price:19990,
        company:'Apple',
        id:8
    },
    {
        pic:`https://www.reliancedigital.in/medias/Sony-WF-1000XM4-Headphones-and-Headsets-492579491-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDE4N3xpbWFnZS9qcGVnfGltYWdlcy9oOTYvaGUyLzk3NTU3MDQ2NTU5MDIuanBnfGQyMDMyYjEwYTBhOGMyY2I1YzJkNzM3MjQ2MDIwMTE2MjY4OWU1YTNkZGM0ZjRkNjRmOGIxYmE2YTcyNjNlNWE`,
        description:'Sony WF-1000XM4 True Wireless Earbuds with Noise Cancellation, 8 hrs of playtime, Integrated Processor V1, IPX4 Water Resistance, Speak-to-chat Technology, Qi technology, Black',
        price:14529,
        company:'Sony',
        id:9
    },
    {
        pic:`https://www.reliancedigital.in/medias/OnePlus-Bullets-Z2-Earphone-492913029-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5OTc4fGltYWdlL2pwZWd8aW1hZ2VzL2g0OS9oZjcvOTg1NzY4OTYxNjQxNC5qcGd8NjdkMjhiODI0MDVlOTU2ZDNlYmM2YjY4ZTUxMWRhYmE0YzMyZmZkMzUwYWNiNDBhYjBmOWIzMGU1NWUwMWMyMw`,
        description:'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Acoustic Red)',
        price:1799,
        company:'OnePlus',
        id:10
    },
]


  return (
    <div className={bestaudio.swiperconatier}>
    <div className={bestaudio.BestDeals}>best selling audio accessories
      <Link to="/commonbestdeals/audio accessories"><button>view all</button></Link>
      </div>
        <CommonCarocial data={data}/>
    </div>
  )
}
