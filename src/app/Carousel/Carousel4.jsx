import React from "react";
import Slider from "react-slick";

function Carousel4() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/7-150x150-CNxrUjbv.png" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/6-150x150-PhNqO6bo.png" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/10-150x150-C8NYqgcS.png" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/7-150x150-CNxrUjbv.png" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/11-150x150-BegWhfBn.png" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/8-150x150-CCKPS7rI.png" alt="" />
         </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel4;
