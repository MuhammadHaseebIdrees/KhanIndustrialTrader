import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../AStyles/Clients_data.css'

import clientData from "../DataFolder/ClientsData";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Clientsdata() {

    const [perView, setPerView] = useState(5)

    const setView = () => {

        if (window.innerWidth < 900) {
            setPerView(2)
        }

        if (window.innerWidth < 700) {
            setPerView(1)
        }

    }

    useEffect(() => {
        setView()
    }, [ ])

    return (
        <>
            <div className="our_clients_heading">
                Our Clients
            </div>
            <Swiper
                slidesPerView={perView}
                spaceBetween={30}
                // centeredSlides={true}
                autoplay={{
                    delay: 250,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper add_home_custom_class_two"
            >
                {
                    clientData.map((post) => {
                        return (
                            <SwiperSlide className="sliderrr">
                                <div className="single_slide_inner">
                                    <div className="image_team_slide">
                                        {post.imageC}
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
