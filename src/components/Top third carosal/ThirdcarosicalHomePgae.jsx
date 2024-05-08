import React, { useEffect, useState } from 'react'
import Thirdcarosical from'./thirdcarosical.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const ThirdcarosicalHomePgae = () => {
    let arrImage=[
        `https://www.reliancedigital.in/medias/ICICI-Bank-Strips-1440x120-px.jpg?context=bWFzdGVyfGltYWdlc3w5MDE4OXxpbWFnZS9qcGVnfGltYWdlcy9oMDIvaGQ4LzEwMTMzNDM1OTQwODk0LmpwZ3w0YzVhYzM4N2M2ZmMyNDk5NWQzNDU4MmEyZmY5ZjM4NDllOTNhNDVjYWFmNDAzMDEzN2RjOWJmZjhhNjJhZTZi`,
        `https://www.reliancedigital.in/medias/RD-SBI-Card-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDUwODN8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2hiMi8xMDA3NTU4ODUyNjExMC5qcGd8OTgzOWJjZThlZDgyYWVmMmUxMWVlODdmMWRiOTMyZGQ5MjFlOTBmOGFmMDNjMGE4NmExNTdjZDlkMTM3ZTcyMw`,
        `https://www.reliancedigital.in/medias/IDFC-Bank-Offer-Strip-1440-x-120px.jpg?context=bWFzdGVyfGltYWdlc3w2NDgwOHxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDMxLzEwMTMyMDk5NTk2MzE4LmpwZ3xiN2Y4YTBmMWFiNWNhMjMyN2Q5Y2Y4YWU3ZTEzYzZjNmRkNTYwZjQ2OGQ3NTVmZTk1MzhjZTZkZDMyZjEwYmFj`,
        `https://www.reliancedigital.in/medias/AU-Bank-Strips-1440x120-px.jpg?context=bWFzdGVyfGltYWdlc3w4MDQ2NHxpbWFnZS9qcGVnfGltYWdlcy9oMmYvaDU3LzEwMTMzNDM1MzUxMDcwLmpwZ3w0ZTVmMTlkNDI1Yzc4YmQ3NTMwMGViNTJiM2ZmOTdiYzI0YzI3ZmNhNDg0YjU1ZTJkMTQ2OGUxYTk5ZTY5NTg4`,
        `https://www.reliancedigital.in/medias/HDFC-Bank-Strips-1440x120-px.jpg?context=bWFzdGVyfGltYWdlc3w4MjkxOHxpbWFnZS9qcGVnfGltYWdlcy9oMDAvaDJkLzEwMTMzNDM1ODA5ODIyLmpwZ3xlMDg1ZjZhZDMyZjZkOWQ5ZjA1OTA4ODk2YTJmODk2MDBiY2E4NTZmMmQzZTA4MTVkZDkzZDZjOWM4MDQ3ODM4`,
        
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
    <div className={Thirdcarosical.topimgcarocial}>
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
<SwiperSlide key={index} className={Thirdcarosical.imgSlider}>
<img src={ele} alt="" />
</SwiperSlide>
   ))
 }
</Swiper>
</div>
  )
}
