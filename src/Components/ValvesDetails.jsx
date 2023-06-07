import React, { useState } from 'react'

import '../AStyles/PipesDetails.css'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import elb1 from '../Assets/valvesAssets/elb1.jpg'
import elb2 from '../Assets/valvesAssets/elb2.jpg'
import elb3 from '../Assets/valvesAssets/elb3.jpg'
import elb4 from '../Assets/valvesAssets/elb4.jpg'
import elb5 from '../Assets/valvesAssets/elb5.jpg'
import elb6 from '../Assets/valvesAssets/elb6.jpg'
import elb7 from '../Assets/valvesAssets/elb7.jpg'
import elb8 from '../Assets/valvesAssets/elb8.jpg'
import elb9 from '../Assets/valvesAssets/elb9.jpg'
import elb10 from '../Assets/valvesAssets/elb10.jpg'
import elb11 from '../Assets/valvesAssets/elb11.jpg'
import elb12 from '../Assets/valvesAssets/elb12.jpg'
import stainer from '../Assets/valvesAssets/stainer.png'
import stainerTwo from '../Assets/valvesAssets/stainerTwo.png'
import elb17 from '../Assets/valvesAssets/elb17.jpg'
import elb18 from '../Assets/valvesAssets/elb18.jpg'
import elb19 from '../Assets/valvesAssets/elb19.jpg'
import elb20 from '../Assets/valvesAssets/elb20.jpg'
import globeOne from '../Assets/valvesAssets/globeone.png'
import golbeTwo from '../Assets/valvesAssets/globeTwo.png'


const ValvesDetails = () => {

    const [highOne, setHighOne] = useState(false)
    const [highTwo, setHighTwo] = useState(false)
    const [highThree, setHighThree] = useState(false)
    const [highFour, setHighFour] = useState(false)
    const [highFive, setHighFive] = useState(false)
    const [highSix, setHighSix] = useState(false)

    return (
        <div className='pipe_details_main'>

            <div className="pipes_details_heading">
                Valves
            </div>

            <div className="kinds_area">

                <div className="types_heading">
                    Follwoing are different kinds of Valves:
                </div>

                <div className="different_expand_types">

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Butterfly Valves
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
                                Gate Valves
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
                                Check Valves
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
                                Ball Valves
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
                                Strainer
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighFive(!highFive); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighSix(false) }}
                            >
                                {highFive ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highFive ? "animation_drop" : ""}`}>
                            <img src={stainer} alt="stainer" />
                            <img src={stainerTwo} alt="stainerTwo" />
                        </div>

                    </div>

                    <div className="high_tem_div">

                        <div className="high_temp_heading">

                            <div className="high_temp_text">
                                Globe Valves
                            </div>

                            <div
                                className="heading_icon_expand"
                                onClick={() => { setHighSix(!highSix); setHighTwo(false); setHighThree(false); setHighFour(false); setHighOne(false); setHighFive(false) }}
                            >
                                {highSix ? <FaAngleUp /> : <FaAngleDown />}
                            </div>

                        </div>

                        <div className={`pipe_image_div ${highSix ? "animation_drop" : ""}`}>
                            <img src={globeOne} alt="globeOne" />
                            <img src={golbeTwo} alt="golbeTwo" />
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
                    <span>Grades:</span> PN 16, PN 20, PN 25, PN 40
                </div>

                <div className="diameter_outer">
                    <span>Specification:</span> ANSI, ASME, BS, JIS, DIN.
                </div>

            </div>

        </div>
    )
}

export default ValvesDetails