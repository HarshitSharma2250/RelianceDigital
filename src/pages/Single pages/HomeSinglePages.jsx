import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const HomeSinglePages = () => {
  const[data,setdata]=useState({})
  useEffect(()=>{
let storedata=JSON.parse(localStorage.getItem(`storesingledata`))
console.log(storedata);
setdata(storedata)
  },[])

  return (
    <div>
      {
        
data && <div>
  <img src={data.pic }alt="" />
  <p>{data.description}</p>
  <p>company : {data.company}</p>
  <p>model : {data.model}</p>
  <p>price :₹ <span>{data.price}</span></p>
</div>
      }
    </div>
  )
}
