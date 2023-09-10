"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import hero1 from "../../images/slider/sliderImg_1.jpg";
import hero2 from "../../images/slider/sliderImg_2.jpg";
import hero3 from "../../images/slider/sliderImg_3.jpg";
import hero4 from "../../images/slider/sliderImg_4.jpg";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <div className="relative">
      <Swiper className='mySwiper'>
        <SwiperSlide>
          <Image src={hero1} alt='hero slide 1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={hero2} alt='hero slide 1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={hero3} alt='hero slide 1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={hero4} alt='hero slide 1' />
        </SwiperSlide>
      </Swiper>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
}
