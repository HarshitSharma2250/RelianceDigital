import React from 'react'
import { CommonCarocial } from '../../../Common swipper carocial/CommonCarocial'
import aircooler from './AirCoolar.module.css'
import { Link } from 'react-router-dom'

export const AirCoolar = () => {

    let data=[
        {
            pic:`https://www.reliancedigital.in/medias/Havells-Kace-75-Cooler-493692107-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTMwNHxpbWFnZS9qcGVnfGltYWdlcy9oMmIvaDQ0Lzk5NjMwMTc4MzA0MzAuanBnfDY1N2NhZTU4YTZhMzg4ZjJlNmVkYWIwY2IxZjJkZGViYmE1ZTc3MTYxMmU0MzVkMmRhNTdmOTk5M2ZmMmFmNTA`,
            description:'Havells Kace 75 GHRACAMF220 Desert Air Cooler with 75 Litres Capacity, White and Blue',
            price:11990,
            company:'havells',
            id:1,
            model:'Havells Kace 75'
        },
        {
            pic:`https://www.reliancedigital.in/medias/Symphony-Diet-Air-Cooler-491666305-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5MDE1fGltYWdlL2pwZWd8aW1hZ2VzL2g2OS9oYzcvOTk2ODQwMDMzNDg3OC5qcGd8MzM0N2I1Y2RlZmFiZjBmMTEwODgzNWJkZWVjNjY5ZmM5OGQ2OTNjNzRlMmRiMDVjNzAwZGFkNzM2MWZjMGI5OA`,
            description:'Symphony Diet 3D 55i+ Desert Air Cooler, 55 Litre',
            price:12990,
            company:'Symphony',
            id:2,
            model:'ymphony Diet'
        },
        {
            pic:`https://www.reliancedigital.in/medias/Usha-50DD1-Air-Coolers-491666323-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjEwMnxpbWFnZS9qcGVnfGltYWdlcy9oNTcvaGViLzkyNDkwNTAwOTk3NDIuanBnfDkxZmYwZmUzMjg2NTY0NTkyOWUxNzU3ZmIzNDgzNTQ5NmQyMjdkOGNhNTI0ZDJiYzI1Y2VmYTc1ZGFkZTJhZjQ`,
            description:'Usha DYNAMO 50DD1 Desert Air Cooler, 50 Litre',
            price:11990,
            company:'Usha',
            id:3,
            model:'Usha DYNAMO'
        },
        {
            pic:`https://www.reliancedigital.in/medias/Kenstar-Wondercool-Desert-Air-Cooler-494338812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzQ2MXxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGViLzEwMTEwNzg1ODE0NTU4LmpwZ3w4YmYwZDg5MDY5MjA0YTYxOTMzODk0NDRhMWRlNWYyM2QzZWIyOWZjMjhiOWE3MzUzOTczYWU3MTE1NWMyZGFj`,
            description:'Kenstar Wondercool Desert 60 L Air Cooler, HC 60',
            price:9299,
            company:'Kenstar',
            id:4,
            model:'Kenstar Wondercool '
        },
        {
            pic:`https://www.reliancedigital.in/medias/Maharaja-Air-Cooler-490819365-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDgxMHxpbWFnZS9qcGVnfGltYWdlcy9oMmYvaGJkLzEwMTI0NzA4OTcwNTI2LmpwZ3wyNDM4ZmRjNmQ1NWY0MTgxYjBlYmI0N2ZjYjI3NWIyMDMxMWU5ODY3YmM0MjA5ODYwOTQ2NzA3ZDQ0M2MxYWQz`,
            description:'Maharaja Whiteline Rambo AC-303 65 Litre Desert Air Cooler',
            price:7199,
            company:'Maharaja',
            id:5,
            model:'Maharaja Whiteline'
        },
        {
            pic:`https://www.reliancedigital.in/medias/Symphony-75XL-Air-Cooler-491666297-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTYxMXxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaDAzLzk5NjgzODg5NjQzODIuanBnfDc2YjAwNjgwMzc3OTY5NTk4NzM2ZmRjMjRkNWNkMjQyMDgzNDBmY2NkNzEzOTY4MTMyMjJkYTg4YzJlNWZlMGI`,
            description:'Symphony Sumo 75XL Desert Air Cooler with i-Pure technology, 75 Litres',
            price:13990,
            company:'Symphony',
            id:6,
            model:'Symphony Sumo '
        },
        {
            pic:`https://www.reliancedigital.in/medias/Havells-Air-Cooler-494338763-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTEyN3xpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGJjLzEwMTA4NzAzMDgwNDc4LmpwZ3w3NjE1ZTY2ZjQ3YzkyOTY1MTJkODI5ZmFkNzY1OGEzYzA5OTA4MTJkNzMyNjA2NjE4ODRiNGI2ODZiMmYyYjg4`,
            description:'Havells Zurii 55 Tower Air Cooler',
            price:11499,
            company:'Havells',
            id:7,
            model:'Havells Zurii 55'
        },
        {
            pic:`https://www.reliancedigital.in/medias/Bajaj-Air-Cooler-494338771-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTA2M3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDI1LzEwMTA4NzA2MDk1MTM0LmpwZ3xlOWZmZGI4ZDZiZDZhNjAzYWY3NjA1MjBlMGVlMzAzM2EzNTNhOTMxZTI2YzY5MDQ0ZjRhMDE4MmRhZTg2Y2Y2`,
            description:'Bajaj Shield Series Elevate 65 Desert Air Cooler',
            price:11499,
            company:'Bajaj',
            id:8,
            model:'Bajaj Shield'
        },
        {
            pic:`https://www.reliancedigital.in/medias/Symphony-Diet-Air-Cooler-491666305-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5MDE1fGltYWdlL2pwZWd8aW1hZ2VzL2g2OS9oYzcvOTk2ODQwMDMzNDg3OC5qcGd8MzM0N2I1Y2RlZmFiZjBmMTEwODgzNWJkZWVjNjY5ZmM5OGQ2OTNjNzRlMmRiMDVjNzAwZGFkNzM2MWZjMGI5OA`,
            description:'Symphony Diet 3D 55i+ Desert Air Cooler, 55 Litre',
            price:12990,
            company:'Symphony',
            id:9,
            model:'Symphony Diet 3D'
        },
    ]

  return (
    <div className={aircooler.swiperconatier}>
    
    <div className={aircooler.BestDeals}>best deals on Air Coolers 
      <Link to="/commonbestdeals/aircoolar"><button>view all</button></Link>
      </div>
        <CommonCarocial data={data} />
    </div>
  )
}
