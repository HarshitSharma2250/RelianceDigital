import React from 'react'
import dealelect from './DealElectronics.module.css'
import { Link } from 'react-router-dom'

export const DealsOnElectronics = () => {
  return (
    <div className={dealelect.container}>
    <div className={dealelect.content}>greate deals on electronics</div>
    <div className={dealelect.eachitemcontainer}>
        <Link to={`/RelianceDigital/commonbestdeals/refrigerators`}>
            <img src="https://www.reliancedigital.in/medias/Best-Deals-on-Refrigerators-1.jpg?context=bWFzdGVyfGltYWdlc3w0MzkyNnxpbWFnZS9qcGVnfGltYWdlcy9oNzIvaDViLzEwMTI2MzAzMTY2NDk0LmpwZ3xiNmI2OGM0Y2ZjMmIyOGY4MTdkNjQ3NzFiMTE3MzZkMzRmMTEyZWI3YTUxZTgzMjVlMjI4OTY5NTY0Y2ZlOGU5" alt="" />
        </Link>
        <Link to={`/RelianceDigital/commonbestdeals/bigscreentv`}>
            <img src="https://www.reliancedigital.in/medias/8-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MzYwOXxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaGVlLzEwMTA1MzMyODkxNjc4LmpwZ3wyODdiMzc4MGE0OTRmNGQyMjVlYjJjYWE1ODg1OWVhM2NkMDZkMThhMDVjM2Y0NzA1NzA2YWEzNzIwMTg5ZTg1" alt="" />
        </Link>
        <Link to={`/RelianceDigital/commonbestdeals/storage`}>
            <img src="https://www.reliancedigital.in/medias/Storage-GDOE.jpg?context=bWFzdGVyfGltYWdlc3w0OTYwM3xpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDliLzEwMTMyMTAwMjg0NDQ2LmpwZ3w1MTlhMjhiNjFmYTdmZTk4MGI4MzM5NmI5NzY1OGM3YWQzMmU4ZjU5ZTU4ZmNhMWYxNTYyNWNkZDUxOTU1MDgw" alt="" />
        </Link>
        <Link to={`/RelianceDigital/commonbestdeals/appleaudoaccessories`}>
            <img src="https://www.reliancedigital.in/medias/6-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0NDU1NnxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaGM3LzEwMTA1MzMyNzYwNjA2LmpwZ3wwZGZmYjU1M2UwZDM4ZTAxMGZhMDZlMDVhOWRiNTZkNDVmY2M1NzJjMGQ5ZDA1ZDk4YmQ1M2ZkYWNiNjc4YzNk" alt="" />
        </Link>
        <Link to={`/RelianceDigital/commonbestdeals/homeandkitchen`}>
            <img src="https://www.reliancedigital.in/medias/Top-Deals-on-Home-Kitchen-Appliances-GDOE-Banner-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MjAzOHxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDMwLzEwMTE0Njg4NTE2MTI2LmpwZ3w0YWY2YTdmMTgyNmJjY2Q0MzBhYTEyNDAzMWE3MjExMmY4ZjMxZjRjNmVjZWVlZTQ3MWI2ZDlkMTdmYjkyZDI4" alt="" />
        </Link>
        <Link to={`/RelianceDigital/commonbestdeals/jiophone`}>
            <img src="https://www.reliancedigital.in/medias/GDOE-JioPrime-x-YouTube-Banner-340x255-rev-1.jpg?context=bWFzdGVyfGltYWdlc3w3MjA1NnxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGE0LzEwMTI5NjIwMTcyODMwLmpwZ3xkMjI1NzM0ZTNlMGNmMGE4OWJmZDQzMGU3YmE3MDYwMDRiOTgwZjUwNDA5YmM5MGQwZDQ5Mjg0OWY0MDNhMzIw" alt="" />
        </Link>
        <Link to={`/RelianceDigital/commonbestdeals/boatsounders`}>
            <img src="https://www.reliancedigital.in/medias/3-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0MTYxMXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaGQ0LzEwMTA1MzMyNjI5NTM0LmpwZ3wwZDY4NWUwOWM3NmI3ZjlkZmVjMmY3N2FmMWZiNjdmOTc3YWEzMjMxNWFhMGEzM2ZmNjVhN2JiN2E4MWNmNmU2" alt="" />
        </Link>
        <Link to={`/RelianceDigital/commonbestdeals/applewatch`}>
            <img src="https://www.reliancedigital.in/medias/Apple-Watch-Series-9.jpg?context=bWFzdGVyfGltYWdlc3w1MjY2NHxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaDRmLzEwMTI1MTcwMjc4NDMwLmpwZ3wwYjZlODE1YmQ0ZTdmNTgzODc2M2JkMzk0ZWNlZTc0YWUwODc3ZTZjZmNlMDMyZGY1NDNmNDgxNWFkNjljOWFk" alt="" />
        </Link>
    </div>
</div>
  )
}
