import React from 'react'
import mobiledeal from './MobileDeals.module.css'
import { Link } from 'react-router-dom'

export const MobileDeals = () => {
  return (
    <div className={mobiledeal.container}>
        <div className={mobiledeal.content}>Top Deals on Mobiles</div>
        <div className={mobiledeal.eachitemcontainer}>
            <Link to={`/RelianceDigital/commonbestdeals/vivo`}>
                <img src="https://www.reliancedigital.in/medias/Vivo-T3-GDOE-340-x-255.jpg?context=bWFzdGVyfGltYWdlc3w0NTkzMHxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDc3LzEwMTI5MTMwMDYxODU0LmpwZ3w2N2RlMDA3YTk2ZGI4ODE1ODgyZmRmMzRlYmIzZjdhZjFiNmEzNDZkYTE2MWI1YWJlMzE0ODJhZDQ0OWU5Njk2" alt="" />
            </Link>
            <Link to={`/RelianceDigital/commonbestdeals/redmi`}>
                <img src="https://www.reliancedigital.in/medias/Redmi-A2-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MDU3NHxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDU4LzEwMTE0Njk4MjQ4MjIyLmpwZ3xiMGFlZWQwZTgyNTg2YTIxN2ZiNWM5MjZhNDFlM2E3YjEwZDRhMWI2OGFiOGNjOTA4MzcxNDk3ZTQzMWIyYjYw" alt="" />
            </Link>
            <Link to={`/RelianceDigital/commonbestdeals/realme`}>
                <img src="https://www.reliancedigital.in/medias/GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1NTM4N3xpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDVhLzEwMTE3NjY3NjUxNjE0LmpwZ3w0N2ZkNTQxODA0MzViY2NiNjA4MTBhYzc0ODY0NTNiMWJhMTdlOGRjMzU5MzVmMjk1MDJkMzE5ZmQ4NmRiOWE2" alt="" />
            </Link>
            <Link to={`/RelianceDigital/commonbestdeals/samsung`}>
                <img src="https://www.reliancedigital.in/medias/Samsung-F14-5G-GDOE-340x255.jpg?context=bWFzdGVyfGltYWdlc3w1MTYzNnxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaDIwLzEwMTMyMDgzMTc5NTUwLmpwZ3xjZmJiZTU5ZmI1ZWQ4YmJkYTAxODc2ZjJjMDI4MTE5MDg4MTY2NzQ3YjNhYzM2MTA3YjdjMWE2NzI2ZmNiZjJl" alt="" />
            </Link>
        </div>
    </div>
  )
}
