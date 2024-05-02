import React, { useEffect, useRef, useState } from 'react'
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import commoncarocial from './CommonCarocial.module.css'
import { useNavigate } from 'react-router-dom';

export const CommonCarocial = ({data}) => {
    const mainDivRef = useRef();
const Navigate=useNavigate()

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

      function HandleClick(obj){
        localStorage.setItem('storesingledata',JSON.stringify(obj))
        console.log('tata')
        Navigate('./homesinglepages')
        }

  return (
    <div>
         <div className={commoncarocial.swiper}>
            <div className={commoncarocial.mainContainer} ref={mainDivRef}>
        {
            data && data.map((ele,index)=>(
<div className={commoncarocial.swiperSlide} key={index} onClick={()=>HandleClick(ele)}>
         <img src={ele.pic} alt="" />
        <div className={commoncarocial.titleOverFlow}> <p >{ele.description}</p></div>
         <p>offer price: <span>&#x20B9; {ele.price}</span> </p>
        </div>
            ))
        }
        </div>
        <button className={commoncarocial.leftButton} onClick={slideRight}>
        <RxChevronLeft />
      </button>
      <button className={commoncarocial.rightButton} onClick={slideLeft}>
        <RxChevronRight />
      </button>
      </div>
   </div>
  )
}
