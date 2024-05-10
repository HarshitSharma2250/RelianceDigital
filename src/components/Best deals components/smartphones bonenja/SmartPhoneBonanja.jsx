import React from 'react'
import { CommonCarocial } from '../../../Common swipper carocial/CommonCarocial'
import mobilebonaja from './SmartPhoneBonaja.module.css'
import { Link } from 'react-router-dom'

export const SmartPhoneBonanja = () => {

let data=[
    {
        pic:`https://www.reliancedigital.in/medias/Vivo-Y28-5G-Aqua-Smartphone-494351960-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODk2OHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGZhLzEwMDk1MzY5NjgyOTc0LmpwZ3w5NDhmNTZkNTM5ZWRjMWEyYmJiNDdjZTBiNzc4MDBhMDYwMDc1ZWYxNTI5MzM3NjIwNTY0N2I2OTI2YzBkYjVj`,
        description:'Vivo Y28 5G 128 GB, 8 GB RAM, Aqua, Mobile Phone',
        price:16999,
        company:'Vivo',
        id:1,
        model:'Vivo Y28'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Oppo-Reno-Green-Smartphone-494352010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDM5NXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI3LzEwMTAwMTQ4Njk5MTY2LmpwZ3xhOGRjODVmNjkxODE0NjBlMTUwNjY0ZmRhYTJhN2NiOGJkNmZhMWYzNGE1MmEwNDRkMDMzMzkwODViODEwMWYw`,
        description:'>Oppo Reno 11 5G, Green Mobile Phone (8 GB RAM, 128 GB ROM, 6.7 inch (17.1 cm) AMOLED FHD+ Display)',
        price:27999,
        company:'Oppo',
        id:2,
        model:'Oppo Reno 11'
    },
    {
        pic:`https://www.reliancedigital.in/medias/SamsungA15-Smartphone-494351803-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NjA1OXxpbWFnZS9qcGVnfGltYWdlcy9oNWQvaGJhLzEwMTI5MDAxNDgwMjIyLmpwZ3wzNjZmNWEzMTA1ZDZiMzNlMmFlYzk2NDE3NzQzY2EzYWYwN2FlNDgwNzk2MTdiZmNjNmI3NDNlODIxY2ZiMWVl`,
        description:'Samsung Galaxy A15 5G 128 GB, 8 GB RAM Blue Black, Mobile Phone',
        price:19499,
        company:'Samsung',
        id:3,
        model:'Samsung Galaxy A15'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Vivo-V29-494267950-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDU5NXxpbWFnZS9qcGVnfGltYWdlcy9oZDkvaGJmLzEwMDU3NjgwNDUzNjYyLmpwZ3wzZjk2MjM2ZTczZWI2ODNjMjZmNmZmMDFhMThlMTM5ZDUzOWMwOGFmNzIzNmM3Mzg1Y2I2Njg1YmRjZmYzNzk5`,
        description:'Vivo V29 5G 256 GB, 12 GB RAM, Himalayan Blue, Mobile Phone',
        price:36999,
        company:'Vivo',
        id:4,
        model:'Vivo V29 '
    },
    {
        pic:`https://www.reliancedigital.in/medias/Oppo-A38-128-GB-4-GB-RAM-Gold-Smartphone-493839090-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MTE5OHxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDJjLzEwMDQ5NjYzNTAwMzE4LmpwZ3wyOWZlODFhNGY3Nzg5YWJiOWNkODNkZjMzYjZlMzUxYzdjM2VkMjIzM2VhYzY4OTE4NzRmNzRmZjAwYjA4MjY0`,
        description:'Oppo A38 128 GB, 4 GB RAM, Gold, Mobile Phone',
        price:9999,
        company:'Oppo',
        id:5,
        model:'Oppo A38'
    },
    {
        pic:`https://www.reliancedigital.in/medias/Vivo-V29e-128-GB-8-GB-Blue-Smartphone-493838656-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDYxNXxpbWFnZS9qcGVnfGltYWdlcy9oZjEvaDAzLzEwMDM5NzAwMzU3MTUwLmpwZ3xkZDg3MmQyYzk5ZTZkYjA2MDIzMjEyNDhkNTkwNzQ0OTlmYzgwMmYxYzQwNzhmMGUxMjVhYjVhMzhmYzMwZjkw`,
        description:'Vivo V29e 128 GB, 8 GB, Blue Mobile Phone',
        price:25999,
        company:'Vivo',
        id:6,
        model:'Vivo V29e '
    },
    {
        pic:`https://www.reliancedigital.in/medias/Oppo-A-series-Starry-Black-Mobile-Phone-494351586-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzMwNnxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaGE5LzEwMDg0NDM0NTc1MzkwLmpwZ3wyNmQzMWM0ODQ4NDg1MDZkZmE4ZGNiNDVlNjYwYzM2Zjg2YzRlOWFlZGUwYjAwMDczM2RkYjI0N2U4YzRmMWZh`,
        description:'Oppo A59 5G 128 GB, 4 GB RAM, Starry Black, Mobile Phone',
        price:13999,
        company:'Oppo',
        id:7,
        model:'Oppo A59 '
    },
    {
        pic:`https://www.reliancedigital.in/medias/Oppo-A79-Green-Mobile-Phone-494268183-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NzgwMnxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaDM5LzEwMDcxOTM2NDk5NzQyLmpwZ3w1NzQzZjg3M2Y1OGIyZDliYTJjMWQxMjZiZTllZjk0NGVkOGFjZGM0M2I5OWM5N2JjMzQyMWZmYTE1MGZiMzBk`,
        description:'Oppo A79 5G 128 GB, 8 GB RAM, Green, Mobile Phone',
        price:17499,
        company:'Oppo',
        id:8,
        model:'Oppo A79 '
    },
    {
        pic:`https://www.reliancedigital.in/medias/SamsungA25-Smartphone-494351796-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzMwMHxpbWFnZS9qcGVnfGltYWdlcy9oYWMvaGFiLzEwMTI4OTgwNzcwODQ2LmpwZ3xjNmZiNGU2MTVlYjViMTBlOWY2NzQ2Y2E1MTExZDg4MDc4N2RkNGJhMjRiM2IzZTk0N2Y3YWFhNjQwMDUyNTNi`,
        description:'Samsung Galaxy A25 5G 128 GB, 8 GB RAM Yellow, Mobile Phone',
        price:23999,
        company:'Samsung',
        id:9,
        model:'Samsung Galaxy A25'
    },
]

  return (
    <div className={mobilebonaja.swiperconatier}>
    <div className={mobilebonaja.BestDeals}>Smartphone Bonanza <span>| 10% (Upto Rs.3000 off)</span>
      <Link to="/RelianceDigital/commonbestdeals/mobilebonaja"><button>view all</button></Link>
      </div>
        <CommonCarocial data={data}/>
    </div>
  )
}
