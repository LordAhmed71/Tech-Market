import ListItems from "./ListItems";
import Slider from "./Slider";

import "./Hero.scss";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="hero">
      <ListItems />
      <div className="container">
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </div>
      {/* <div className="SliderButtons">
        <button className="active"></button>
        <button></button>
        <button></button>
        <button></button>
      </div> */}
    </div>
  );
};

export default Hero;
