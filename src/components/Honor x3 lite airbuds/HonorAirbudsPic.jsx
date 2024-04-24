import React from 'react'
import airbudsx3 from './HonorAirbuds.module.css'
import { useNavigate } from 'react-router-dom'

export const HonorAirbudsPic = () => {
const Navigate=useNavigate()
    let obj={
      "id": 1,
      "company": "Honor",
      "model": "Honor X3 Lite Glaze",
        pic:`https://www.reliancedigital.in/akamai/images/products/Honor-X3-Lite-TWS-Earbuds-493841911-20.jpg`,
        description:'HONOR Truewireless Earbuds X3 Lite Glaze, 28 Hrs battery,Dual connectivity,Bluetooth 5.3, Low latency Gaming mode, dual mic, ENC noise reduction for calls, IPX-4, Touch controls, App Support (White)',
        price:1499,
    }


function HandleClick(){
localStorage.setItem('storesingledata',JSON.stringify(obj))
Navigate('./homesinglepages')
}

  return (
    <div className={airbudsx3.HonorXLite} onClick={HandleClick}>
    <img src="https://www.reliancedigital.in/medias/Honor-TWS-1440x120.jpg?context=bWFzdGVyfGltYWdlc3w1NTYxMHxpbWFnZS9qcGVnfGltYWdlcy9oN2QvaDRmLzEwMTMxMTgzODI5MDIyLmpwZ3xmZmY3YjhkZmRkY2RlMDY2MTZhZDg0NzQ5ODgyZWZlODJmMGI2MjI4YjlkYTc1ZjMwMzA4YTNjOGYyNmM4MWFk" alt="" />
 
</div>
  )
}
