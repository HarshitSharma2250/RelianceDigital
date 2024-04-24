import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import secondcarocial from './SecondImageCarocial.module.css'

export const SecondCarosial = () => {

    let arrImage=[
        `https://www.reliancedigital.in/medias/Boat-wave-call-plus-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTcwMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY3L2gyNi8xMDEyNjMwOTg4MzkzNC5qcGd8ODAyM2I4NmY2OGMzZmMzMjY3YzRhYmM3M2I1MjhlYTNiZTI2NTYyMjJkNjcxM2EzNjUyOTRlYTFmNGVjYzNhNQ`,
        `https://www.reliancedigital.in/medias/1365X260.png?context=bWFzdGVyfGltYWdlc3wzMDc0NDV8aW1hZ2UvcG5nfGltYWdlcy9oZWMvaDJmLzEwMTI3NzUyMDM2MzgyLnBuZ3wyYjY0NjYyMTAxN2ZjODQ3NGI0MmIwN2ZkYmY5ZmJlYTg4MTA5YmVjOTQzMzJkZWQ2Y2VkYTU1NzMwNTg2ZTU3`,
        `https://www.reliancedigital.in/medias/1365x260-with-logo.jpg?context=bWFzdGVyfGltYWdlc3wxOTc1MjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGZkL2g1Zi8xMDEyNjI5NzI2ODI1NC5qcGd8MDEwNDA1NGQ0NDM3MDJjMTRmOTcwODlmZjE0ZWM4YWFhNjRjYWY1OWEyMDZmOTM1MmM4ODk5ZWUxODQ0NDAyNg`,
        `https://www.reliancedigital.in/medias/Redmi-Buds-5A-Launch-Notify-Me-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MDUyN3xpbWFnZS9qcGVnfGltYWdlcy9oODEvaGUxLzEwMTMyMTA4OTM1MTk4LmpwZ3xjODczZjQ0YmNjYmY2ZjYzOWIyZDE0YmNkZjUyYTY1ODM3YTk1YTNkNmU2ZjcyN2RmMGVkZGIzYWQxMWYxNjk3`,
        `https://www.reliancedigital.in/medias/three-1365X260.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDk2L2hmYi8xMDEyMDIxNjgzODE3NC5qcGd8NjRhNjU4ZWJkZDJjOGZjMWE4YTBkMmEwZmZkNDI4MjAyMjYwNDRkOTRmZmM0MDQ4ZDdjZDRiNjliMGIwZGI0OQ`
    ]

  return (
    <div className={secondcarocial.topimgcarocial}>
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
<SwiperSlide key={index} className={secondcarocial.imgSlider}>
<img src={ele} alt="" />
</SwiperSlide>
   ))
 }
</Swiper>
</div>
  )
}
