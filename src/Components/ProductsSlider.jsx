import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductSliderData from '../DataFolder/Product_slider_data'

import "swiper/css";
import "swiper/css/effect-cards";

import '../AStyles/ProductsSlider.css';

import { EffectCards } from "swiper";

export default function ProductsSlider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper my_swiper_custom"
      >
        {
          ProductSliderData.map((post) => {
            let position;
            if (post.id === 7) {
              position = "seventh_image_addition";
            }
            return (
              <SwiperSlide className="my_inner_custom">
                <div className="product_card" key={post.id}>
                  <div className="product_card_heading">
                    {post.title}
                  </div>
                  <div className={`product_card_image ${position}`}>
                    {post.image}
                  </div>
                  <div className={`product_card_read_more`}>
                    {post.buttonSlider}
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
