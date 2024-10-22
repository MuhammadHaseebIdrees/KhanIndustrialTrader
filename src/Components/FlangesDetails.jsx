import React, { useState } from 'react'

import '../AStyles/PipesDetails.css'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import elb1 from '../Assets/flanges/elb1.jpg'
import elb2 from '../Assets/flanges/elb2.jpg'
import elb3 from '../Assets/flanges/elb3.jpg'
import elb4 from '../Assets/flanges/elb4.jpg'
import elb5 from '../Assets/flanges/elb5.jpg'
import elb6 from '../Assets/flanges/elb6.jpg'
import elb7 from '../Assets/flanges/elb7.jpg'
import elb8 from '../Assets/flanges/elb8.jpg'
import elb9 from '../Assets/flanges/elb9.jpg'
import elb10 from '../Assets/flanges/elb10.jpg'
import elb11 from '../Assets/flanges/elb11.jpg'
import elb12 from '../Assets/flanges/elb12.jpg'
import elb13 from '../Assets/flanges/elb13.jpg'
import elb14 from '../Assets/flanges/elb14.jpg'
import elb15 from '../Assets/flanges/elb15.jpg'
import elb16 from '../Assets/flanges/elb16.jpg'
import elb17 from '../Assets/flanges/elb17.jpg'
import elb18 from '../Assets/flanges/elb18.jpg'
import elb19 from '../Assets/flanges/elb19.jpg'
import elb20 from '../Assets/flanges/elb20.jpg'
import elb21 from '../Assets/flanges/elb21.jpg'
import elb22 from '../Assets/flanges/elb22.jpg'
import elb23 from '../Assets/flanges/elb23.jpg'
import elb24 from '../Assets/flanges/elb24.jpg'


const FlangesDetails = () => {

    const [highOne, setHighOne] = useState(false)
    const [highTwo, setHighTwo] = useState(false)
    const [highThree, setHighThree] = useState(false)
    const [highFour, setHighFour] = useState(false)
    const [highFive, setHighFive] = useState(false)
    const [highSix, setHighSix] = useState(false)

    return (
        <div className='pipe_details_main'>

            <div className="pipes_details_heading">
                Flanges
            </div>

            <div className="kinds_area">

                <div className="types_heading">
                    Follwoing are different kinds of Flanges:
                </div>

                <div className="different_expand_types">

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Weld Neck Flanges
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighOne(!highOne); setHighTwo(false); setHighThree(false); setHighFour(false); setHighFive(false); setHighSix(false) }}
                            >
                                {highOne ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highOne ? "animation_drop" : ""}`}>
                            <img src={elb1} alt="elb1" />
                            <img src={elb2} alt="elb1" />
                            <img src={elb3} alt="elb1" />
                            <img src={elb4} alt="elb1" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Socket Weld Flanges
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighTwo(!highTwo); setHighOne(false); setHighThree(false); setHighFour(false); setHighFive(false); setHighSix(false) }}
                            >
                                {highTwo ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        {
                            highTwo &&
                            <div className={`pipe_image_div ${highTwo ? "animation_drop" : ""}`}>
                                <img src={elb5} alt="elb" />
                                <img src={elb6} alt="elb" />
                                <img src={elb7} alt="elb" />
                                <img src={elb8} alt="elb" />
                            </div>
                        }

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Slip On Flanges
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighThree(!highThree); setHighTwo(false); setHighOne(false); setHighFour(false); setHighFive(false); setHighSix(false) }}
                            >
                                {highThree ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highThree ? "animation_drop" : ""}`}>
                            <img src={elb9} alt="elb9" />
                            <img src={elb10} alt="elb10" />
                            <img src={elb11} alt="elb11" />
                            <img src={elb12} alt="elb12" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Threaded Flanges
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFour(!highFour); setHighTwo(false); setHighThree(false); setHighOne(false); setHighFive(false); setHighSix(false) }}
                            >
                                {highFour ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFour ? "animation_drop" : ""}`}>
                            <img src={elb17} alt="elb17" />
                            <img src={elb18} alt="elb18" />
                            <img src={elb19} alt="elb19" />
                            <img src={elb20} alt="elb20" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Blind Flanges
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFive(!highFive); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighSix(false) }}
                            >
                                {highFive ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFive ? "animation_drop" : ""}`}>
                            <img src={elb13} alt="elb13" />
                            <img src={elb14} alt="elb14" />
                            <img src={elb15} alt="elb15" />
                            <img src={elb16} alt="elb16" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Lap Joint Flanges
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighSix(!highSix); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighFive(false) }}
                            >
                                {highSix ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highSix ? "animation_drop" : ""}`}>
                            <img src={elb21} alt="elb21" />
                            <img src={elb22} alt="elb22" />
                            <img src={elb23} alt="elb23" />
                            <img src={elb24} alt="elb24" />
                        </div>

                    </div>

                </div>

            </div>

            <div className="sizes_area">

                <div className="sizes_heading">
                    Sizes
                </div>

                <div className="diameter_outer">
                    <span>Sizes:</span> 1/2" To 24"
                </div>

                <div className="diameter_outer">
                    <span>Grades:</span> 150 ,300 ,600 ,900 Lbs.
                </div>

                <div className="diameter_outer">
                    <span>Specification:</span> A105, DIN 2526, DIN 2632
                </div>

            </div>

        </div>
    )
}

export default FlangesDetails