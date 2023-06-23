import React from "react";
import Slider from "react-slick";
import { stageData } from "./StageData";
function Stage() {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
        },
      },
    ],
  };
  console.log(stageData);
  return (
    <div className="stage">
      <Slider {...settings}>
        {stageData.map((item, index) => (
          <div key={index[0]} className="stage-wrapper relatives">
            <img
              src={require(`../../Assets/${item.img}`)}
              alt=""
              className="h-[calc(90vh-70px)] w-full object-cover object-center"
            ></img>
            <div className="podium p-5 absolute bottom-20 left-1/2 text-left translate-x-[-50%] mx-auto my-0">
              <h2 className="text-white font-bold text-[35px] uppercase">
                {item.title}
              </h2>
              <p className="text-white">{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Stage;
