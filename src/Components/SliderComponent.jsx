import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import HomeSliderData from '../DataFolder/HomeSliderData'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../AStyles/SliderComponent.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperComponent = () => {

    return (
        <div>

            <div className="testimonials">
                Overview
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
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
                    HomeSliderData.map((post) => {
                        let position, name;
                        if (post.id === 1) {
                            position = "first_slide";
                            name = "first_slide_name";
                        }
                        if (post.id === 2) {
                            position = "second_slide";
                            name = "second_slide_name";
                        }
                        if (post.id === 3) {
                            position = "third_slide";
                            name = "third_slide_name";
                        }
                        if (post.id === 4) {
                            position = "fourth_slide";
                            name = "fourth_slide_name";
                        }
                        if (post.id === 5) {
                            position = "fifth_slide";
                            name = "fifth_slide_name";
                        }
                        if (post.id === 6) {
                            position = "sixth_slide";
                            name = "sixth_slide_name";
                        }
                        if (post.id === 7) {
                            position = "seventh_slide";
                            name = "seventh_slide_name";
                        }

                        return (
                            <div className="most_outer_swiper">
                                <SwiperSlide>
                                    <div className={`outer_slider_view ${position}`} key={post.id} >
                                        <div className="inner_slider_view">
                                            <div className="left_inner_slider">
                                                <div className="slider_image">
                                                    {post.image}
                                                </div>
                                            </div>
                                            <div className="right_inner_slider">
                                                <div className={`name_slider ${name}`}>
                                                    {post.title}
                                                </div>
                                                <div className="text_slider">
                                                    {post.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>
        </div >
    );
}

export default SwiperComponent