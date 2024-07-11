import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import imgSlider from "../../assets/imgSlider";
const Residencies = () => {
  const SliderButtons=()=>{
    const swiper=useSwiper();
    return <div className="residencies-button">
      <button onClick={()=>{swiper.slidePrev()}}>&lt;</button>
      <button onClick={()=>{swiper.slideNext()}}>&gt;</button>
    </div>
  }
  return (
    <div id="res" className="r-wrapper">
      <div className="residencies">
        <div className="residencies-title">
          <span className="orangeText">
            Best Choices
          </span>
          <span className="primaryText">Popular Residencies</span>
        </div>
      </div>
      <Swiper {...sliderSettings}>
        <SliderButtons/>
        {
          imgSlider.map((item,index)=>{
           return <SwiperSlide key={index}>
            <div className="card">
              <img src={item.image}/>
              <span className="secondaryText price">
                <span style={{color:"orange"}}>$</span>
                <span>{item.price}</span>
              </span>
              <span className="primaryText">{item.name}</span>
              <span className="secondaryText">{item.detail}</span>
            </div>
           </SwiperSlide> 
          })
        }
      </Swiper>
    </div>
  );
};

export default Residencies;
