import React from 'react'
import ac from'./Acs.module.css'
import { CommonCarocial } from '../../../Common swipper carocial/CommonCarocial'
import { Link } from 'react-router-dom'


export const Acs = () => {

const data=[
    {
        pic:`https://www.reliancedigital.in/medias/Bluestar-SAC-15T-5SINV-IC518NNURS-581110654-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTc0fGltYWdlL2pwZWd8aW1hZ2VzL2hmZi9oMDUvMTAxMDkzNzYzNjQ1NzQuanBnfDRmYTFjZjllZjY1Nzc2MDNiYzE3ZmI4ZjhhNDhkODM5ZmU1MmMyM2Y5YzI3OTIxMmMzNTQxZmNiN2RlY2E4NzM`,
        description:'Bluestar 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC, IC518NNURS, 4 Way Swing, PM 2.5 Filter, Nano Blu Protect Technology, Smart AC with Smart App, 2024 Launch',
        price:46990,
        company:'Bluestar',
        id:1,
        model:'Bluestar 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/BLUESTAR-IC318MNU-Split-Air-conditioner-581110331-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkxOHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGNmLzk5NjUzNTkwNzEyNjIuanBnfDAxNzkwMDUxMGQyYjUzYjkwNmZiMTcxYjA2ZGQwNmNkMzc0ZjU0NWE0YTU4ZWU1ZDJkNmJlZDNkZWE5NjU1Y2M`,
        description:'BLUESTAR 1.5 Ton 3 Star 5 in 1 convertible Inverter Split AC -IC318MNU (100% copper, 4 way swing, Cooling Mode, Turbo Cool, Comfort sleep, 2023 launch)',
        price:38490,
        company:'Bluestar',
        id:2,
        model:'Bluestar 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Hitachi-Split-AC-581110651-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzU2NHxpbWFnZS9qcGVnfGltYWdlcy9oNTUvaGYzLzEwMTA2NzM3OTUwNzUwLmpwZ3wzNDZjNGEyOThmZWM0NWVmOTE0MWVhNTI1YjhjOWIxZjhmNTg5MTQzZTY3NTdiZWFiYzg0Zjg1M2ZjMTU0NWM4`,
        description:'Hitachi 1.5 Ton 3 Star Inverter Split AC, G318PCBISF ,Frost Wash, Hexa Sensor, Backlight Remocon, Tropical Design, 100% Copper, 2024 Launch',
        price:37490,
        company:'Tropical',
        id:3,
        model:'Hitachi 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Bluestar-IC518RNU-Air-Conditioner-581110409-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzI2NnxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGM1Lzk5NjgzMjI2MDkxODIuanBnfGYyZDlhMzMyNTFlODg4NzBmYWU4NmQ3NTMzZWQ3N2ZiMmU3YWUxYTQ0MzAzZGU3MWQyMThjMDVjZTg0Y2Q0ZTk`,
        description:'Bluestar 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC, IC518RNU (100 percent Copper, Smart Ready, Blue Fins Protection, Comfort Sleep, 2023 Launch)',
        price:45990,
        company:'Bluestar',
        id:4,
        model:'Hitachi 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Samsung-Convertible-Inverter-Split-Air-Conditioner-581110577-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTc4fGltYWdlL2pwZWd8aW1hZ2VzL2g5Mi9oZGQvMTAwOTg2MTAxNDMyNjIuanBnfDdhN2NlNWU1MmE3OGI3NjBmZGM2ZTE0ZDIxOGZjZTdkOGI1OGYxYzc1OTA2Y2E2MWRhMTgyNjI1ODc5ZDcwNzA`,
        description:'SAMSUNG 1.5 Ton 5Star 5 in 1 Convertible Inverter Spilt AC, AR18CY5ZAWK (HD Filter,100% Copper, R32, 2024 launch)',
        price:47990,
        company:'Samsung',
        id:5,
        model:'samsung 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Samsung-WindFree-Inverter-Split-Air-Conditioner-581110575-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTk2M3xpbWFnZS9qcGVnfGltYWdlcy9oYzUvaGI2LzEwMDk4NjA4ODMyNTQyLmpwZ3wxNjVjNWQ5ZmFiNjA0NGQ0MGU5MWI1YTIyOWMzNmEyZGM5Y2RlZWIxMGY1ZTIyYmE4YmM3YmY1NTEyMjgxYzIz`,
        description:'SAMSUNG 1.5 Ton 3 Star Wifi Inverter Spilt AC, AR18CY3ANWK (WindFree Technology, PM 2.5 Filter, WiFi , 4 WayAuto Swing, 100% Copper, 2024 launch)',
        price:42990,
        company:'Samsung',
        id:6,
        model:'samsung 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Gangnam-Inverter-Split-AC-581110668-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaDI4LzEwMTExNDczNjE0ODc4LmpwZ3wzZTA5YWVkZDYzMmYxNGFlOTdhZjQxNzU4MGU5MDJiZTJmYmI1MmRmYTg2MDFiNzU5NzY4NzY1NjFlOGQ4ODc5`,
        description:'Gangnam 1.5 Ton 3 Star Inverter Split AC, 5 in 1 Convertible, Hydrophilic Blue fin, 100 percent Copper, GGINS18K3S23E',
        price:26990,
        company:'Gangnam',
        id:7,
        model:'Gangnam 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Hitachi-Split-AC-581110646-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzU2NHxpbWFnZS9qcGVnfGltYWdlcy9oM2YvaDBiLzEwMTA2NzMxMDY5NDcwLmpwZ3w0M2Y4NTgwNGM5ZmI0ODdiZTYxZjZjYjU4MTVhYzc2YzQ0NTliM2MwYjkxZWE0ODBjMGM2MzE2Mjc1ZTcwZjQ2`,
        description:'Hitachi 1.5 Ton 5 Star Inverter Split AC, G518PCBISF ,Frost Wash, Superfine Mesh Filter, 100% Copper, Tropical Design, 2024 Launch',
        price:44990,
        company:'Hitachi',
        id:8,
        model:'Hitachi 1.5'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Hitachi-Split-AC-581110651-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzU2NHxpbWFnZS9qcGVnfGltYWdlcy9oNTUvaGYzLzEwMTA2NzM3OTUwNzUwLmpwZ3wzNDZjNGEyOThmZWM0NWVmOTE0MWVhNTI1YjhjOWIxZjhmNTg5MTQzZTY3NTdiZWFiYzg0Zjg1M2ZjMTU0NWM4`,
        description:'Hitachi 1.5 Ton 5 Star Inverter Split AC, G518PCBISF ,Frost Wash, Superfine Mesh Filter, 100% Copper, Tropical Design, 2024 Launch',
        price:44990,
        company:'Hitachi',
        id:9,
        model:'Hiachi 1.5'
    },
]

  return (
    <div className={ac.swiperconatier}>
    <div className={ac.BestDeals}>2024 New Range of ACs from Rs. 22990*
      <Link to="/RelianceDigital/commonbestdeals/airconditioners"><button>view all</button></Link>
      </div>
       <CommonCarocial data={data}/>
    </div>
  )
}
