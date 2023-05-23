// import React from 'react'
// import '../AStyles/PumpsPageImages.css'

// import PumpsData from '../DataFolder/PumpsData'

// const PumpsPageImages = () => {
//     return (
//         <div className='pump_page_main'>

//             <div className="pump_heading">
//                 PUMPS
//             </div>

//             <div className="khan_pumps_mini_details">
//                 Khan Industrial Trader deals in differnet types of Pumps such as:
//             </div>

//             <div className="single_boxes_div">

//                 {
//                     PumpsData.map((post) => {
//                         return (
//                             <div className="single_box" key={post.id}>
//                                 <div className="image_pump_single">
//                                     {post.image}
//                                 </div>
//                                 <div className="text_pump_single">
//                                     {post.title}
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }

//             </div>

//         </div>
//     )
// }

// export default PumpsPageImages

import React, { useState } from 'react'

import '../AStyles/PipesDetails.css'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import peribolicPump from '../Assets/PumpAssets/PERIBLOC_PUMP.jpeg'
import perijetPump from '../Assets/PumpAssets/PERIJET_PUMP.jpg'
import ksbPump from '../Assets/PumpAssets/KSB-Multi-Eco.jpg'
import multiEcoProPump from '../Assets/PumpAssets/multi-eco-pro.jpg'
import multiEcoTopPump from '../Assets/PumpAssets/MULTI_ECO_TOP.png'
import cutePump from '../Assets/PumpAssets/CUTE_PUMP.jpeg'
import cuteKsbOriginal from '../Assets/PumpAssets/CUTE_PUMP.jpeg'
import cetriBolicPump from '../Assets/PumpAssets/CENTRIBLOC_PUMP.jpg'

const ForgedSteelFittingsDetails = () => {

    const [highOne, setHighOne] = useState(false)
    const [highTwo, setHighTwo] = useState(false)
    const [highThree, setHighThree] = useState(false)
    const [highFour, setHighFour] = useState(false)
    const [highFive, setHighFive] = useState(false)
    const [highSix, setHighSix] = useState(false)
    const [highSeven, setHighSeven] = useState(false)
    const [highEight, setHighEight] = useState(false)

    return (
        <div className='pipe_details_main'>

            <div className="pipes_details_heading">
                PUMPS
            </div>

            <div className="kinds_area">

                <div className="types_heading">
                    Follwoing are different kinds of Pumps:
                </div>

                <div className="different_expand_types">

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                peribolic pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighOne(!highOne); setHighTwo(false); setHighThree(false); setHighFour(false); setHighFive(false); setHighSix(false); setHighSeven(false); setHighEight(false) }}
                            >
                                {highOne ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highOne ? "animation_drop" : ""}`}>
                            <img src={peribolicPump} alt="elb1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                Perijet pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighTwo(!highTwo); setHighOne(false); setHighThree(false); setHighFour(false); setHighFive(false); setHighSix(false); setHighSeven(false); setHighEight(false) }}
                            >
                                {highTwo ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        {
                            highTwo &&
                            <div className={`pipe_image_div ${highTwo ? "animation_drop" : ""}`}>
                                <img src={perijetPump} alt="elb" />
                            </div>
                        }

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                ksb multi eco Pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighThree(!highThree); setHighTwo(false); setHighOne(false); setHighFour(false); setHighFive(false); setHighSix(false); setHighSeven(false); setHighEight(false) }}
                            >
                                {highThree ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highThree ? "animation_drop" : ""}`}>
                            <img src={ksbPump} alt="elb9" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                Multi eco pro pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFour(!highFour); setHighTwo(false); setHighThree(false); setHighOne(false); setHighFive(false); setHighSix(false); setHighSeven(false); setHighEight(false) }}
                            >
                                {highFour ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFour ? "animation_drop" : ""}`}>
                            <img src={multiEcoProPump} alt="elb17" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                Multi eco top pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFive(!highFive); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighSix(false); setHighSeven(false); setHighEight(false) }}
                            >
                                {highFive ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFive ? "animation_drop" : ""}`}>
                            <img src={multiEcoTopPump} alt="elb13" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                Cute pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighSix(!highSix); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighFive(false); setHighSeven(false); setHighEight(false) }}
                            >
                                {highSix ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highSix ? "animation_drop" : ""}`}>
                            <img src={cutePump} alt="elb21" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                cute ksb original pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighSeven(!highSeven); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighFive(false); setHighSix(false); setHighEight(false) }}
                            >
                                {highSeven ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highSeven ? "animation_drop" : ""}`}>
                            <img src={cuteKsbOriginal} alt="elb21" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text" style={{ textTransform: "capitalize" }}>
                                centribolic pump
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighEight(!highEight); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighFive(false); setHighSeven(false); setHighSix(false) }}
                            >
                                {highEight ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highEight ? "animation_drop" : ""}`}>
                            <img src={cetriBolicPump} alt="elb21" />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ForgedSteelFittingsDetails