import React, { useEffect, useRef } from 'react'
import phoness from './SmartPhoness.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { CommonCarocial } from '../../../Common swipper carocial/CommonCarocial';

export const SmartPhoness = () => {
  const mainDivRef = useRef();
let arrImage=[
  {
    link:`/commonbestdeals/samsung`,
    pic:`https://www.reliancedigital.in/medias/Samsung-Galaxy-A55-A35-5G-Carousel-Banner-19-03-2024-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyMTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDZiL2g1Zi8xMDEyMjIwNDIxNzM3NC5qcGd8NzI2ODkyZjc2NWMyNTg3ZDA5NmFjNWMxOGNjY2E0MzQ2M2IxNWUwMDAwMWE3NmRkM2M3YjZhMGIwOWJiMjEzYQ`
  },
  {
    link:`#`,
    pic:`https://www.reliancedigital.in/medias/Oneplus-Nord-CE4-New-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDk2NzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGY1L2g2Yy8xMDEyNzg3OTg5NzExOC5qcGd8N2VhYTJjODIyZWY4NTY5MzU2MzI3NWIzNTI0YTM1OTQ5YWQ1YzJhZmI3N2FhMzdmOTMyYWE4YjFkNjNmMDk0OA`
  },
  {
    link:`/commonbestdeals/jiophone`,
    pic:`https://www.reliancedigital.in/medias/JioPrime-x-YouTube-Banner-D-rev-1.jpg?context=bWFzdGVyfGltYWdlc3wyMDU4ODl8aW1hZ2UvanBlZ3xpbWFnZXMvaGU4L2hjMi8xMDEyOTYyMDIzODM2Ni5qcGd8YzhiNGZhMTY0ZWIwMzE1NDJlY2FhMjNhNWI3MmZlZWQzM2Q0YmJjMmRiMzAyNTQyMjY2YzYyMzBhMjViZThjOQ`
  },
  {
    link:`/commonbestdeals/realme`,
    pic:`https://www.reliancedigital.in/medias/RealMe-C55-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDczMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2g3Yy8xMDExNzY2NzcxNzE1MC5qcGd8NjU5OGM1ZTU0Y2MwMWFlMWUxOGU1ZmNkMTg5ZGMxZTdiMzBjNGMwYjM4ZDA1NmI3NWYwYzE3NzM3NWZiMjRhYQ`
  },
  {
    link:`/commonbestdeals/vivo`,
    pic:`https://www.reliancedigital.in/medias/Vivo-T3-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjY2NTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ5L2g4Yy8xMDEyODg0MzcwMjMwMi5qcGd8MjBlYjJjMWNiMmE4MDQyZDRhNmNmOTFmYWQ2YWQ4N2IxYzMzNjFhODc0YzI3MGY3YTExZDBkNDA4NWRhYzg5ZQ`
  },
  {
    link:`#`,
    pic:`https://www.reliancedigital.in/medias/iPhone-15-D.jpg?context=bWFzdGVyfGltYWdlc3w5MDM2N3xpbWFnZS9qcGVnfGltYWdlcy9oMTYvaDU2LzEwMTI1MTY2MDE4NTkwLmpwZ3wxZTUwOTI4NGVkMjk0OWM3MWM0OTBhZTAyOGVkNjcyMGI3NmYyOGI3N2QwZTI4MTI4NzJjYTQxNjkzM2RlNDlh`
  },
  {
    link:`#`,
    pic:`https://www.reliancedigital.in/medias/Poco-M6-Pro-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTczNzh8aW1hZ2UvanBlZ3xpbWFnZXMvaDE0L2hjNi8xMDEyOTYyMjEwNjE0Mi5qcGd8OWFhYWFiYTk4YmNmZmQwNTU0ZTVjNzUxMTVkYjA5OGEyZTBlMjRlMmJlYjdhZWUyMjhmMmQ0MGQ5MWQ5ZmU5Zg`
  },

]
let data=[
  {
    link1:`/commonbestdeals/realme`,
    pic1:'https://www.reliancedigital.in/medias/Smartphone-Shop-By-Brands-Realme.jpg?context=bWFzdGVyfGltYWdlc3w1NTkyfGltYWdlL2pwZWd8aW1hZ2VzL2hlMS9oMzYvOTQ3Mzc1OTY0MTYzMC5qcGd8MGMxNDBhMWRmODcxODgzNGMwMjBmYjk2MTU2NTYyZWZlNDBkNTM5OGNhNzY4MmU2NTM2NmRjZGQ1YzQ1MjE1Yg',
    link2:`/commonbestdeals/vivo`,
    pic2:'https://www.reliancedigital.in/medias/Vivo-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3w1OTM2fGltYWdlL2pwZWd8aW1hZ2VzL2g2Yy9oNjQvOTA5ODk0MTQzMTgzOC5qcGd8MDZhNTdmMjE2Y2Q2ZGJjNzE2MzQ5N2JjZTkzZWQ5OGJhZGNhMGQ4MTkwOTNlMmIwYTE1NzJlNGIxZjhiZWZkNg'
  },
  {
    link1:`/commonbestdeals/samsung`,
    pic1:'https://www.reliancedigital.in/medias/Samsung-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3w0NTIyfGltYWdlL2pwZWd8aW1hZ2VzL2gxYy9oNDcvOTQ2MjEzNzg4MDYwNi5qcGd8ZmMxZGU1ODY3MGEzZjBkYzg2Y2EwNDRlZWE2ZjE2MmQ5NjY4MDQ4YjkzM2U1ZWNmOTkzNzEwNDgxNmI0NmUzYQ',
    link2:`/commonbestdeals/redmi`,
    pic2:'https://www.reliancedigital.in/medias/Logo-Mi.jpg?context=bWFzdGVyfGltYWdlc3w2MDQ0fGltYWdlL2pwZWd8aW1hZ2VzL2gwOC9oNWIvOTI5MDUzNjY4MTUwMi5qcGd8ZTY0NzNkZjVlY2U3OWRlNGZiYmIxOTY4ZWFkYjQ5NmIzNTZmYzU3YjM4NGUyY2Q2NTU4NzlhMjllMWRjYThkMA'
  },
  {
    link1:`#`,
    pic1:'https://www.reliancedigital.in/medias/Nokia-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3w2MzQ1fGltYWdlL2pwZWd8aW1hZ2VzL2gwZC9oY2QvOTA5ODk0MjE4NTUwMi5qcGd8MmM4ODE0ZDBmOTNkYWRmYjJjMzMwYTIxZGRhZjI3NDQ1ZWU2ZTZmODA5ODJhOWQxNGM4YjZkMGRhNjE2NjFhZA',
    link2:`#`,
    pic2:'https://www.reliancedigital.in/medias/TECNO.jpg?context=bWFzdGVyfGltYWdlc3w2NjExfGltYWdlL2pwZWd8aW1hZ2VzL2hjYy9oMTQvOTg3MTE1MTMwMDYzOC5qcGd8YTFmYTY3NTMxNTZiY2NlNDc5MDE5NmI0NGUwYjRkMzkyNmZkYTk0MjE4OGI0Y2M3Nzg0N2FhNmNiYjUwNzAzYQ'
  },
  {
    link1:`#`,
    pic1:'https://www.reliancedigital.in/medias/Shop-By-Brands-Oppo.jpg?context=bWFzdGVyfGltYWdlc3w1OTA0fGltYWdlL2pwZWd8aW1hZ2VzL2hlNS9oMjIvOTMzODQ4MDkxODU1OC5qcGd8ZDY0MWRlOTNhOThlMDNhZGIyYTc2MGI1NzczYTUzOGUyMGJhZDY4MTlkOTlhNGEyNWEyNzI2ZTQ1ZWE0ODJhZA',
    link2:`#`,
    pic2:'https://www.reliancedigital.in/medias/Motorola-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3wzMjQ2fGltYWdlL2pwZWd8aW1hZ2VzL2gxYi9oMDkvOTA5ODk0MjI1MTAzOC5qcGd8NTgzNjhiZDg0Yzg3NzEzNmU5YWU4OTBjYTk2NmMwN2M5ODAxZWFjM2FmZmJhNDEzNTkxN2I3ZjlhY2YxNWMxNQ'
  },
  {
    link1:`#`,
    pic1:'https://www.reliancedigital.in/medias/Apple-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3wxODc2fGltYWdlL2pwZWd8aW1hZ2VzL2g3ZS9oZTAvOTA5ODk0MTM2NjMwMi5qcGd8NmU2MDIzODlkODBiNzFlMWQzZDZhNjMxN2I1OTllM2VkMGVlZTVmNWQyZDgwMDA3MDU4MmFjODlhZDMyNTQ3Mw',
    link2:`#`,
    pic2:'https://www.reliancedigital.in/medias/Smartphone-Shop-By-Brands-OnePlus.jpg?context=bWFzdGVyfGltYWdlc3wyNjQyfGltYWdlL2pwZWd8aW1hZ2VzL2hjNi9oNTUvOTQ3Mzc1OTcwNzE2Ni5qcGd8ZjcyZDZmOGZmNDczNTY1ZTgwMDQ0Mzc1NmM3NWJlOGFiMzMyNGJjZmJjN2MyM2NhM2NmYTM4NzJlZGNmNjEzOQ'
  },
  {
    link1:`#`,
    pic1:'https://www.reliancedigital.in/medias/itel-Logo-01.jpg?context=bWFzdGVyfGltYWdlc3wxODQwNDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2hjZC85NTE5MDM2ODU4Mzk4LmpwZ3w2ZTNhZmE1N2QxZTUwZmY5YzUyMjAwNzY2NmQzOWE5MGQ4YWQ0MGJlZDU0MzljN2MxNmJkYzcyMWE0MGY0Yzkz',
    link2:``,
    pic2:''
  }
]

let mydata=[
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

const slideLeft = () => {
  const current = mainDivRef.current;
  current.scrollBy({
    left: 1150,
    behavior: "smooth",
  });
};
const slideRight = () => {
  const current = mainDivRef.current;
  current.scrollBy({
    left: -1150,
    behavior: "smooth",
  });
};
useEffect(() => {
  slideLeft();
  slideRight();
});

  return (
    <div className={phoness.container}>
      <div className={phoness.OnePlus}>
<img  src="https://www.reliancedigital.in/medias/Split-OnePlus-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDEyNjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1MC8xMDEzMzM2NzA5NTMyNi5qcGd8ODRiZjVhZTk3MjZmNmM3ZDRhYTMwYTg1MjlkM2E0M2M5ZTQzNWZhMGJlMTU2ZDBiYTRlZGY4YWFlNWVmYzYyNw" alt="" />
      </div>
 <div className={phoness.topimgcarocial}>
    <Swiper 
 spaceBetween={30}
 centeredSlides={true}
 slidesPerView={1}
 loop={true}
 autoplay={{
   delay: 2500,
   disableOnInteraction: false,
 }}
 pagination={{
   clickable: true,
 }}
 navigation={true}
 modules={[Autoplay, Pagination, Navigation]}
 className="mySwiper"
>
 {
   arrImage && arrImage.map((ele,index)=>(
<SwiperSlide key={index} className={phoness.imgSlider}>
<Link to={ele.link} ><img src={ele.pic} alt="" /></Link>
</SwiperSlide>
   ))
 }
</Swiper>
</div>

<section className={phoness.companyCategoryCaroser}>

<section className={phoness.leftCaroelItems}>
<div className={phoness.swiper}>
            <div className={phoness.mainContainer} ref={mainDivRef}>
        {
            data && data.map((ele,index)=>(
<div className={phoness.swiperSlide} key={index} >
 <Link to={ele.link1} > <img src={ele.pic1} alt="" /> </Link>
 <Link to={ele.link2} > <img src={ele.pic2} alt="" /> </Link>
        </div>
            ))
        }
        </div>
        <button className={phoness.leftButton} onClick={slideRight}>
        <RxChevronLeft />
      </button>
      <button className={phoness.rightButton} onClick={slideLeft}>
        <RxChevronRight />
      </button>
      </div>
</section>
  <h2>FROM OUR RESOURCE CENTRE</h2>
<section className={phoness.rightcontainer}>
<div className={phoness.boxes}>
  <p>Samsung Galaxy S24 Series – AI at your fingertips</p>
  <img src="https://www.reliancedigital.in/wp-content/uploads/2024/01/cover_Samsung_Galaxy_S24.jpg" alt="" />
</div>
<div className={phoness.boxes}>
  <p>Apple iPhone 15 and 15 Pro – Here we go!</p>
  <img src="https://www.reliancedigital.in/wp-content/uploads/2023/09/iPhone15_15Pro_cover-1.jpg" alt="" />
</div>
<div className={phoness.boxes}>
  <p>Samsung Galaxy Z Flip 5 and Z Fold 5 – Leading the foldable space</p>
  <img src="https://www.reliancedigital.in/wp-content/uploads/2023/08/Samsung_Fold_5_1.cover_.jpg" alt="" />
</div>
<div className={phoness.boxes}>
  <p>Oppo Reno 10 5G – Racing full-speed ahead</p>
  <img src="https://www.reliancedigital.in/wp-content/uploads/2023/07/Oppo_Reno_10_5g_Cover.jpg" alt="" />
</div>
</section>
</section>

<div className={phoness.swiperconatier}>
    <div className={phoness.BestDeals}>latest smart phones
      <Link to="/commonbestdeals/mobilebonaja"><button>view all</button></Link>
      </div>
        <CommonCarocial data={mydata}/>
    </div>


    <div  className={phoness.App}>
      <div className="container">
        <div className="section">
          <h2>Mobile Phones Online in India</h2>
          <p>Mobile phones have transformed from being a device to make calls or send texts, to an entertainment and information gadget. Today, it’s practically impossible to spend a moment without our smartphones by our side- whether it’s just for sending an email, storing important files, doing a video call with our loved ones, or streaming the latest web series while commuting. Mobile phones come with a wide range of features these days- like fascinating photo filters, AI-powered cameras, blazing fast processing speeds, etc. At Reliance Digital, you can compare and find your choice of mobile phone online at the best prices.</p>
        </div>
        <div className={phoness.section}>
          <h2>Choosing A Smartphone As Per Operating System</h2>
          <p>With hundreds of options available, the online mobile shopping experience can be quite overwhelming if you don’t know what you want. Begin with choosing the type of operating system you’d be comfortable using. There are only two smartphone operating systems worth considering: Android and iOS.</p>
          {/* Add the comparison table here */}
        </div>
        <div className={phoness.section}>
          <h2>Buy Mobile Phones As Per Price Band</h2>
          <ul>
            <li>Features of mobile phones below 5000:</li>
            <ul>
              <li>Dual SIM</li>
              <li>1-3GB RAM</li>
              <li>3000 mAH + battery</li>
              <li>16-32 GB inbuilt memory</li>
            </ul>
           
          </ul>
        </div>
        <div className={phoness.section}>
          <h2>Top Mobile Phone Brands</h2>
          <ul>
            <li><strong>Samsung Mobile Phone:</strong> Samsung is India’s most attractive and trusted brand of mobiles...</li>
            <li><strong>Oneplus Mobile Phone:</strong> Oneplus mobile phones are considered as one of the best mid-premium android smartphones in the world...</li>
            {/* Add other brands */}
          </ul>
        </div>
        <div className={phoness.section}>
          <h2>Compare and Choose The Best Mobile Phones Online</h2>
          <p>At Reliance Digital, you can explore smartphones that are pocket-friendly or high on features, all under one roof. Following are some specifications to consider while buying a mobile phone online:</p>
          <ul>
            <li>Camera quality</li>
            <li>Processor</li>
            <li>Build quality</li>
            <li>Display</li>
            <li>Battery</li>
            <li>User interface</li>
            <li>Storage</li>
            <li>Extra features</li>
            <li>Audio/speakers</li>
          </ul>
          <p>Buying a smartphone online is now so easy and simple!</p>
        </div>
      </div>
    </div>

    </div>
  )
}
