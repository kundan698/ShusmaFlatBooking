import React from "react";
import Slider from "react-slick";

function Carousel2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div>
          <img src="https://media.istockphoto.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=sxRQ398SxAjC4FrRombjl46oDGJVdy23T7i3RXO-mww=" alt=""  className="h-screen"/>
         </div>
        </div>
        <div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg" alt=""className="h-screen" />
         </div>
        </div>
        <div>
        <div>
          <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg" alt="" className="h-screen"/>
         </div>
        </div>
        <div>
        <div>
          <img src="https://img.jamesedition.com/listing_images/2021/07/21/14/36/27/0e5d8d40-e9b7-405d-8100-004329efa588/je/760x470xc.jpg" alt="" className="h-screen"/>
         </div>
        </div>
        <div>
        <div>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-modern-house-in-dubai-a-3d-visualization-of-a-luxurious-architectural-image_3735352.jpg" alt="" className="h-screen"/>
         </div>
        </div>
        <div>
        <div>
          <img src="https://i.pinimg.com/736x/1a/62/61/1a626128ac81728834473be3243e409b.jpg" alt=""className="h-screen" />
         </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel2;
