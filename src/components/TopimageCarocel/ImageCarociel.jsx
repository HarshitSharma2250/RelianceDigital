import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import imagescarocel from './ImageCarocel.module.css'

export const ImageCarociel = () => {


let arrImage=[
    `https://www.reliancedigital.in/medias/Samsung-Galaxy-A55-A35-5G-Carousel-Banner-19-03-2024-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyMTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDNiL2g5My8xMDEzMDU4MTkxMzYzMC5qcGd8ZjRjOTZjMzZiYzUyMDdkYjMzNzVkZTVlNDI1NTY1NGQ1OWM2NWU3ZmQ0NDYyMWM4OTAxMzQ0YTc4MzUxNDU1Mw`,
    `https://www.reliancedigital.in/medias/Premium-Audio-Banner-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3wxNTY5OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDVkL2g5NC8xMDExMjkyMzEwNzM1OC5qcGd8Zjc4N2YxMjBiNzM4MTE2MWM5MGU5OWEzNmMxZDkwYjY1ODM2NmFhODllOThjMmQyY2MxZTJjNzUwZDQ3OTI0Nw`,
    `https://www.reliancedigital.in/medias/Great-deals-on-the-Newest-ACs-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjU3MTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFmL2hhZC8xMDEyOTU4MjUyMjM5OC5qcGd8MjQyZDdjZjdjOWQ4ZjgwODNiOTVkYjU5ODZlZjE0YTE5MWJkYWViMjdkMzhiZDcyY2E3MjIwY2ExYzIwNjJkZA`,
    `https://www.reliancedigital.in/medias/Laptop-Carnival-Lenovo-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxNTI3NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaGQyL2hmMC8xMDExODkxMDM3ODAxNC5qcGd8ZThhNzEyZTQ2ODAxY2IyNGU1NjFmNWU4NWI0ZmZiOGU2NTY4NTcyMWNhZjI0Nzg2ZmY0YjE2NGQxMDY1MzU2OA`,
    `https://www.reliancedigital.in/medias/Samsung-Watch-5-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjc3MTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2gzYS8xMDEyOTg5Mzk4MjIzOC5qcGd8ZTgzOTNmMGYxNzZkZjM1MWJkNzBhMzZmODQ3YTBmYzQ1NmZhNjgzM2U3NjkwN2NhNzBlZDZlNTMxOWVhZTdmYQ`,
    `https://www.reliancedigital.in/medias/Summer-Ready-Sale-Beat-the-Heat-Banner-freebie-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjM2NDR8aW1hZ2UvanBlZ3xpbWFnZXMvaGIxL2hjNy8xMDEyOTg5NzE5MzUwMi5qcGd8NzRlNGEwOGU2YzE4NGU4OWJmMmEwOWY1M2ZjYmZhMjg5MzE1MDI5NWUxNDM4MTk1OTAyNzUyNjRlMTEwNGQyNg`,
    `https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wyNDI4Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGZiL2hjNi8xMDEyMDIzNzkwNzk5OC5qcGd8YWMzM2UzY2Q4YmE1YWE1MmM1NmNkNGM0NGJkNjU1Mjg4NzFmNzQwYTE1ZmVlNTViODQ0NWY5Y2ZkMmFmZjk2NA`,
]
const [showNavigation, setShowNavigation] = useState(window.innerWidth >= 700);
useEffect(() => {
  const handleResize = () => {
    setShowNavigation(window.innerWidth >= 700);
  };
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



  return (
    <div className={imagescarocel.topimgcarocial}>
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
        navigation={showNavigation}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          arrImage && arrImage.map((ele,index)=>(
<SwiperSlide key={index} className={imagescarocel.imgSlider}>
  <img src={ele} alt="" />
</SwiperSlide>
          ))
        }
      </Swiper>
      </div>
  )
}
